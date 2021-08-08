const fs = require('fs');

const buf = fs.readFileSync(process.argv[2]);
const strings = buf.toString().split('\n').length - 1;
console.log(strings);