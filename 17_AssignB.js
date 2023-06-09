class Employee {
  constructor(empId, empName, empDept, empSalary, empCompany) {
    this.empId = empId;
    this.empName = empName;
    this.empDept = empDept;
    this.empSalary = empSalary;
    this.empCompany = empCompany;
  }
}
const anil = new Employee(22, "Anil", " IT", 50000, " TCS");
const radha = new Employee(33, "Radha", "HR", 74000, " Wipro");
const rishi = new Employee(22, "Rishi", "Finance", 47000, " TCS");
const sonali = new Employee(22, "Sonali", "Finance", 45000, " Infy");
const monika = new Employee(22, "Monika", " IT", 40000, " Wipro");
const viny = new Employee(22, "Vinayak", " IT", 75000, " TCS");
const mahi = new Employee(22, "Mahesh", " HR", 85000, " Infy");

 const array=[ anil, radha, rishi, sonali,monika, viny,mahi ];
 console.log( `  1.. All the Employees working in " TCS" `);
 for (const employee of array) {
  if (employee.empCompany==" TCS") {
    console.log(` Employees Name :  ${employee.empName}, Company Name : ${employee.empCompany}` );
    
  }
 
 }
 console.log(" ___________________________________________________________________________________________");
 console.log( `  2.. Finance Department Employees `) 
for (const employee of array) {
if (employee.empDept=="Finance") {
  console.log(` Employees Name :  ${employee.empName}, Employees Department  :  ${employee.empDept} ` );
  
}

}
console.log(" ___________________________________________________________________________________________");
console.log( `  3.. Employees whose Name Start with " R" `)
for (const employee of array) {
  if (employee.empName.startsWith("R")) {
    console.log( `Employees Name start With " R" : ${employee.empName},   ID :${employee.empId} , Department : ${employee.empDept},  Salary: ${employee.empSalary}, Company: ${employee.empCompany} `);
    
  }
  
}
console.log(" ___________________________________________________________________________________________");
console.log( `  4.. Employees whose  salary is greater than 75000`)
for (const employee of array) {
  if (employee.empSalary>75000) {
  console.log( ` Employees Name : ${employee.empName }, Company Name : ${ employee.empCompany},Salary ${ employee.empSalary }`);
    
  }
  
}
console.log(" ___________________________________________________________________________________________");

console.log( `  5.. Employees whose  salary is greater than 50000 & Department is "IT"`)
for (const employee of array) {
  if (employee.empSalary>=50000 && employee.empDept==" IT" ) {
  console.log( ` Employees Name : ${employee.empName }, Company Name : ${ employee.empCompany},  Department : ${employee.empDept},  Salary ${ employee.empSalary }`);
    
  }
  
}
console.log(" ___________________________________________________________________________________________");

console.log(`  6.. All the Employees working in" Infy" `  )
  for (const employee of array) {
    if (employee.empCompany==" Infy") {
      console.log(`Empoyees detail : Name:  ${employee.empName} ,ID :${employee.empId} , Department : ${employee.empDept},  Salary: ${employee.empSalary}, Company:${employee.empCompany} `);
      
      
    }
    
  }
  console.log(" ___________________________________________________________________________________________");
