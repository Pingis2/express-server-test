const express = require("express");
const app = express();

app.get("/", function(req, res) {
    res.send("express på vercel igen")
});

app.listen(3001, function() {
    console.log("servern är igång på port 3001");
})

module.exports = app;
