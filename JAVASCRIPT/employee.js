class Employee{
 setEmployee(id,name,designation,salary){
    this.empid=id
    this.empname=name
    this.empdesignation=designation
    this.empsalary=salary
    console.log(`employee created`)
 }
 printEmployee(){
    console.log(`id= ${this.empid},name= ${this.empname},designation= ${this.empdesignation},salary= ${this.empsalary}`)
 }
}
const employee=new Employee
employee.setEmployee(100,"john","developor",10000)
employee.printEmployee()


