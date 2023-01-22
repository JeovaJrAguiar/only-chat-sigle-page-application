package br.ufc.web.springrest01.rest;

import java.util.ArrayList;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.ufc.web.springrest01.model.UserAccount;
import br.ufc.web.springrest01.repository.UserRepository;

@RestController
@RequestMapping("/api/user")
public class UserRestController {

    @Autowired
    UserRepository userRepository;

    @GetMapping("/login/{mail}")
    Optional<UserAccount> login(@PathVariable("mail") String mail){
        return userRepository.findUsersByMail(mail);
    }

    @GetMapping("/me")
    UserAccount getUserByIdAndPassword(@PathVariable String me){
        UserAccount userAux = new UserAccount("nulo", "nulo", "nulo", "nulo@nulo", "nulo", "nulo");
        
        String array[] = new String[2];
        array = me.split(":");

        Optional<UserAccount> result =  userRepository.findUserByUsername(array[0]);
        if(result.isPresent()){
            userAux = result.get();
            if(userAux.getPassword() == array[1]){
                return userAux;
            }
        }
        return userAux;
    }

    @GetMapping("/{mail}")
    Optional<UserAccount> getUser(@PathVariable String mail){
        return userRepository.findUsersByMail(mail);
    }

    @GetMapping("/byMail/{mail}")
    Iterable<UserAccount> getUserByMail(@PathVariable String mail){
        return userRepository.findUsersExceptByMail(mail);
    }

    @GetMapping("/byUsername/{username}")
    Iterable<UserAccount> getUserByUsername(@PathVariable String username){
        return userRepository.findUsersByUsername(username);
    }

    @GetMapping
    Iterable<UserAccount> getUsers(){
        return userRepository.findAll();
    }

    @GetMapping("/users/{mail}")
    Iterable<UserAccount> findUsersExceptByMail(@PathVariable String mail){
        return userRepository.findUsersExceptByMail(mail);
    }

    /*
    @GetMapping("/{id}")
    UserAccount getUser(@PathVariable int id){
        Optional<UserAccount> result =  userRepository.findById(id);
        return !result.isPresent() ? null : result.get();
    }*/
   
    @PostMapping
    UserDTO addUser(@RequestBody UserAccount user) {
        user.setPassword(user.getPassword());
        UserAccount savedUser = userRepository.save(user);

        return new UserDTO(savedUser.getUsername(), savedUser.getPassword(), savedUser.getFullname(), savedUser.getMail(),savedUser.getPhoto(), savedUser.getGender() );
    }
}