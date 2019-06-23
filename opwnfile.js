const open = require('open');
 
// Opens the image in the default image viewer
(async () => {
    await open('Input.txt', {wait: true});
    console.log('The image viewer app closed');
})();