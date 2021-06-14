package OOPConcept;

public class Student extends Person implements PersonInterface{
	
	int student_id;
	double subject1;
	double subject2;
	double subject3;
	String major;
	
	
	Student (int id, String name, int age, char gender, double subject1, double subject2, double subject3, String major){
		super(name,age,gender);
		
		this.student_id = id;
		this.subject1 = subject1;
		this.subject2 = subject2;
		this.subject3 = subject3;
		this.major = major;
		
	}
	

	public void display() {
    	System.out.println(ORGINIZATION);
		super.display();
    	
		System.out.println("id :" + this.student_id);
    	System.out.println("subject1: " + this.subject1 );
    	System.out.println("subject2: " + this.subject2 );
    	System.out.println("subject3: " + this.subject3 );
    	System.out.println("major: " + this.major );
    	
    }
	
	public double calculate (int student_totalScore) {
		double average = ((this.subject1+this.subject2+this.subject3)/student_totalScore);
		return average;
	}
	
	public void checker() {
		if (this.personAge > 21) {
		System.out.println("student is over 21");
		}else System.out.println("student is under 21");
		}
}


