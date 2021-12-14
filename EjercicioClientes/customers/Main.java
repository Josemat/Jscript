package customers;

import customers.domain.customer;

public class Main {

	public static void main(String[] args) {
		
		
		
		customer newCustomer = new customer();
		newCustomer.setFirstName("Marcelo");
		newCustomer.setLastName("Delgado");
		newCustomer.setNationalId("123123123");
		
		System.out.println(newCustomer);
	}

}
