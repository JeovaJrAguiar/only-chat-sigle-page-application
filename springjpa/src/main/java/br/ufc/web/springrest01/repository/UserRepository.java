package br.ufc.web.springrest01.repository;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


import java.util.List;
import br.ufc.web.springrest01.model.UserAccount;

@Repository
public interface UserRepository extends CrudRepository<UserAccount, Integer>{

    @Query(value = "select * from user_account where username = :username", nativeQuery = true)
    Optional<UserAccount> findUserByUsername(String username);

    @Query(value = "select * from user_account where mail = :mail", nativeQuery = true)
    Optional<UserAccount> findUsersByMail(String mail);

    //@Query("select * from UserAccount")
    //ArrayList<UserAccount> findUserByMail();

    //List<UserAccount> findAll();
}
