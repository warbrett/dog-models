var fs = require('fs');
var path = require('path');

function dogModels(dirname){

  var exportArray = [];
  var files = fs.readdirSync(dirname);

  files.forEach(function(file){
    var item = path.join(dirname, file);

    exportObj = require(item);

    exportArray.push(exportObj);
  });

  return exportArray;
}

module.exports = dogModels;
