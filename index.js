// Published With MIT License, 2018.
// Details on LICENSE

const express = require('express'); // Express
let app = express();

let data = require('./router/data');

if ( !(process.env.SCHOOL_CODE && process.env.PHASE) ) throw Error("Must need Environment Variables: SCHOOL_CODE, PHASE")

// ROOT
app.get('/', function(req, res) {
    res.send("Cafesium, Online.<br><br>Data : /data<br>LICENSE : /license");
});

// Data
app.use('/data', data);

app.use('/license', express.static('LICENSE'));

// 404 Page
app.all('*', function(req, res) {
    res.status(404).send( process.env.NOT_FOUND ?
                          process.env.NOT_FOUND :
                          "404 Not Found"
                        );
});

app.listen(6537, function() {
    console.log("[CAFESIUM] Listening on Port 6537")
});
