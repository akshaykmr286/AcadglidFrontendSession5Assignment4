        
/*
Constructor function Employee
*/
    function Employee(name, dept,salary) {
           this.username = name || '';
           this.skills = dept || 'none';
           this.salary = salary;
        }
/*new method printdetails() as by prototype method*/
        Employee.prototype.printdetails = function() {
            return " Emp Name : "+this.username + " , Skills : " + this.skills + " ,Basic Salary : " + this.salary;
        };
/*new method changesalary() as by prototype method*/
        Employee.prototype.changesalary = function(newsal){
        this.salary = newsal;
        }
     
        
        var emp1 = new Employee("Akshay","javascript",12000);//creating new object from constructor
        document.getElementById("bef").innerHTML= emp1.printdetails();//send the value to div
/*
        document.getElementById("bef").innerHTML= emp1.printdetails();//send the value to div
        emp1.changesalary(20000);//calling the changesalary function
        document.getElementById("aft").innerHTML= emp1.printdetails();//send the value to div
*/

//This function will be called on click of Change salary button
function change_sal(){
    var newsal = document.getElementById("newsal").value;
    emp1.changesalary(newsal);
     document.getElementById("aft").innerHTML= emp1.printdetails();//send the value to div
}