require('dotenv').config()
const express = require("express");

// creating app
const app = express()

// setting server port
const port = process.env.port || process.env.PORT;

// middleware


// root route
app.get('/',(req,res)=>{
    res.send(`Server is running on port ${port}`)
});


// import employee routes
const employeeRoutes = require('./src/routes/employee.route')

// route for all emplpoyee routes
app.use('/api/employee', employeeRoutes)


// reading PORT from environment variables
app.listen(process.env.PORT,()=>{
    console.log(`Express Server is running on port ${port}`)
});