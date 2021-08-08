const fs = require('fs');
const path = require('path');

const ext = '.' + process.argv[3];

fs.readdir(process.argv[2], function(err, data){
    if(!err){
        data.forEach(function(file) {
            if (path.extname(file) === ext) {
                console.log(file);
            };
        });
    }
});