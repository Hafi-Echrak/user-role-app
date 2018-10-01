package org.sid;

import java.util.stream.Stream;

import org.sid.dao.RightRepository;
import org.sid.dao.TaskRepository;
import org.sid.entities.AccessRight;
import org.sid.entities.AppRole;
import org.sid.entities.AppUser;
import org.sid.entities.Task;
import org.sid.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootApplication
public class JwtSpringSecApplication implements CommandLineRunner{

	@Autowired
	private RightRepository rightRepository;
	@Autowired
	private AccountService accountService;
	public static void main(String[] args) {
		SpringApplication.run(JwtSpringSecApplication.class, args);
	}
	
	@Bean
	public BCryptPasswordEncoder getBCPE() {
		return new BCryptPasswordEncoder();
	}
	
	
	


	
	public void run(String... args) throws Exception {
		
		//accountService.saveUser(new AppUser(null,"admin","admin",null,null,null,null,null));
		//accountService.saveUser(new AppUser(null,"user","user",null,null,null,null,null));
		//accountService.saveRole(new AppRole(null,"ADMIN",null));
		//accountService.saveRole(new AppRole(null,"USER",null));
		
		//accountService.addRoleToUser("admin", "ADMIN");
		
		//accountService.addRoleToUser("user", "USER");
	/*	Stream.of("T1","T2","T3").forEach(t->{
			taskRepository.save(new Task(null,t));
		}
		
				);
		taskRepository.findAll().forEach(t->{
			System.out.println(t.getTaskName());
		});
		 
		String a="a";
		 String b="a";
		 System.out.println("***********************************");
		 System.out.println(a==b);
		 System.out.println("***********************************");
*/
		//rightRepository.save(new AccessRight(null,"Add Users"));
		
		
	}


}