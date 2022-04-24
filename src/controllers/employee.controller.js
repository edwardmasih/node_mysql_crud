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

        id = req.params.id;

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
                console.log("SQL Error while fetching employee id " + id);
                res.send(err);
            } else {
                console.log(`Employeed Details of id ${id} fetched`);
                if (row == "") {
                    res.send("Error while fetching employee id " + id);
                } else {
                    res.send(row);
                }
            }
        });
    },

    // create new Employee
    addNewEmployee: (req, res) => {
        console.log("adding new Employee", req.body);
        let success = true;
        let employeeReqData = req.body;
        for (const [key, value] of Object.entries(employeeReqData)) {
            // console.log(`${key}: ${value}`);
            if (key == "created_at") {
                employeeReqData.created_at = new Date();
                continue;
            }
            if (key == "updated_at") {
                employeeReqData.updated_at = new Date();
                continue;
            }
            if (!value.trim()) {
                console.log(key, "empty, not getting all correct data");
                success = false;
                break;
            }
        }
        console.log(employeeReqData, success);
        if (success == false) {
            res.status(400).send({
                success: success,
                message: "Some fields missing, please send all data",
            });
        } else {
            dbConn.query(
                "INSERT INTO employees SET ? ",
                employeeReqData,
                (err, row) => {
                    if (err) {
                        console.log("Error while inserting data");
                        res.send(err);
                    } else {
                        console.log("Employee created successfully");
                        res.send({
                            success: success,
                            message: "Employee created successfully",
                            newEmployeeID: row.insertId,
                        });
                    }
                }
            );
        }
    },
};
