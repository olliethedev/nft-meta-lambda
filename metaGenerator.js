module.exports = function generate(config, id) {
  const {attributes, assets} = pickTraits(config)
  let meta = {
    external_url: `https://nft-asset-bucket.s3.amazonaws.com/${id}.png`,
    image: `https://nft-asset-bucket.s3.amazonaws.com/${id}.png`,
    name: `Stickman #${id}`,
    attributes: [...attributes],
  };

  return {meta, assets};
};
function pickTraits(config) {
  const outMeta = [];
  const outAssets = [];
  config.forEach((traitGroup) => {
    probablyChooseSingle(traitGroup, (selectedTraitGroup) => {
      chooseOne(selectedTraitGroup.choices, (selectedTrait) => {
        outMeta.push({
          trait_type: traitGroup.name,
          value: selectedTrait.name,
        });
        outAssets.push(selectedTrait.asset)
      });
    });
  });
  return {attributes: outMeta, assets:outAssets};
}

function probablyChooseSingle(item, onChoice) {
  const rnd = Math.random();
  if (rnd < item.probability) {
    onChoice(item);
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

        // todo: consider the edge case of `if (!pickedValue) `
    }

    onChoice(pickedValue);
}
