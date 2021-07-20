const generator = require("../metaGenerator");
const config = require("../config");
const imageGenerator = require("../imageGenerator");
const imageStorage = require('../imageStorage');
const { getMeta, saveMeta } = require('../metaStorage');

module.exports.get = async (event, context, callback) => {
  //todo: check if token id has been minted before creating new asset
  const id = event["pathParameters"]["id"];
  console.log({ id });
  const existingMeta = await getMeta(id);
  if(existingMeta){
    console.log("... got existing Meta")
    const response = {
      statusCode: 200,
      body: JSON.stringify(existingMeta),
    };
    callback(null, response);
  }else{
    console.log("... creating new Meta")
    const { meta, assets } = generator(config, id);
    const buffer = await imageGenerator(assets);
    console.log("got generated image buffer")
    await imageStorage(buffer, id);
    console.log("saved image to storage")
    const dbResp = await saveMeta(id, meta);
    console.log(dbResp);
    const response = {
      statusCode: 200,
      body: JSON.stringify(meta),
    };
    callback(null, response);
  }
};
