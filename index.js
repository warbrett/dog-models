var fs = require('fs');
var path = require('path');

function dirToArray(dirname){

  var exportArray = [];
  var files = fs.readdirSync(dirname);

  files.forEach(function(file){
    var item = path.join(dirname, file);

    fileObj = require(item);

    exportArray.push(file);
  });

  return exportArray;
}

module.exports = dirToArray;
