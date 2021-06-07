package Hwpackage;
import java.util.Scanner;
public class SCalculator {
	
	public static void add(int a, int b) {
		System.out.println(a + b);
	}
	
	public static void sub(int a, int b) {
		System.out.println(a - b);
	}
	
	public static void mult(int a, int b) {
		System.out.println(a * b);
	}
	
	static double div(int a , int b) {
        double c = a/b;
        return c;
    }

	public static void main(String[] args) {
		
		
		Scanner scan = new Scanner(System.in);
		
		System.out.println("What are the two numbers from 1-5?");
        int num1 = scan.nextInt();
        int num2 = scan.nextInt();
        
        System.out.println("input + to add. input - to substract. input * to multiply. input / to divide. input q to quit the program");
        
        char chooseOperator = scan.next().charAt(0);
            
        switch (chooseOperator) {
                case '+':
                    System.out.println("The add of " + num1 + " and " + num2 + "  is:");
                    add(num1, num2);
                    break;
                case '-':
                    System.out.println("The sub of " + num1 + " and " + num2 + "  is:");
                    sub(num1, num2);
                    break;
                case '*':
                    System.out.println("The mul of " + num1 + " and " + num2 + "  is:");
                    mult(num1, num2);
                    break;
                case '/':
                    System.out.println("The quotient of " + num1 + " and " + num2 + "  is:");
                    System.out.println(div(num1, num2));
                    break;
                
                default:
                    System.out.println("enter a valid number.");
            
                    
                    
                    scan.close();
                   
      
	   
		
		
		}

	}

}
