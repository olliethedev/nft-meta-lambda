const generator = require("../metaGenerator");
const config = require("../config");
const imageGenerator = require("../imageGenerator");
const imageStorage = require('../imageStorage');
const { getMeta } = require('../metaStorage');

module.exports.get = async (event, context, callback) => {
  //todo: check if token id has been minted before creating new asset
  const id = event["pathParameters"]["id"];
  console.log({ id });
  const resp = await getMeta(id);
  const { meta, assets } = generator(config, id);
  const buffer = await imageGenerator(assets);
  console.log("got generated image buffer")
  await imageStorage(buffer, id);
  console.log("saved to storage")
  const response = {
    statusCode: 200,
    body: JSON.stringify(meta),
  };

  callback(null, response);
};
