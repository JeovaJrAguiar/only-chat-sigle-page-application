import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
export class ChatService{

    private API_CHAT: string = 'http://localhost:8080/api/chat';
    
    constructor(private http: HttpClient){}


}