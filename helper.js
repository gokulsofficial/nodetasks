var fs = require('fs');

var readfile = function (fileName) {
    return new Promise(function (resolve, reject) {
        fs.readFile(fileName, 'utf-8', function (error, data) {
            if (error) {
                reject(error);
            } else {
                resolve(data);
            }
        });
    });
}
module.exports = readfile;