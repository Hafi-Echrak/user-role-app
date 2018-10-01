package org.sid.entities;

import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;


@Entity
public class AccessRight {
	
	
	
	private Long id;
	
    private String description;
   private Set<AppRole> roles;

    
   


public AccessRight() {
	super();
}

public AccessRight(Long id, String description) {
	super();
	this.id = id;
	this.description = description;
}

@Id @GeneratedValue

    public Long getId() {
	return id;
}

public void setId(Long id) {
	this.id = id;
}

public String getDescription() {
	return description;
}

public void setDescription(String description) {
	this.description = description;
}


@ManyToMany(mappedBy = "rights")
public Set<AppRole> getRoles() {
	return roles;
}

public void setRoles(Set<AppRole> roles) {
	this.roles = roles;
}


  
}