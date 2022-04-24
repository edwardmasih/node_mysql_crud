const dbConn = require("../../config/db.config");

const EmployeeModel = (employee) => {
    this.first_name = employee.first_name;
    this.last_name = employee.last_name;
    this.email = employee.email;
    this.phone = employee.phone;
    this.organization = employee.organization;
    this.designation = employee.designation;
    this.salary = employee.salary;
    this.status = employee.status ? employee.status : 1; // active 1, inactive 0
    this.created_at = new Date();
    this.updated_at = new Date();
};

// get all employees
EmployeeModel.getAllEmployees = (result) => {
    dbConn.query("SELECT * from employees", (err, row) => {
        if (err) {
            console.log("Error while fetching all employees", err);
            result(null, err);
        } else {
            console.log("fetched all employees");
            result(null, row);
        }
    });
};

// get employee by id
EmployeeModel.getEmployeeByID = (id, result) => {
    dbConn.query("SELECT * from employees WHERE id=?", [id], (err, row) => {
        if (err) {
            console.log("Error while fetching employee id " + id);
            result(null, err);
        } else {
            console.log(`Employeed Details of id ${id} fetched`);
            result(null, row);
        }
    });
};

// create new employee
EmployeeModel.createEmployee = (employeeReqData, result) => {
    dbConn.query(
        "INSERT INTO employees SET ? ",
        employeeReqData,
        (err, res) => {
            if (err) {
                console.log("Error while inserting data");
                result(null, err);
            } else {
                console.log("Employee created successfully");
                result(null, res);
            }
        }
    );
};

// update employee
EmployeeModel.updateEmployee = (id, employeeReqData, result)=>{
    dbConn.query("UPDATE employees SET first_name=?,last_name=?,email=?,phone=?,organization=?,designation=?,salary=? WHERE id = ?", [employeeReqData.first_name,employeeReqData.last_name,employeeReqData.email,employeeReqData.phone,employeeReqData.organization,employeeReqData.designation,employeeReqData.salary, id], (err, res)=>{
        if(err){
            console.log('Error while updating the employee');
            result(null, err);
        }else{
            console.log("Employee updated successfully");
            result(null, res);
        }
    });
}

// delete employee
EmployeeModel.deleteEmployee = (id, result)=>{
    // dbConn.query('DELETE FROM employees WHERE id=?', [id], (err, res)=>{
    //     if(err){
    //         console.log('Error while deleting the employee');
    //         result(null, err);
    //     }else{
    //         result(null, res);
    //     }
    // })
    dbConn.query("UPDATE employees SET is_deleted=? WHERE id = ?", [1, id], (err, res)=>{
        if(err){
            console.log('Error while deleting the employee');
            result(null, err);
        }else{
            console.log("Employee deleted successfully");
            result(null, res);
        }
    });
}

module.exports = EmployeeModel;
