
const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/api");
const bodyParser = require("body-parser");
const dotenv = require('dotenv')
dotenv.config();
const app = express();

const connectionParams = {
    newUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}

mongoose.connect(process.env.DB_CONNECT, connectionParams)
    .then(() => {
        console.log("connected to db")
    })
    .catch((err) => {
        console.log("error" + err)
    })
app.use(bodyParser.json())
app.use('/', router)

app.listen(4200, () => {
    console.log("listening on port 4200")
})
