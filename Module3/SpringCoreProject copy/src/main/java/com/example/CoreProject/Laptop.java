package com.example.CoreProject;

import org.springframework.stereotype.Component;

@Component
public class Laptop {
	
	private int Lid;
	private String brand;
	
	public int getLid() {
		return Lid;
	}
	
	public void setLid(int Lid) {
		this.Lid = Lid;
	}
	
	public String getbrand() {
		return brand;
	}
	
	public void setbrand(String brandName) {
		this.brand = brandName;
	}
	
//	@Override
	
//	public String toString() {
//		
//		return "Laptop [Lid=" + Lid + ", brand=" + brand + ", getClass()=" + getClass() + ", hashcode()=" + hashcode() + ", toString()=" + super.toString() + "]";
//	}
	
	public void brandName() {
		System.out.println("Macbook Air");
	}
	
	public void size() {
		System.out.println("size of my Macbook is 13inch");
	}

}
