const express = require('express');
const dotenv = require('dotenv');
const { OAuth2Client } = require('google-auth-library');


const app = express();
app.use(express.json());

const users= []

app.post("/api/Njoy", async (req, res) => {
    res.status(201);
}

)



app.listen(process.env.port || 5000, () => {
    console.log(`Server is ready at http://localhost:${process.env.port || 5000}`)
})