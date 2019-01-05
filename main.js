var readfile = require('./helper.js')
var fileName = 'sometext.txt'
var fileName1 = 'test.txt'


var readFile = readfile(fileName).then((message) => {
    console.log(message);
});
var readFile = readfile(fileName1).then((message1) => {
    console.log(message1);
});

async.waterfall([
    readFile
], function(err){
    if(err){
        console.log(err);
    }
});
