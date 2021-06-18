package com.example.CoreProject;

import org.springframework.stereotype.Component;

@Component
public class Car {

	private int cid;
	private String Model;
	private String Maker;
	
	
	public int getcid() {
		return cid;
	}
	
	public void setcid(int cid) {
		this.cid = cid;
	}
	
	public String getModel() {
		return Model;
	}
	
	public void setModel(String Model) {
		this.Model = Model;
	}
	
	public String getMaker() {
		return Maker;
	}
	
	public void setMaker(String Maker) {
		this.Maker = Maker;
	}
	
	public void cModel() {
		System.out.println("porsche Macan Sport");
	}
	
	public void cMaker() {
		System.out.println("Germany car company");
	}
	
	
	
}
