const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies
const dynamoDb = require('./dynamodb');

module.exports.getMeta = async function getMeta(id){
    const params = {
        TableName: process.env.DYNAMODB_TABLE,
        Key: {
          id: id,
        },
      };
    
      const resp = await dynamoDb.get(params).promise();
      console.log({resp});
      return resp.Item?resp.Item:null;
}

module.exports.saveMeta = (id, meta) => {
    console.log("... saving to db")
    const timestamp = new Date().getTime();
  
    const params = {
      TableName: process.env.DYNAMODB_TABLE,
      Item: {
        id: id,
        createdAt: timestamp,
        updatedAt: timestamp,
        ...meta
      },
    };
  
    // write the todo to the database
    return dynamoDb.put(params).promise();
  };