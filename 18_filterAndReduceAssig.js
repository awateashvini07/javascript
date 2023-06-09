class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha =  new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const array_employees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

console.log(`1.. All the empoyees from " wipro" company` );
const arraywiproEmployees = array_employees.filter( (employee) => {
    return employee.emp_company == "Wipro";
} );
const arraywiproEmployeesNames = arraywiproEmployees.map( (employee) => {
    return employee.emp_name;
});
console.log(arraywiproEmployeesNames);
console.log(`__________________________________________________________________________`);
console.log(`2.. All the empoyees from " IT" , "HR" Dept` );
const arrayDepEmployees = array_employees.filter( (employee) => {
    return employee.emp_dept== "HR" ||employee.emp_dept== "IT";
} );
const arrayDepEmployeesNames = arrayDepEmployees.map( (employee) => {
    return employee.emp_name;
});
console.log(arrayDepEmployeesNames);
console.log(`__________________________________________________________________________`);
console.log(`3.. All the employees whose emp id's are greater than 50` );

const arrayID = array_employees.filter( (employee)=> {
    return employee.emp_id>=50;
});
const arrayIds = arrayID.map( (employee)=> {
    return employee.emp_name;
});
console.log(arrayIds);
console.log(`__________________________________________________________________________`);
console.log( `4 ..Average salary of the empoyee`);
const empSalaries = array_employees.map( (employee) => {
    return employee.emp_salary;
});
const sulSalary =empSalaries.reduce( (runningTotal, value) => {
    return runningTotal+value;
});
console.log(sulSalary/empSalaries.length);


console.log(`__________________________________________________________________________`);

console.log( `4 ..Average salary of the  IT Dept empoyee`);
  const arrayITDept = array_employees.filter((employee)=>{
     return employee.emp_dept=="IT"
});

  const arrayItname = arrayITDept.map((employee)=>{
    return employee.emp_name;
}); 
console.log(arrayItname);

//console.log(arrayITDept );
//for (const emp of arrayITDept ) {
   // console.log(emp);
    
//}
let sum=0;
arrayITDept.forEach((employee)=>{
    sum= sum+ employee.emp_salary;

});
const sumAvarage= sum/arrayITDept.length
console.log(sumAvarage );

console.log("___________________________________________________________________");

const arrayEmployees = array_employees.filter( (employee) => {
    return employee.emp_name.startwith("A")||employee.emp_name.startwith("R")|| employee.emp_name.startwith("V");
} );
const arrayEmployeesNames = arrayEmployees.map( (employee) => {
    return employee.emp_name;
});