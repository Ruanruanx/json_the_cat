const  request = require('request');
const parameter = process.argv[2];
request('https://api.thecatapi.com/v1/breeds/search?q='+parameter, (error, response, body) => {
  if (error) {
    console.log('error:', error);
  }
  if (response) {
    console.log('statusCode:', response.statusCode);
  }
  if (body) {
    const data = JSON.parse(body);
    console.log(data[0].description);
    //console.log(typeof(data));
  }
});