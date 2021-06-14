package OOPConcept;

public class Employee extends Person implements PersonInterface {
	
	int employee_id;
	double employee_salary;
	
    Employee (int id, String name, int age, char gender, double salary)
    {
    	
    	super(name,age,gender);
    	
    	this.employee_id = id;
    	this.employee_salary = salary;
    }
    
    public void display() {
    	System.out.println("id :" + this.employee_id);
    	super.display();
    	
    	System.out.println("salary: " + this.employee_salary );
    }
    public double calculate(int bonus) {
    	double netSalary = bonus+ this.employee_salary;
    	return netSalary;
    	
    }
    
    public void checker () {
    	if (this.personGender == 'M'|| this.personGender =='m') {
    		System.out.println("employee is a Male");
    	}else System.out.println("employee is a Female");
    }

}
