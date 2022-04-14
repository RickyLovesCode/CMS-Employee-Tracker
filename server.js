const express = require("express");
const db = require("./db/connection");

const PORT = process.env.PORT || 3027;

const app = express();


//EXPRESS MIDDLEWARE
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


db.connect(err => {
    if (err) throw err; {
        console.log("CONNECTED TO DB");
    }

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});