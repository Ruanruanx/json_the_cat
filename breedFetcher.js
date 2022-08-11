const request = require('request');

const fetchBreedDescription = function(breed, done) {
  request('https://api.thecatapi.com/v1/breeds/search?q=' + breed, (error, response, body) => {
    if (error) {
      done(error);
      return;
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      done('That cat does not exist', null);
      return;
    }
    if (data[0] !== undefined) {
      done(null, data[0].description);
    }
  });
};

module.exports = { fetchBreedDescription };
