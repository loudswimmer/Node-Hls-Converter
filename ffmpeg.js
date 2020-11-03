const ffmpeg = require('fluent-ffmpeg');
const ffmpegInstaller = require('@ffmpeg-installer/ffmpeg');

ffmpeg.setFfmpegPath(ffmpegInstaller.path);

// check 
// https://github.com/t-mullen/hls-server/blob/master/README.md

// Below is FFMPEG converting MP4 to HLS with reasonable options.
// https://www.ffmpeg.org/ffmpeg-formats.html#hls-2
// fmpeg('input.mp4', { timeout: 432000 }).addOptions([
//     '-profile:v baseline', // baseline profile (level 3.0) for H264 video codec
//     '-level 3.0', 
//     '-s 640x360',          // 640px width, 360px height output video dimensions
//     '-start_number 0',     // start the first .ts segment at index 0
//     '-hls_time 10',        // 10 second segment duration
//     '-hls_list_size 0',    // Maxmimum number of playlist entries (0 means all entries/infinite)
//     '-f hls'               // HLS format
//   ]).output('public/videos/output.m3u8').on('end', callback).run()

/// TODO : make Class
module.exports.convert = (dir, fileName, outputDir) => {
    var input = dir + '/' + fileName + '.mp4';
    var output = outputDir + '/' + fileName + '.m3u8';
    ffmpeg(input, { timeout: 432000 }).addOptions([
        '-profile:v baseline',
        '-level 3.0',
        '-start_number 0',
        '-hls_time 1',
        '-hls_list_size 0',
        '-f hls'
    ]).output(output).on('end', () => {
        console.log('end : %s -> %s', input, output);
    }).run();
};