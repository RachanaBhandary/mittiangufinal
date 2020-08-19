import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

import { ApiAiClient } from 'api-ai-javascript/es6/ApiAiClient';
import {Observable} from 'rxjs';
import {Subject} from 'rxjs';
import { RichMessage } from '../model/rich-messages.model';

@Injectable({
  providedIn: 'root'
})

export class DialogflowService {

accessyokrn:any;
  //readonly token=environment.dialogflow.FTBal;
  token:any;
  client:any;
  sessionId:12452125;
res:any;
  constructor(private http:HttpClient) {
   
  
    
   }
   /*public getToken()
   {
     this.http.get('http://localhost:4000/token').subscribe((response:any)=>
     {
       console.log(response.token)
      this.token= response.token;
       this.client=new ApiAiClient({accessToken:this.token});
    console.log(this.client)
     })
   }*/
  chatSubject=new Subject<RichMessage[]>();
  conversation:RichMessage[]=[];
  
  /*connectToApi(){
  
   // this.client=new ApiAiClient({accessToken:this.token});
   
  }*/

  public connectToApi(request) {
   
    /*debugger;
    console.log("sumana checking");
    console.log(request);
 
 
    console.log(this.token);
    var config = {
      headers: {
        'Authorization': "Bearer " + this.token,
        'Content-Type': 'application/json; charset=utf-8'
      }
    };
    
    console.log(this.http.post(
      'https://dialogflow.googleapis.com/v2/projects/' + environment.dialogflow.projectId +
      '/agent/sessions/' + this.sessionId + ':detectIntent',
      request,
      config
    ))  
   return this.http.post(
      'https://dialogflow.googleapis.com/v2/projects/' + environment.dialogflow.projectId +
      '/agent/sessions/' + this.sessionId + ':detectIntent',
      request,
      config
    )*/
    console.log(request)
    const params = new URLSearchParams();
    params.append('data',request);
    var url = 'http://localhost:5000/send-msg';
  fetch(url, {
    method: 'POST',
    body:params
  }).then(res => res.json())
   .then(response => {
    console.log(response);
    this.res=response;
 
   // speechSynthesis.speak( new SpeechSynthesisUtterance(response.Reply))
  
    
   })
    .catch(error => console.error('Error h:', error));
  }
  
  
   sendToBot(messageObject){
     console.log(messageObject)
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
  