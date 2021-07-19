const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies
const s3 = new AWS.S3();
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.get = async (event, context, callback) => {
  //todo: check if token id has been minted before creating new asset
  const id = event['pathParameters']['id'];
  console.log({id});
  
    const meta = {
        "description": "Friendly developer that enjoys long coding sessions", 
        "external_url": "https://knowyourmeme.com/memes/nerd-on-computer", 
        "image": "https://i.kym-cdn.com/entries/icons/original/000/023/419/nerd_smoking.JPG", 
        "name": "Ollie the Dev",
        "attributes": [ 
            {
                "trait_type": "Base", 
                "value": "Nerd"
              }, 
            {
                "trait_type": "Personality", 
                "value": "Introvert"
              }, 
              {
                "trait_type": "Typing Speed", 
                "value": 70,
                "max_value":100
              }, 
              {
                "trait_type": "Senior Developer Level", 
                "value": 8,
                "max_value":10
              }, 
              {
                "display_type": "boost_number", 
                "trait_type": "Caffeine Boost", 
                "value": 20
              },
         ], 
    };
    const buffer = Buffer.from("Testing bucket!", 'utf8');
    const s3Resp = s3.putObject({
      Bucket: process.env.BUCKET,
      Key: "test2.txt",
      Body: buffer,
    }).promise();
    console.log(s3Resp);
    const response = {
        statusCode: 200,
        body: JSON.stringify(meta),
      };
      callback(null, response);
}