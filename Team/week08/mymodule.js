const fs = require('fs');
const path = require('path');

module.exports = function(dir, file, (err, list) => {
    fs.readdir(process.argv[2], "utf8", (err, list) => {
        if(err) return console.log("BROKEN!");
    
        list.forEach( (item) => {
        
            if(path.extname(item) == ('.' + process.argv[3]))
                console.log(item);
        });
    });
}); ) {
    fs.readdir(process.argv[2], "utf8", (err, list) => {
        if(err) return console.log("BROKEN!");
    
        list.forEach( (item) => {
        
            if(path.extname(item) == ('.' + process.argv[3]))
                console.log(item);
        });
    });
    
};

function(dir, file, (err,list) => {
    fs.readdir(process.argv[2], "utf8", (err, list) => {
        if(err) return console.log("BROKEN!");

        list.forEach( (item) => {
        
            if(path.extname(item) == ('.' + process.argv[3]))
                console.log(item);
        });
    });
};) {

}