package com.lti.dao;

import java.util.List;

import com.lti.model.Account;
import com.lti.model.Admin;
import com.lti.model.Application;
import com.lti.model.Customer_Details;
import com.lti.model.Registration;

public interface CustomerDao {
	
	public void addRegistration(Registration reg);
	
	public Registration updateRegistration(Registration reg);
	
	public Registration getRegistrationDetailsbyEmail(String email);
	
	public Admin getAdminDetailsbyEmail(String email);
	
	public List<Registration> getAllRegistrations();
	
	public List<Admin> getAllAdmins() ;
	
	public Customer_Details getCustomerDetailsbyEmail(String email);
	
	public List<Application> getAllApplicationsbyEmail(String email);
	
	public List<Customer_Details> getAllCustomerDetails();
	
	//public List<Application> getAllApplications();
	
	public boolean isFirstTimeUser(String emailId);

	public void addApplication(Application appl);

	public Application getApplicationById(int applId);

	public Account getAccountByEmail(String email);

	public void updateApplication(Application appl);

	public Customer_Details updateCustomerDetails(Customer_Details cd);
}
