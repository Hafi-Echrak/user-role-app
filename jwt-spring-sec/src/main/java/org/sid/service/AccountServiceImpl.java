package org.sid.service;

import org.sid.dao.RightRepository;
import org.sid.dao.RoleRepository;
import org.sid.dao.UserRepository;
import org.sid.entities.AccessRight;
import org.sid.entities.AppRole;
import org.sid.entities.AppUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class AccountServiceImpl implements AccountService{
	
	@Autowired
	private BCryptPasswordEncoder  bCryptPasswordEncoder;
	@Autowired
	private UserRepository userRepository ;
	@Autowired
	private RoleRepository roleRepository ;
	@Autowired
	private RightRepository rightRepository ;
	

	@Override
	public AppUser saveUser(AppUser appUser) {
	String hashPW=bCryptPasswordEncoder.encode(appUser.getPassword());
		appUser.setPassword(hashPW);
		return userRepository.save(appUser);
		
	}

	@Override
	public AppRole saveRole(AppRole approle) {
	
		return roleRepository.save(approle);
	}

	@Override
	public void addRoleToUser(String username, String rolename) {
	AppRole role=roleRepository.findByName(rolename);
	AppUser user=userRepository.findByUsername(username);
	user.getRoles().add(role);
		
	}

	@Override
	public AppUser findUserByUsername(String username) {
	
		return userRepository.findByUsername(username);
	}

	@Override
	public void deleteRole(Long id) {
		roleRepository.deleteById(id);
		
	}

	@Override
	public void addRightToRole(String rolename, String right) {
		AppRole role=roleRepository.findByName(rolename);
		AccessRight access=rightRepository.findByDescription(right);
		role.getRights().add(access);
		
	}

}
