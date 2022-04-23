const express = require("express");

// creating app
const app = express()

// setting server port
const port = process.env.port || 5000;

// root route
app.get('/',(req,res)=>{
    res.send(`Server is running on port ${port}`)
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
});