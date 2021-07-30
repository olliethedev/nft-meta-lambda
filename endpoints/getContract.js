

module.exports.get = (event, context, callback) => {
    const meta = {
        "name": "Super Stickmen",
        "description": "Limited collection of stickmen.",
        "image": "https://www.publicdomainpictures.net/pictures/230000/velka/running-stickman.jpg",
        "external_link": "https://www.publicdomainpictures.net/pictures/230000/velka/running-stickman.jpg",
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