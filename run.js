/**
 * Usage:
 * $> node run.js [ port=<port_number> ]
 * 
 * static content are located at public folder
 */
const express = require("express");

const app = express();

let port = 80;

process.argv.forEach(function(val, index, array) {

    if (/^port\s*=\s*\d+/.test(val)) {
        port = parseInt(val.replace(/^port\s*=\s*/,''));
    }

});

app.use(express.static("public"));

app.listen(port, () => {
	console.log(`app listening to http://localhost:${port}`);
});
