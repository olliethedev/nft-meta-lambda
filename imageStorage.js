const AWS = require("aws-sdk"); // eslint-disable-line import/no-extraneous-dependencies
const s3 = new AWS.S3();

module.exports = function imageStorage(buffer, id) {
  console.log("...saving to s3");
  return s3
    .putObject({
      Bucket: process.env.BUCKET,
      Key: `${id}.png`,
      Body: buffer,
    })
    .promise();
};
