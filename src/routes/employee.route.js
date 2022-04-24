const express = require('express')
const router = express.Router()

const employeeController = require('../controllers/employee.controller')

// route for getting all employee
router.get('/',employeeController.getEmployeeList)

// route for getting employee detail by id
router.get('/:id',employeeController.getEmployeeByID)

module.exports = router