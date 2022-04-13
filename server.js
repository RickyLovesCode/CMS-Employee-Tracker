const express = require("express");

const PORT = process.env.PORT || 3027;

const app = express();


//EXPRESS MIDDLEWARE
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});