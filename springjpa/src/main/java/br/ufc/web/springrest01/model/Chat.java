package br.ufc.web.springrest01.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
public class Chat {
    @Id
    @GeneratedValue
    private int id;
    private int senderUserId;
    private int recipientUserId;
    private String chat;

    public Chat() {
    }

    public Chat (int senderUserId, int recipientUserId, String chat){
        this.senderUserId = senderUserId;
        this.recipientUserId = recipientUserId;
        this.chat = chat;
    }

    public String getChat() {
        return chat;
    }

    public void setChat(String chat) {
        this.chat = chat;
    }

    public int getId() {
        return id;
    }

    public int getSenderUserId() {
        return senderUserId;
    }

    public void setSenderUserId(int senderUserId) {
        this.senderUserId = senderUserId;
    }

    public void setRecipientUserId(int recipientUserId) {
        this.recipientUserId = recipientUserId;
    }

    public int getRecipientUserId() {
        return recipientUserId;
    }
    
}
