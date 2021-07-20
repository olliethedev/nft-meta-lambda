const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.getMeta = async function getMeta(id){
    const params = {
        TableName: process.env.DYNAMODB_TABLE,
        Key: {
          id: id,
        },
      };
    
      const resp = await dynamoDb.get(params).promise();
      console.log(resp);
}