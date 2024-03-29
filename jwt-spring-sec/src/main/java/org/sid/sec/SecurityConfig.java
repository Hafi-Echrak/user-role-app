package org.sid.sec;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;


@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
	
	@Autowired
	
	private UserDetailsService userDetailsService;
@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;
	
	
	
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		//auth.inMemoryAuthentication().withUser("echrak").password("{noop}echrak").roles("ADMIN");
	
	auth.userDetailsService(userDetailsService)
	.passwordEncoder(bCryptPasswordEncoder);
	
	}
	
@Override
protected void configure(HttpSecurity http) throws Exception {

	http.csrf().disable();
	//Désactiver les sessions
	http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
	//http.formLogin();
	http.authorizeRequests().anyRequest().authenticated();
	http.authorizeRequests().antMatchers( HttpMethod.OPTIONS,"/**").permitAll();
	http.authorizeRequests().antMatchers("/login/**").permitAll();
	 http.headers().frameOptions().disable();
	 http.addFilter(new JWTAuthenticationFilter(authenticationManager()));
	 http.addFilterBefore(new JWTAuthorizationFilter(), UsernamePasswordAuthenticationFilter.class);
}


}
