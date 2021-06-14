package OOPConcept;

public class Person {
	static int count=0;
	
	String personName;
	int personAge;
	char personGender;
//	double personSalary;
	
	
	public Person (String name, int age, char gender) {
		personName = name;
		personAge = age;
		personGender = gender;
//		personSalary = Salary;
		count++;
	}
	
	public void display() {
		System.out.println("Name : " +this.personName);
		System.out.println("Age : " +this.personAge);
		System.out.println("Gender : " +this.personGender);
//		System.out.println("Salary: "+ this.personSalary);
		
		
		
	}
	
	public static void totalPerson() {
		System.out.println("total person objects are:"+ count);
	}
	
	

}
