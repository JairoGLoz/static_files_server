var express = require('express');
var app = express();

app.use('/resources', express.static('remote_resources'));

app.listen(process.env.PORT || 3001);

console.log('Running on port 3001');