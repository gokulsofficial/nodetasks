var readfile = require('./helper.js')
var fileName = 'sometext.txt'
var fileName1 = 'test.txt'

readfile(fileName).then((message) => {
readfile(fileName1).then((message1) => {
console.log(message);
console.log(message1);
});
});