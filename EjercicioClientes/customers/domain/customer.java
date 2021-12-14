package customers.domain;

public class customer {
	
	private String firstName;
	private String lastName;
	private String nationalId;
	
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getNationalId() {
		return nationalId;
	}
	public void setNationalId(String nationalId) {
		this.nationalId = nationalId;
	}
	
	@Override
	public String toString() {
		return "El nombre es "+ firstName +" "+ lastName + " y el ID: " + nationalId;
	}
	

}
