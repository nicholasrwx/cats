const fs = require('fs');
//const { callback } = require('util');

const breedDetailsFromFile = function(breed, callback) {

console.log('breedDetailsFromFile: Calling readFile...');

fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {


if (!error) callback(data);

                         //it looks for the txt data at the same time
                         //data is returned undefined
                         //which closes out the function, withouth returning our result.   
});                      //so it's important to note that this return within,
                         //fs.readfile only returns from the callback function,
                         //not from the breedDetailsFromFile




};



const CatBreed = breed => {
console.log('Return Value: ', breed);
};


breedDetailsFromFile('Bombay', CatBreed);
