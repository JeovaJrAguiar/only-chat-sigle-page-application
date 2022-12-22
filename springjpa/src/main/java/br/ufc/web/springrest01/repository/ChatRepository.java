package br.ufc.web.springrest01.repository;

import java.util.Optional;

import org.springframework.data.annotation.QueryAnnotation;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import br.ufc.web.springrest01.model.Chat;

@Repository
public interface ChatRepository extends CrudRepository<Chat, Integer>{

    
    @Query(value = "select * from chat where id = :id", nativeQuery = true)
    Optional<Chat> findChatById(int id);


    /*
    @Query(value = "select * from chat where username = :username", nativeQuery = true)
    Optional<UserAccount> findUserByUsername(String username);

    @Query(value = "select * from user_account where mail = :mail", nativeQuery = true)
    Optional<UserAccount> findUsersByMail(String mail);
    */
}
