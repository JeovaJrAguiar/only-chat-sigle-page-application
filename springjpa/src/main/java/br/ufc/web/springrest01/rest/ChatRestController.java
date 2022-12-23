package br.ufc.web.springrest01.rest;

import java.util.Optional;
import java.util.OptionalInt;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.ufc.web.springrest01.model.Chat;
import br.ufc.web.springrest01.repository.ChatRepository;

@RestController
@RequestMapping("/api/chat")
public class ChatRestController {
    @Autowired
    ChatRepository chatRepository;


    @GetMapping("/{id}")
    Optional<Chat> getChatById(@PathVariable("id") int id){
        return chatRepository.findChatById(id);
    }

    @GetMapping("/{user}/{user_rem}")
    Optional<Chat> getChatByUserAndUserRem(@PathVariable("user") int user, @PathVariable("user_rem") int user_rem){
        return chatRepository.findChatByUserIdAndUser_rem(user, user_rem);
    }

    @PostMapping
    ChatDTO addChat(@RequestBody Chat chat){
        Optional<Chat> chatInDB = chatRepository.findChatByUserIdAndUser_rem(chat.getRecipientUserId(), chat.getSenderUserId());
        Chat savedChat = new Chat();
        if(chatInDB != null){
            chatRepository.updateChatById(chat.getId(), chat.getChat(), chat.getRecipientUserId(), chat.getSenderUserId());
        }else{
            savedChat = chatRepository.save(chat);
        }

        return new ChatDTO(savedChat.getId(), savedChat.getSenderUserId(), savedChat.getRecipientUserId(), savedChat.getChat());
    }
}
