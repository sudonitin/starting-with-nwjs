
// // Requiring fs module in which 
// // readFile function is defined. 
// const fs = require('fs') 
  
// // Reading data in utf-8 format 
// // which is a type of character set. 
// // Instead of 'utf-8' it can be  
// // other character set also like 'ascii' 
// fs.readFile('Input.txt', 'utf-8', (err, data) => { 
//     if (err) throw err; 
  
//     // Converting Raw Buffer to text 
//     // data using tostring function. 
//     console.log(data); 
// }) 

const dirfile = 'dir.txt';
const flagsfile = 'Input.txt';

const fs = require('fs');

fs.open(flagsfile, 'r+', (err, fd)=>{
    if(err){
        console.log(`code: ${err.code}\nmessage: ${err.message}`);
    }else{
        console.log(`file (${fd} successfully closed)`);
        fs.close(fd, (err)=>{
            console.log('closed');
        })
    }
})