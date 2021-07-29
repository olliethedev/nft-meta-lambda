

module.exports.get = (event, context, callback) => {
    const meta = {
        "name": "Super Stickmen",
        "description": "Limited collection of stickmen.",
        "image": "https://www.publicdomainpictures.net/pictures/230000/velka/running-stickman.jpg",
        "external_link": "https://www.publicdomainpictures.net/pictures/230000/velka/running-stickman.jpg",
    };
    const response = {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
          },
        statusCode: 200,
        body: JSON.stringify(meta),
      };
      callback(null, response);
}