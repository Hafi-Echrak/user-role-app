package org.sid.dao;


import org.sid.entities.AccessRight;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RightRepository extends JpaRepository<AccessRight,Long> {
	
	public AccessRight findByDescription(String description);

}

