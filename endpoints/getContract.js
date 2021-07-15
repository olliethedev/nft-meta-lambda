

module.exports.get = (event, context, callback) => {
    const meta = {
        "name": "Devs NFT",
        "description": "Collection of developers you can own and trade",
        "image": "https://i.kym-cdn.com/entries/icons/original/000/003/681/maxresdefault.jpg",
        "external_link": "https://www.google.com/search?q=nerds+memes",
    };
    const response = {
        statusCode: 200,
        body: JSON.stringify(meta),
      };
      callback(null, response);
}