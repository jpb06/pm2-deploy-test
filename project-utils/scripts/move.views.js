const fs = require('fs-extra');

fs.copy('./src/views', './dist/src/views', err => {
   if (err) return console.log(err);

   console.log("Success");
});