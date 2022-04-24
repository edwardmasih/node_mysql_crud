const EmployeeModel = require("../models/employee.model");
const dbConn = require("../../config/db.config");

module.exports = {

    // get all employee list
    getEmployeeList: (req, res) => {

        // using model function

        // EmployeeModel.getAllEmployees((err, employees)=>{
        //     console.log('getting all employee list')
        //     if(err){
        //         res.send(err)
        //     }else {
        //         res.send(employees)
        //     }
        // })

        // using query directly in controller function
        dbConn.query("SELECT * from employees", (err, row) => {
            if (err) {
                console.log("Error while fetching all employees", err);
                res.send(err);
            } else {
                console.log("fetched all employees");
                res.send(row);
            }
        });
    },

    // get employee by id
    getEmployeeByID: (req, res) => {
        
        id = req.params.id

        // using model function

        // EmployeeModel.getEmployeeByID(id, (err, employees)=>{
        //     console.log('getting details of employee with id ',id)
        //     if(err){
        //         res.send(err)
        //     }else {
        //         res.send(employees)
        //     }
        // })

        // using query directly in controller function

        dbConn.query("SELECT * from employees WHERE id=?", [id], (err, row) => {
            if (err) {
                console.log("Error while fetching employee id "+ id);
                res.send(err);
            } else {
                console.log(`Employeed Details of id ${id} fetched`);
                res.send(row);
            }
        });
    },
};
