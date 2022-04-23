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

    // using normal query
    console.log(req.body);
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
};
