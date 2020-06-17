import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';

import { ApiAiClient } from 'api-ai-javascript/es6/ApiAiClient';
import {Observable} from 'rxjs';
import {Subject} from 'rxjs';
import { RichMessage } from '../model/rich-messages.model';

@Injectable({
  providedIn: 'root'
})
export class Message{
  constructor(public content: String,public sentBy: String){
    
  }
}
export class DialogflowService {

  readonly token=environment.dialogflow.FTBal;
  
  client:any;
  constructor() { }
  chatSubject=new Subject<RichMessage[]>();
  conversation:RichMessage[]=[];
  
  connectToApi(){
  
    this.client=new ApiAiClient({accessToken:this.token});
   
  }
  
   sendToBot(messageObject){
      this.publishMessages(new RichMessage(messageObject));
      console.log("sumana check");
      console.log(messageObject.text);
      this.postToDialogFlow(messageObject.text )
  
    }

    sendToBot1(messageObject){
      console.log("sumana checkingggggg"+messageObject);
      this.publishMessages(new RichMessage(messageObject));
      console.log("sumana check");
      console.log(messageObject.text);
      this.postToDialogFlow(messageObject.text );
  
    }
  
    sendToUser(messageObject){
  this.publishMessages(new RichMessage(messageObject));
    }
  
  
  
  //sends and recievs msg via dialogflow
  postToDialogFlow(messageToSend){
    console.log("unnati check");
    console.log(messageToSend);
    
   this.client.textRequest(messageToSend)
  .then(res=>{
    debugger;
    let msg11=res.result.fulfillment.speech;

    
   try{
    if(msg11!==""){
    console.log('sumana');
  msg11=JSON.parse(`${msg11}`)
  msg11=new RichMessage(msg11);
  console.log("sumannanaaaaaa");
  console.log(msg11);
 
  console.log(msg11);
  }
  else{
console.log("inside else block");
 msg11=res.result.fulfillment.data["null"];

 

 console.log(msg11);
 
 msg11 = JSON.stringify(msg11);
 console.log(msg11);
 console.log("Unnatiiii");
 

 msg11=JSON.parse(`${msg11}`)
 msg11=new RichMessage(msg11);
console.log("sumana inside else block");
console.log(msg11);
  }
}
  
  catch(error){
    console.log(error);
    msg11=new RichMessage({
      text:msg11,
      sentBy:'bot'
    })
    
  
  }
  this.publishMessages(msg11);
  })
  
  }
  
  publishMessages(rm:RichMessage){
    debugger;
    this.conversation.push(rm);
    console.log("checking logsss")
    console.log(this.conversation);
  this.chatSubject.next(this.conversation);
  }
    
  }
  