const fs = require('fs');
const path = require('path');

fs.readdir(process.argv[2], "utf8", (err, lists) => {
    if(err) return console.log("BROKEN!");

    lists.forEach( (item) => {
    
        if(path.extname(item) == ('.' + process.argv[3]))
            console.log(item);
    });
});