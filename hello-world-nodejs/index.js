var express = require('express')
const process = require('process')

var expressapp = express()
expressapp.get('/', function(req, res) {
    res.send('{"message":"Hello World.. Web App with NodeJS!"}')
})

expressapp.listen(5000, function() {
    console.log('Ready on Port 5000.')
})

/* To Handle CRTL+C */
process.on('SIGINT', function() {
    process.exit();
});