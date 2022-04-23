const express = require('express')
const router = express.Router()

const employeeController = require('../controllers/employee.controller')

// route for getting all employee
router.get('/',employeeController.getEmployeeList)

module.exports = router