package org.sid.service;

import org.sid.entities.AppRole;
import org.sid.entities.AppUser;
import org.springframework.stereotype.Service;


public interface AccountService {
	public AppUser saveUser(AppUser appUser) ;
	public void deleteRole(Long id) ;
	public AppRole saveRole(AppRole approle);
	public void addRoleToUser(String username,String rolename);
	public void addRightToRole(String rolename,String right);
	public AppUser findUserByUsername(String username);

}
