const express = require("express");
const app = express();

app.listen(3000, function() {
    console.log("servern är igång på port 3000");
    
})

app.get("/", function(req, res) {
    res.send("<h1>bajsar</h1>")
});
