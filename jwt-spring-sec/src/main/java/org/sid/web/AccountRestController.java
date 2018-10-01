package org.sid.web;

import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.sid.dao.RightRepository;
import org.sid.dao.RoleRepository;
import org.sid.entities.AccessRight;
import org.sid.entities.AppRole;
import org.sid.entities.AppUser;
import org.sid.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController

public class AccountRestController {
	
	@Autowired
	private AccountService accountService;
	@Autowired
	private RightRepository rightRepository;
	@Autowired
	private RoleRepository roleRepository;
	
	@PostMapping("/register")
	public AppUser register(@RequestBody RegisterForm userForm) {
		
		if (!userForm.getPassword().equals(userForm.getRepassword()))
                   throw new RuntimeException("you must confirm your password !");
		
		AppUser user=accountService.findUserByUsername(userForm.getUsername());
		if (user!=null) throw new RuntimeException("This user already exist !");
		
		AppUser appUser=new AppUser();
		
		appUser.setUsername(userForm.getUsername());
		appUser.setPassword(userForm.getPassword());
		appUser.setDatenaissance(userForm.getDatenaissance());
		appUser.setPoste(userForm.getPoste());
		appUser.setFullname(userForm.getFullname());
		appUser.setCin(userForm.getCin());
		
		return accountService.saveUser(appUser);
		
	
	}
	
	@PostMapping("/addrole")
	
	public AppRole addRole(@RequestBody AppRole role) {
		return accountService.saveRole(role);
	}
	
	@DeleteMapping("/deleterole/{id}")
	public void deleteRole(@PathVariable Long id) {
		accountService.deleteRole(id);
	}

	@GetMapping("/rights/{id}")

	public Set<AccessRight> getRight(@PathVariable Long id)
	{
	 Optional<AppRole>	role=roleRepository.findById(id);
		
if(role.isPresent()) {
	AppRole r=role.get();
	
		return  r.getRights();}
else throw new RuntimeException("role does not exist");

	}
	
	public void addRightRole(String role,String right) {
		accountService.addRightToRole(role, right);
	}
	
	@GetMapping("/rights")
	public List<AccessRight> getAllRights(){
		return rightRepository.findAll();
		
		
	}
}
