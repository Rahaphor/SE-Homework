package com.example.CoreProject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

@Component

public class Person {
	 
	 private String personName;
	 private int personAge;
	 private String personTech;
	 
	 @Autowired
	 @Qualifier("laptop")
	 private Laptop laptop;
	 
	 
	 @Autowired
	 private Car car;
	 
	 
	 public String getpersonName() {
		 return personName;
	 }
	 
	 public void setpersonName(String personName) {
		 this.personName =personName;
	 }
	 
	 public int getpersonAge() {
		 return personAge;
	 }
	 
	 public void setpersonAge(int personAge) {
		 this.personAge =personAge;
	 }
	 
	 public String getpersonTech() {
		 return personTech;
	 }
	 
	 public void setpersonTech(String personTech) {
		 this.personTech =personTech;
	 }
	 
	 public Laptop getLaptop() {
		 return laptop;
	 }
	 
	 public void setLaptop(Laptop laptop) {
		 
		 this.laptop = laptop;
		 
	 }
	 
	 public Car getCar() {
		 return car;
	 }
	 
	 public void setCar(Car car) {
		 this.car = car;
	 }
	 
	 public void show() {
//		 System.out.println("person object");
//		 laptop.brandName();
		 System.out.println("name: "+this.getpersonName());
		 System.out.println("maker: "+car.getMaker());
		 System.out.println("brand"+laptop.getbrand());
	 }
	 
	 public void display() {
		 System.out.println("what is the size of the laptop");
		 laptop.size();
	 }
	 
	 public void check() {
		 System.out.println("i create this myself");
		 car.cMaker();
		 
//		 System.out.println("still learning");
//		 car.carModel();
	 }
//	 
	 public void check1() {
		 System.out.println("still learning");
		 car.cModel();
	 }
 
}
