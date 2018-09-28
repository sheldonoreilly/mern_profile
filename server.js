const express = require('express');
const mongoose = require('mongoose');

const app = express();

//returns the module.export object - so pick the prop off of it
const dbKey = require('./config/keys').mongoURI;

mongoose.connect(dbKey).
    then(() => console.log("DB Connection successful")).
    catch((err) => console.log(err));

app.get('/', (req, res) =>
{
    res.send("Hello world");
});

app.listen (3000, () => console.log("server listening on port 3000"));