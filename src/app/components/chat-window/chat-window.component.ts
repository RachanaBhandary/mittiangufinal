import { Component, OnInit } from '@angular/core';
import { DialogflowService } from 'src/app/services/dialogflow.service';
import { RichMessage } from '../../model/rich-messages.model';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { combineLatest, from, Observable, of } from 'rxjs';
import {Router} from '@angular/router'
import { StarRatingColor } from 'src/app/components/star-component/star-rating/star-rating.component';
declare var $: any;

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})
export class ChatWindowComponent implements OnInit {
conversation:RichMessage[]=[];
askInfo=false;
textMessage:string='';
imageText:string='';
imageUrl1:string;
onChipSelected:any;
url_test:string;
subscription:any;
fileToUpload:File=null;
rating:number ;
starCount:number = 5;
starColor:StarRatingColor = StarRatingColor.accent;
starColorP:StarRatingColor = StarRatingColor.primary;
starColorW:StarRatingColor = StarRatingColor.warn;

imageUrl:string="assets/img/default-image.jpg";
  constructor(private dfs:DialogflowService, private storage: AngularFireStorage,private _router:Router) { 
  

  }

  handleFileInput(file:FileList){
this.fileToUpload=file.item(0);



console.log(this.fileToUpload);

var imageText1=this.fileToUpload.name;
this.imageText=imageText1;

console.log(imageText1);
console.log(this.imageText);
var reader=new FileReader();
reader.onload=(event:any)=>{
  console.log(event);
this.imageUrl=event.target.result;
var test=this.imageUrl;
const preview=document.getElementById("test");
preview.style.display="block";
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
sendMessage(){
  
this.dfs.sendToBot({
  text:this.textMessage,
  
  sentBy:'user'
 
  
})
this.textMessage='';

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

  ngOnInit(): void {

   
      this.subscription=this.dfs.chatSubject.subscribe((conversation:RichMessage[])=>{
        console.log('msg sent');
        this.conversation=conversation;

    debugger;
        $(".msg_card_body").stop().animate({ scrollTop: $(".msg_card_body")[0].scrollHeight}, 1000);
      
  console.log(this.conversation);
      });
      this.dfs.connectToApi();
  }

  resetSubscription = () => {        
    this.dfs.chatSubject.next();
   
}
ngOnDestroy() {
  debugger;
  this.subscription.unsubscribe();
  
} 

}
