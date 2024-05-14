const fs = require('fs');
const zlib = require('zlib');


const fileContents = fs.createReadStream('./unityLibrary_small.zip');
const writeStream = fs.createWriteStream('/unityLibrary');
const unzip = zlib.createGunzip();


function unzipUnityLibrary(){
  fileContents.pipe(unzip).pipe(writeStream);
}



module.exports = {
    unzipUnityLibrary
}