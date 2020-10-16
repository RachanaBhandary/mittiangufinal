import { Component, OnInit} from '@angular/core';
import { DialogflowService } from 'src/app/services/dialogflow.service';
import { RichMessage } from '../../model/rich-messages.model';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { combineLatest, from, Observable, of } from 'rxjs';
import {Router} from '@angular/router'
import { StarRatingColor } from 'src/app/components/star-component/star-rating/star-rating.component';
import { areAllEquivalent } from '@angular/compiler/src/output/output_ast';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { coerceCssPixelValue } from '@angular/cdk/coercion';
import { MessageComponent } from 'src/app/components/message/message.component';
import { ThemeService } from 'ng2-charts';
import { ChatWindowService } from 'src/app/services/chat-window.service';
import * as $ from 'jquery';
import { exit } from 'process';

//declare var $: any;

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})
export class ChatWindowComponent implements OnInit {
flag=false;
conversation:RichMessage[]=[];
askInfo=false;
textMessage:string='';
imageText:string='';
imageUrl1:string;
onChipSelected:any;
url_test:string;
subscription:any;
fileToUpload:File=null;
fileToUpload1:File;
rating:number ;
starCount:number = 5;
starColor:StarRatingColor = StarRatingColor.accent;
starColorP:StarRatingColor = StarRatingColor.primary;
starColorW:StarRatingColor = StarRatingColor.warn;

imageUrl:string="assets/img/default-image.jpg";
  constructor(private service:ChatWindowService, private dfs:DialogflowService, private storage: AngularFireStorage,private _router:Router) { 
  

  }

  handleFileInput(file:FileList){
this.fileToUpload=file.item(0);



console.log(this.fileToUpload);

var imageText1=this.fileToUpload.name;
this.imageText=imageText1;

console.log(imageText1);
console.log(this.imageText);
this.dfs.sendToBot({
  text:this.imageText,
  
  sentBy:'user'
 
  
})
var reader=new FileReader();
reader.onload=(event:any)=>{
  console.log(event);
this.imageUrl=event.target.result;
var test=this.imageUrl;
const preview=document.getElementById("test");
//preview.style.display="block";
var list = '<li class="list-group-item">'
this.imageUrl1="https://storage.cloud.google.com/test-va/"+imageText1
 this.url_test = "https://storage.googleapis.com/as-testing-bucket/" + imageText1;

 const filePath = this.imageText;
 const ref: AngularFireStorageReference = this.storage.ref(filePath);
 const task: AngularFireUploadTask = ref.put(this.fileToUpload);
 return from(task);


}


reader.readAsDataURL(this.fileToUpload);


  }
  
public sendMessage(){
  debugger;
  
this.dfs.sendToBot({
  text:this.textMessage,
  
  sentBy:'user'
 
  
})
this.textMessage=""

}
sendMessageFeedback(){

  this.dfs.sendToBot({
    text:'Like',
    
    sentBy:'user'
   
    
  })
  this.textMessage='';
}

test(){
  console.log("inside test");
  debugger;
  const node = document.querySelector(".card") as HTMLElement;

 node.style.display="none";

 this._router.navigate(['']);

}
cc()
{
  if(this.flag==true)
  {
    console.log(this.conversation[(this.conversation.length)-1])
    var text=this.conversation[(this.conversation.length)-1].text[0]['text'].toString()
    speechSynthesis.speak( new SpeechSynthesisUtterance(text))
    
    this.flag=false;
  }
  
}
micchange()
{
  //blink();
  document.getElementById("mic").style.color="red"
  document.getElementById("mic").style.animation="blink 1s ease-in infinite";
  console.log("aaa")
  /*function blink(){
    $('#mic').delay(100).fadeTo(100,0.5).delay(100).fadeTo(100,1, blink);
}*/

}
playAudio()
{
  debugger;
  let audio = new Audio();
  audio.src = "assets/audio/start_rec.mp3";
  audio.load();
  audio.play();
}
stopAudio()
{

  let audio = new Audio();
  audio.src = "assets/audio/start_rec.mp3";
  audio.load();
  audio.play();
}
public aa()
{
 
  this.playAudio();
    
    
  
  
 
 debugger;
   var SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

   var recognition: any = new SpeechRecognition();
  
   
  recognition.start();
 
  
  recognition.onresult = (event)=> {
    this.stopAudio();
    document.getElementById("mic").style.color="#57b3dd"
    document.getElementById("mic").style.animation="";
    debugger;
   console.log("imsode")
       var last = event.results.length - 1;
       this.textMessage =event.results[last][0].transcript;
      //document.getElementById("chatTextarea").innerHTML=this.textMessage;
     
      this.sendMessage();
      
      
      console.log("asf"+this.textMessage)
      this.flag=true;
       
      
     }
  console.log("starts")
  for (var i = 1; i <= 15; ++i) {
    setDelay(i);
  }
  function setDelay(i) {
    
    setTimeout(function(){
     console.log("aa")
     $(".msg_card_body").animate({ scrollTop: $(".msg_card_body")[0].scrollHeight+1000}, 1000);
    }, 7500);
  }
 
 
console.log("sf")
  
}



sendMessage1(){
 

 
  console.log("HI mitti");
  this.dfs.sendToBot1({

    text:this.imageText,
    image:this.imageUrl1,
    sentBy:'user'
  })
  console.log(this.url_test);
  this.url_test='';
  
  }
  sendMessageFeedbackNegative(){
    this.dfs.sendToBot({
      text:'Dislike',
      
      sentBy:'user'
     
      
    })
    this.textMessage='';
  }
  clearConversation(){
    debugger;
    console.log("clicked clear");
    this.conversation=[];
    window.location.reload();

    
    

  }
  onRatingChanged(rating){
    console.log(rating);
    this.rating = rating;
  }
 
  ngOnInit() {
   
    this.dfs.sendToBot({
      text:"hi",
      
      sentBy:'user'
     
      
    }) /*   
debugger;
var SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
const recognition = new SpeechRecognition();
const icon = document.querySelector('i.fa.fa-microphone')
icon.addEventListener('click', () => {
  
  dictate();
});
const dictate = () => {
  recognition.start();
  recognition.onresult = (event) => {
    this.textMessage = event.results[0][0].transcript;
    this.sendMessage()
  
  }
}*/debugger

    this.subscription=this.dfs.chatSubject.subscribe((conversation:RichMessage[])=>{
      console.log('msg sent');
      
    
      this.conversation=conversation;

  debugger;
      $(".msg_card_body").stop().animate({ scrollTop: $(".msg_card_body")[0].scrollHeight+1000}, 1000);
    
console.log(this.conversation);
this.cc()
    });
 
}


  resetSubscription = () => {        
    this.dfs.chatSubject.next();
   
}
ngOnDestroy() {
  debugger;
  this.subscription.unsubscribe();
  
} 

}