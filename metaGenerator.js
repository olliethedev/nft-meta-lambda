const fs = require("fs");
const assetFolderPath = __dirname + "/assets/";

module.exports = function generate(config, id) {
  const {attributes, assets} = pickTraits(config)
  let meta = {
    image: `https://nft-asset-bucket.s3.amazonaws.com/${id}.png`,
    name: `Monster #${id}`,
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
  // console.log({assetPath, asset, traitGroup,})
  if(traitGroup.key){
    const variantPath = assetFolderPath+assetPath+keys[traitGroup.key];
    const defaultVariantPath = assetFolderPath +assetPath+asset.replace("/",".png");
    if(fs.existsSync(variantPath) && fs.lstatSync(variantPath).isFile()){//asset exists in trait folder
      // console.log("returning 1:"+(assetPath+keys[traitGroup.key]));
      return assetPath+keys[traitGroup.key];
    }else if(fs.existsSync(defaultVariantPath)){//default asset in trait folder
      // console.log("returning 2:"+defaultVariantPath);
      return assetPath+asset.replace("/",".png");
    }else{ //default asset
      // console.log("returning 3:"+assetPath);
      return assetPath;
    }
  }else{//default asset
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
