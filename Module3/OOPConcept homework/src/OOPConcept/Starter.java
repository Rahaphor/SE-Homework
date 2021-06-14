package OOPConcept;

import java.util.Scanner;
public class Starter {
	
	//Student (int id, String name, int age, char gender, String subject1, String subject2, String subject3, String major, float totalscore

	public static void main(String[] args) {
		Scanner scan = new Scanner (System.in);
		System.out.println("enter id number");
		int id = scan.nextInt();
		scan.nextLine();
		System.out.println("enter student name");
		String name = scan.nextLine();
		System.out.println("enter age");
		int age = scan.nextInt();
		System.out.println("enter gender");
		char gender = scan.next().charAt(0);
		System.out.println("enter subject1 score");
		double score1 = scan.nextDouble();
		System.out.println("enter subject2 score");
		double score2 = scan.nextDouble();
		System.out.println("enter subject3 score");
		double score3 = scan.nextDouble();
		scan.nextLine();
		System.out.println("enter student major");
		String major = scan.nextLine();
		
		
		
		Student stud1 = new Student(id,name,age,gender,score1,score2,score3,major);
		
		stud1.display();
		double average = stud1.calculate(3);
		System.out.println("average score"+String.format("%.3f", average));
		stud1.checker();
		
		System.out.println();
		
//		Student stud2 = new Student(202, "bre aphor", 27, 'F',100.00, 80.00, 90.00, "computerScience", 80.00f);
//		stud2.display();
//		double average1 = stud2.calculate(3);
//		System.out.println("average score"+String.format("%.3f", average1));
		
		
		Scanner scan1 = new Scanner (System.in);
		System.out.println("enter employe id number");
		int id1 = scan1.nextInt();
		scan1.nextLine();
		System.out.println("enter name");
		String name1 = scan1.nextLine();
		System.out.println("enter age");
		int age1 = scan1.nextInt();
		System.out.println("enter gender");
		char gender1 = scan1.next().charAt(0);
		System.out.println("enter salary");
		double salary = scan1.nextDouble();
		
		Employee emp1 = new Employee(id1,name1,age1,gender1,salary);
		
		emp1.display();
		System.out.println("NetSalary:"+emp1.calculate(20000));
		System.out.println();
		emp1.checker();
		
//		Employee emp2 = new Employee(102,"bre bre",27,'F',120000.00);
//		
//		emp2.display();
//		System.out.println("NetSalary:"+emp2.calculate(10000));
//	
	
	
	
	
	
//	static void cal(int num, int num1, int num2) {
//		
//		//principle*rate*time/100
//		
//		System.out.println("this is the interest: "+ (num*num1*num2)/100);
//	}
//	
//	static void cal(long num, long num1) {
//		
//		System.out.println("This is the averag " + ((num+num1)/2));
//	}
//
//	public static void main(String[] args) {
//		// TODO Auto-generated method stub
//		
//		cal(100,40,50);
//		cal (200000, 200000);
	
//	Person person1 = new Person ("Rah Aphor", 30, 'M', 200000.00);
//		
//		Person person2 = new Person("bre bre", 27, 'F', 100000.00);
//		
//		person1.display();
//		System.out.println();
//		
//		person2.display();
//		System.out.println();
//		
//		Person.totalPerson();
				
//		String name;
//		int num;
//		char singleLetter;
//		
//		Scanner scan = new Scanner (System.in);
//		
//		System.out.println("we still learning OOPConcept");
//		
//		System.out.println("enter name: ");
//		name = scan.nextLine();
//		
//		System.out.println("enter any number: ");
//		num = scan.nextInt();
//		
//		System.out.println("enter gender: ");
//		singleLetter = scan.next().charAt(0);
//		
//		
//		Person1 p1 = new Person1();
//		
//		p1.setpersonName(name);
//		p1.setpersonAge(num);
//		p1.setpersonGender(singleLetter);
//		
//		System.out.println(p1.getpersonName());
//		System.out.println(p1.getpersonAge());
//		System.out.println(p1.getpersonGender());
//		
//		System.out.println();
//		
//       Person1 p2 = new Person1();
//		
//		p2.setpersonName("Bre");
//		p2.setpersonAge(27);
//		p2.setpersonGender('M');
//		
//		System.out.println(p2.getpersonName());
//		System.out.println(p2.getpersonAge());
//		System.out.println(p2.getpersonGender());
//		
//		Person1.totalPerson();
//		
//		
//	scan.close();
//
//	}

}
}

