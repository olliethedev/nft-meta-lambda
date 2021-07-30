const generator = require("../metaGenerator");
const config = require("../config");
const imageGenerator = require("../imageGenerator");
const imageStorage = require("../imageStorage");
const { getMeta, saveMeta } = require("../metaStorage");
const { getCurrentId } = require("../contract");

module.exports.get = async (event, context, callback) => {
  //todo: check if token id has been minted before creating new asset
  const id = event["pathParameters"]["id"];

  console.log({ id });
  const idNumber = parseInt(id, 10);
  if (isNaN(idNumber) || idNumber < 1) {
    console.log("Got invalid id param ...");
    handleInvalidId(callback);
  } else {
    const existingMeta = await getMeta(idNumber.toString());
    console.log("Got existing Meta...");
    if (existingMeta) {
      handleExistingItem(existingMeta, callback);
    } else {
      const currentId = await getCurrentId();
      if (idNumber > currentId) {
        console.log("Got invalid id based on contract state...");
        handleInvalidId(callback);
      } else {
        console.log("Creating new Meta...");
        handleNewItem(idNumber, callback);
      }
    }
  }
};

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

function handleNewItem(idNumber, callback) {
  const { meta, assets } = generator(config, idNumber);
  const buffer = await imageGenerator(assets);
  console.log("got generated image buffer");
  await imageStorage(buffer, idNumber);
  console.log("saved image to storage");
  const dbResp = await saveMeta(idNumber.toString(), meta);
  console.log(dbResp);
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
