const generator = require("../metaGenerator");
const config = require("../config");
const imageGenerator = require("../imageGenerator");
const imageStorage = require("../imageStorage");
const { getMeta, saveMeta } = require("../metaStorage");
const { getCurrentId } = require("../contract");

const hideMetadata = false;
module.exports.get = async (event, context, callback) => {
  //todo: check if token id has been minted before creating new asset
  const id = event["pathParameters"]["id"];

  console.log({ id });
  const idNumber = parseInt(id, 10);
  if (isNaN(idNumber) || idNumber < 1) {
    console.log("Got invalid id param ...");
    handleInvalidId(callback);
  } else {
    console.log("Getting Meta...");
    const existingMeta = await getMeta(idNumber.toString());
    if (existingMeta) {
      handleExistingItem(existingMeta, callback);
    } else {
      const currentId = await getCurrentId();
      if (idNumber > currentId) {
        console.log("Got invalid id based on contract state...");
        handleInvalidId(callback);
      } else {
        if(hideMetadata){
          console.log("Using placeholder meta...");
          getPlaceholderMetadata(id, callback)
        }else{
          console.log("Creating new Meta...");
          await handleNewItem(idNumber, callback);
        }
      }
    }
  }
};

function getPlaceholderMetadata(id, callback) {
  let meta = {
    name: `Monster #${id}`,
    attributes: [],
    image: 'https://lh3.googleusercontent.com/DaBgHYG67N_G_b9jkY3N3x6tq6bwgJvAGkQ7pisFe4DegOW4WJkTOPEhJvdDB8o6BpI7NnIwAMI4YaYF2ZJMO88wqGGKFTtS3ywC2A=s0',
  };
  const response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(meta),
  };
  callback(null, response);
}

function handleInvalidId(callback) {
  const response = {
    statusCode: 400,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({ error: "Invalid token ID" }),
  };
  callback(null, response);
}

async function handleNewItem(idNumber, callback) {
  const { meta, assets } = generator(config, idNumber);
  const buffer = await imageGenerator(assets);
  console.log("got generated image buffer");
  await imageStorage(buffer, idNumber); 
  saveMeta(idNumber.toString(), meta);
  console.log("saved image to storage");
  console.log("saved meta to storage");
  const response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(meta),
  };
  callback(null, response);
}

function handleExistingItem(existingMeta, callback) {
  console.log("... got existing Meta");
  const response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(existingMeta),
  };
  callback(null, response);
}
