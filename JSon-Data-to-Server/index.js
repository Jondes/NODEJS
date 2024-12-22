const express = require("express");
const app = express();
app.use(express.json());

const data = {
    "name": "Johnson Guedes",
    "email": "johnson@gmail.com",
    "Address": "4 Erconwald street, London",
    "Profession": "Web Developer"
                 

}

app.get("/", function (req, res) {
    res.json(data);
});

app.listen(3000, function () {
    console.log("Server started on port 3000");
});