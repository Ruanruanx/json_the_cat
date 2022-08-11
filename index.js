const parameter = process.argv[2];
const { fetchBreedDescription } = require('./breedFetcher');
fetchBreedDescription(parameter, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
    return;
  } else {
    console.log(desc);
    //console.log(typeof(data));
  }
});