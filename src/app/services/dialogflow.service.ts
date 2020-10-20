import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import {Router} from '@angular/router'

import { ApiAiClient } from 'api-ai-javascript/es6/ApiAiClient';
import {Observable} from 'rxjs';
import {Subject} from 'rxjs';
import { RichMessage } from '../model/rich-messages.model';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
@Injectable({
  providedIn: 'root'
})
export class Message{
  constructor(public content: String,public sentBy: String){
    
  }
}
export class DialogflowService {
aa:DialogflowService;
private storage: AngularFireStorage;
private _router:Router;
  readonly token=environment.dialogflow.FTBal;
  
  client:any;
  res:any;
  constructor() { }
  chatSubject=new Subject<RichMessage[]>();
  conversation:RichMessage[]=[];

  
   sendToBot(messageObject){
     debugger
      this.publishMessages(new RichMessage(messageObject));
      console.log("sumana check");
      console.log(messageObject.text);
      this.postToDialogFlow(messageObject.text)
  
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
    debugger;
    console.log("unnati check");
    console.log('Error h:',messageToSend);

    console.log(messageToSend)
    const params = new URLSearchParams();
    params.append('data',messageToSend);
    console.log(params)
    var url = 'https://mittiserver-dot-ft-bal-jdnxov.uc.r.appspot.com/send-msg';
  fetch(url, {
    method: 'POST',
    body:params
  }).then(res => res.json())
   .then(response => {debugger
   
    console.log(response);
    
    this.res=response;
 

    
   // speechSynthesis.speak( new SpeechSynthesisUtterance(response.Reply))
  // speechSynthesis.speak( new SpeechSynthesisUtterance(response.Reply))
    
  // })
   // .catch(error => console.error('Error h:', error));
  
    
   //this.client.textRequest(messageToSend)
  //.then(res=>{
   // debugger;
   // let msg11=res.result.fulfillment.speech;

    
   try{
    if(response.Reply!==""){
    console.log('sumana');
    response.Reply=JSON.parse(`${response.Reply}`)
    response.Reply=new RichMessage(response.Reply);
  console.log("sumannanaaaaaa");
  console.log(response.Reply);
 
  console.log(response.Reply);
  }
  else{
console.log("inside else block");
 //msg11=res.result.fulfillment.data["null"];

 

 console.log(response.Reply);
 
 response.Reply = JSON.stringify(response.Reply);
 console.log(response.Reply);
 console.log("Unnatiiii");
 

 response.Reply=JSON.parse(`${response.Reply}`)
 response.Reply=new RichMessage(response.Reply);
console.log("sumana inside else block");
console.log(response.Reply);
  }
}
  
  catch(error){
    console.log(error);
    
    response.Reply=new RichMessage({
      text:response.Reply,
      sentBy:'bot'
    })
    
    
  }
  
  this.publishMessages(response.Reply);
  })
  
  }
  
  publishMessages(rm:RichMessage){
    debugger;
    console.log(rm)
    if(rm.text=="hi")
    {

    }
    else{
    this.conversation.push(rm);
    }
    console.log("checking logsss")
    console.log(this.conversation);
    
  this.chatSubject.next(this.conversation);
    

   
  
  }
    
  }