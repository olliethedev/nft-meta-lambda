

module.exports.get = (event, context, callback) => {
    const meta = {
        "name": "FUD Monsters",
        "description": "FUD Monsters is a collection of 8888 unique NFTs that are all randomly generated and live on the Ethereum Blockchain, and follows the ERC-721 standard.",
        // "image": "https://www.publicdomainpictures.net/pictures/230000/velka/running-stickman.jpg",
        // "external_link": "https://www.publicdomainpictures.net/pictures/230000/velka/running-stickman.jpg",
    };
    const response = {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
          },
        body: JSON.stringify(meta),
      };
      callback(null, response);
}