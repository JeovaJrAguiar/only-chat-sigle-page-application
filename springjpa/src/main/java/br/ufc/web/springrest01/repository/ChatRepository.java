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
    

    @Query(value = "select * from chat where (sender_user_id = :user and recipient_user_id = :user_rem) or (sender_user_id = :user_rem and recipient_user_id = :user)", nativeQuery = true)
    Optional<Chat> findChatByUserIdAndUser_rem(int user, int user_rem);

    @Query(value = "update chat set id = :id , chat= :chat, recipient_user_id = :recipient_user_id,sender_user_id = :sender_user_id WHERE id = id", nativeQuery = true)
    void updateChatById(int id, String chat, int recipient_user_id, int sender_user_id);

    /*
    @Query(value = "select * from chat where username = :username", nativeQuery = true)
    Optional<UserAccount> findUserByUsername(String username);

    @Query(value = "select * from user_account where mail = :mail", nativeQuery = true)
    Optional<UserAccount> findUsersByMail(String mail);
    */
}
