# dog-models

Allows you to specify a directory pushing the exports of each file to an array. Useful for waterline models with dogwater.

## Usage

```
var models = require('dog-models')(__dirname + '/models');

...
// inside dogwater options object
  models: models
...


```
