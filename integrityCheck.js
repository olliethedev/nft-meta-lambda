const configFile = require("./config");
const generator = require("./metaGenerator");
const fs = require("fs");
// const imageGenerator = require('./imageGenerator');
const assetFolderPath = __dirname + "/assets/";

function check() {
  console.log("Check started....");
  console.log(__dirname);
  checkProbabilityTotal(configFile);
  checkAssetPaths(configFile);
  checkAssetKeys(configFile);
  checkComposition(configFile, 10000);
}
function checkProbabilityTotal(config) {
  config.forEach((layer) => {
    var total = layer.choices.reduce(function (prev, cur) {
      return prev + cur.probability;
    }, 0);
    if (total < 0.99999) {
      throw new Error(
        "Probabilities check failed in " +
          layer.name +
          " with total of " +
          total
      );
    }
  });
  console.log("Probabilities check passed!");
}
function checkAssetPaths(config) {
  config.forEach((layer) => {
    layer.choices.forEach((choice) => {
      if (choice.asset) {
        if (isAssetFolder(choice.asset)) {
          const pathToCheck = assetFolderPath + layer.folder + choice.asset;
          if (!fs.existsSync(pathToCheck)) {
            throw new Error("Asset Folder not found at path: " + pathToCheck);
          }
        } else {
          //just an image
          const pathToCheck = assetFolderPath + layer.folder + choice.asset;
          if (!fs.existsSync(pathToCheck)) {
            throw new Error("Asset not found at path: " + pathToCheck);
          }
        }
      }
    });
  });
  console.log("Asset Path check passed!");
}
function checkAssetKeys(config) {
  let keys = {};
  config.forEach((layer) => {
    if (layer.id) {
      keys[layer.id] = [];
      layer.choices.forEach((choice) => {
        if (choice.asset) {
          if (isAssetFolder(choice.asset)) {
            throw new Error("Folder cant be an asset key");
          } else {
            keys[layer.id].push(choice.asset);
          }
        }
      });
    } else {
      layer.choices.forEach((choice) => {
        if (choice.asset) {
          if (isAssetFolder(choice.asset)) {
            const pathToCheck = assetFolderPath + layer.folder + choice.asset;
            fs.readdirSync(pathToCheck).forEach((file) => {
              if (file.replace(".png", "") !== choice.asset.replace("/", "")) {
                // not default asset
                if (keys[layer.key]) {
                  if (!keys[layer.key].includes(file)) {
                    console.log(keys);
                    console.log({ choice });
                    throw new Error("Missing asset key for item : " + file);
                  }
                } else {
                  console.log(keys)
                  throw new Error("Missing asset category key : " + layer.key + "/"+choice.asset);
                }
              }
            });
          }
        }
      });
    }
  });
  console.log("Asset Keys check passed!");
}
async function checkComposition(config, times) {
  for (var i = 0; i < times; i++) {
    const { assets } = generator(config, i);
    assets.forEach((asset) => {
      const assetPath = assetFolderPath+asset;
      if ( !fs.existsSync(assetPath) || !fs.lstatSync(assetPath).isFile()) {
        console.log({asset});
        console.log(assetPath);
        throw new Error("Asset path not found : " + assetPath);
      }
    });
    // console.log({assets})
    // await imageGenerator(assets);
  }
  console.log("Composition check passed!");
}

function isAssetFolder(assetString) {
  return assetString.endsWith("/");
}

check();
