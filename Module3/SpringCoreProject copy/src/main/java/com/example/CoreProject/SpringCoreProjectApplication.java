package com.example.CoreProject;

import java.util.Scanner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;


@SpringBootApplication
public class SpringCoreProjectApplication {

	public static void main(String[] args) {
		ConfigurableApplicationContext context = SpringApplication.run(SpringCoreProjectApplication.class, args);
		System.out.println("application running");
		
		String name, brandName, Maker;
		int age;
		
		Person p1 = context.getBean(Person.class);
		
		Scanner scan = new Scanner (System.in);
		
		System.out.println("enter name");
		name = scan.nextLine();
		p1.setpersonName(name);
		
		System.out.println("enter age");
		age = scan.nextInt();
		p1.setpersonAge(age);
		
		
		
		Car c1 = context.getBean(Car.class);
		scan.nextLine();
		System.out.println("enter car Maker");
		Maker =scan.nextLine();
		c1.setMaker(Maker);
		
		Laptop L1 = context.getBean(Laptop.class);
		
		System.out.println("enter brand");
		brandName = scan.nextLine();
		L1.setbrand(brandName);
		
		
		scan.close();
	    
	
		
		
		
		
    	p1.show();
	     
//        p1.display();
//	    
//	    p1.check1();
//    
//        p1.check();
	}
	
	

}
