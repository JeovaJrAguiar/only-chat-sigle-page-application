package br.ufc.web.springrest01.rest;

public class ChatDTO {
    private int id;
    private int senderUserId;
    private int recipientUserId;
    private String chat;

    public ChatDTO() {
    }

    public ChatDTO (int id, int senderUserId, int recipientUserId, String chat){
        this.id = id;
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

    public void setId(int id) {
        this.id = id;
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
