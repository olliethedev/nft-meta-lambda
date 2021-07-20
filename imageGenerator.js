const sharp = require("sharp");
module.exports = async function imageGenerator(imageNameArray) {
    console.log("... composing image");
  const imageData = imageNameArray.map((imageName) => ({
    input: "./assets/" + imageName,
    gravity: "southeast",
  }));
  console.log(imageData);
  const composite = await sharp("./assets/base.png").composite(imageData);
  return composite.png().toBuffer();
};
