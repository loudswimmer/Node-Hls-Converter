var dir = 'videos';
var outputDir = 'm3u8';
var fs = require('fs');
var ffmpeg = require('./ffmpeg');
 
// fs.readdir(dir, function(error, files){
//     files.forEach(file => {
//         console.log(file);
//     })
// })


var files = fs.readdirSync(dir);
files.forEach(file => {
    // check file ext
    if (file.match(/\.(mp4)$/)){
        var fileName = file.replace(/\.[^/.]+$/, "")
        console.log('request convert:' + fileName);
        // ffmpeg.convert(dir, fileName, outputDir);
    }
})


ffmpeg.convert(dir, "1.적요숨쉬다", outputDir);