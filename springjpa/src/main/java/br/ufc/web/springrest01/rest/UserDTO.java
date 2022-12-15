package br.ufc.web.springrest01.rest;

public class UserDTO {

    private int id;
    private String username;
    private String fullname;
    private String password;
    private String photo;
    private String gender;

    public UserDTO(String username, String password, String fullname, String mail, String photo, String gender) {
        this.username = username;
        this.fullname = fullname;
        this.fullname = password;
        this.fullname = photo;
        this.gender = gender;
    }

    public String getGender() {
        return gender;
    }
    public void setGender(String gender) {
        this.gender = gender;
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
    public String getFullname() {
        return fullname;
    }
    public void setFullname(String fullname) {
        this.fullname = fullname;
    }
    
    public String getPassword(){
        return password;
    }
    public void setPassword(String password){
        this.password = password;
    }

    public String getPhoto(){
        return photo;
    }
    public void setPhoto(String photo){
        this.photo = photo;
    }
    
}
