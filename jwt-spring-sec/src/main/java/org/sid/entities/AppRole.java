package org.sid.entities;

import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
public class AppRole {
	
	
	
	private Long id;
	
    private String name;
   private Set<AppUser> users;
private Set<AccessRight> rights;
    
   
   public AppRole() {
	
}

public AppRole(Long id, String name, Set<AppUser> users) {
	super();
	this.id = id;
	this.name = name;
	this.users = users;
}

@Id @GeneratedValue

    public Long getId() {
	return id;
}

public void setId(Long id) {
	this.id = id;
}

	public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @ManyToMany(mappedBy = "roles")
    public Set<AppUser> getUsers() {
        return users;
    }

    public void setUsers(Set<AppUser> users) {
        this.users = users;
    }
    
    @ManyToMany(fetch=FetchType.EAGER)
	@JoinTable(name = "role_access", joinColumns = @JoinColumn(name = "role_id"), inverseJoinColumns = @JoinColumn(name = "right_id"))
	@JsonIgnore

	public Set<AccessRight> getRights() {
		return rights;
	}

	public void setRights(Set<AccessRight> rights) {
		this.rights = rights;
	}
    
    
}
