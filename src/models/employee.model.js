const dbConn = require('../../config/db.config')

const EmployeeModel = (employee)=>{
    this.first_name     =   employee.first_name;
    this.last_name      =   employee.last_name;
    this.email          =   employee.email;
    this.phone          =   employee.phone;
    this.organization   =   employee.organization;
    this.designation    =   employee.designation;
    this.salary         =   employee.salary;
    this.status         =   employee.status ? employee.status : 1; // active 1, inactive 0
    this.created_at     =   new Date();
    this.updated_at     =   new Date();
}

// get all employees
EmployeeModel.getAllEmployees = (result)=>{
    dbConn.query('SELECT * from employees', (err, res)=>{
        if(err) {
            console.log('Error while fetching all employees',err)
            result(null,err)
        }
        else {
            console.log('fetched all employees')
            result(null,res)
        }
    })
}

module.exports = EmployeeModel;