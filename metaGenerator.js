const fs = require("fs");
const assetFolderPath = __dirname + "/assets/";

module.exports = function generate(config, id) {
  const {attributes, assets} = pickTraits(config)
  let meta = {
    external_url: `https://nft-asset-bucket.s3.amazonaws.com/${id}.png`,
    image: `https://nft-asset-bucket.s3.amazonaws.com/${id}.png`,
    name: `FudMonster #${id}`,
    attributes: [...attributes],
  };

  return {meta, assets};
};
function pickTraits(config) {
  const outMeta = [];
  const outAssets = [];
  let keys = getKeys(config);
  let keyValues = {};
  config.forEach((traitGroup) => {
    chooseOne(traitGroup.choices, (selectedTrait) => {
      if(traitGroup.id){
        keyValues[traitGroup.id] = selectedTrait.asset;
      }
      if(selectedTrait.asset){
        outMeta.push({
          trait_type: traitGroup.name,
          value: selectedTrait.name,
        });
        outAssets.push(lookUpAssets(traitGroup.folder+selectedTrait.asset, selectedTrait.asset, traitGroup, keyValues))
      }
    });
  });
  return {attributes: outMeta, assets: outAssets};
}

function lookUpAssets(assetPath, asset, traitGroup, keys) {
  
  if(traitGroup.key){
    const variantPath = assetFolderPath+assetPath+keys[traitGroup.key];
    if(traitGroup.key && fs.existsSync(variantPath)){//key exists and exists in folder
      return assetPath+keys[traitGroup.key];
    }else{//default asset
      return assetPath+asset.replace("/",".png");
    }
  }else{
    return assetPath;
  }
}

function chooseOne(values, onChoice) {
    let i, pickedValue,
            randomNr = Math.random(),
            threshold = 0;

    for (i = 0; i < values.length; i++) {
        if (values[i].probability === '*') {
            continue;
        }

        threshold += values[i].probability;
        if (threshold > randomNr) {
                pickedValue = values[i];
                break;
        }
    }

    onChoice(pickedValue);
}

function getKeys(config) {
  let keys = {};
  config.forEach((layer) => {
    if (layer.id) {
      keys[layer.id] = [];
      layer.choices.forEach((choice) => {
        if (choice.asset) {
          if (!isAssetFolder(choice.asset)) {
            keys[layer.id].push(choice.asset);
          }
        }
      });
    }
  });
  return keys;
}

function isAssetFolder(assetString) {
  return assetString.endsWith("/");
}
