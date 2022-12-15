package br.ufc.web.springrest01.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
//@Table
public class UserAccount {
    
    @Id
    @GeneratedValue
    private int id;
    private String username;
    private String password;
    private String fullname;
    private String mail;
    private String photo;
    private String gender;

    public UserAccount(){
    }

    public UserAccount(String username, String password, String fullname, String mail, String photo, String gender){
        this.password = password;
        this.username = username;
        this.fullname = fullname;
        this.mail = mail;
        this.photo = photo;
        this.gender = gender;
    }
    
    public String getGender() {
        return gender;
    }
    public void setGender(String gender) {
        this.gender = gender;
    }


    public String getFullname() {
        return fullname;
    }
    public void setFullname(String fullname) {
        this.fullname = fullname;
    }
    
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }

    public String getMail(){
        return mail;
    }

    public void setMail(String mail){
        this.mail = mail;
    }

    public String getPhoto(){
        return photo;
    }
    public void setPhoto(String photo){
        this.photo = photo;
    }
    
    /*
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return new ArrayList<>();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }
    @Override
    public boolean isAccountNonLocked() {
        return true;
    }
    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }
    @Override
    public boolean isEnabled() {
        return true;
    }
    */

}
