package org.sid.web;

import java.util.List;
import java.util.Optional;

import org.sid.dao.RoleRepository;
import org.sid.dao.TaskRepository;
import org.sid.dao.UserRepository;
import org.sid.entities.AppRole;
import org.sid.entities.AppUser;
import org.sid.entities.Task;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController

public class TaskRestController {
	
	@Autowired
	private TaskRepository taskRepository;
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private RoleRepository roleRepository;
	
	@GetMapping("/users")
	public List <AppUser> listUsers()
	{
		return userRepository.findAll();
	}
	
	@PostMapping("/tasks")
	public Task save(@RequestBody Task t) {
		return taskRepository.save(t);
	}
	
	@GetMapping("/roles")
	public List <AppRole> listRoles()
	{
		return roleRepository.findAll();
	}
	
	@GetMapping("/role/{id}")
	public Optional<AppRole> findrolebyid(@PathVariable Long id)
	{
		return roleRepository.findById(id);
	}
	

}
