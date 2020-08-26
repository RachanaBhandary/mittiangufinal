
  


export class BaseMessage{
    botImg:string='assets/img/aa.png';
    userImg:string="assets/img/userImg.jpg";
    sentBy: string = '';
    sentOn=new Date();
   

    

   

    }
    
    export class RichMessage extends BaseMessage{
    
    
    type:string;
    imageUrl:string;
    text:string;
    videoUrl:string;
    audioUrl:string;
    webUrl:string;
    docUrl:string;
    chips:Chip[];
    image?: HTMLImageElement;
    suggestedActions:Replay[];
    LinkAction:Links[];
    data:[];
    
    
    
        constructor(o){
    
            super();
            console.log(o);
            this.type=o.type;
    
    this.imageUrl=o.imageUrl;
    this.text=o.text;
    console.log(o.text);
    console.log('Unnati');
    this.videoUrl=o.videoUrl;
    this.audioUrl=o.audioUrl;
    this.docUrl=o.docUrl;
    this.webUrl=o.webUrl;
    this.image=o.image;
    this.data=o.data;
   
    console.log("weburl is"+ this.webUrl)
    
    if(o.chips && o.chips.length){
        debugger;
    this.chips=[];
        o.chips.forEach(chip => {
            console.log(chip);
            console.log("Rak")
            this.chips.push(  new Chip(chip));
            
          
        });
       
    }
    this.sentBy = o.sentBy;

    if(o.suggestedActions && o.suggestedActions.length){
        console.log("inside replay");
        debugger;
        console.log(o.replies);
        this.suggestedActions=[];
       var test=[];
            o.suggestedActions.forEach(replay => {
                console.log(replay);

             this.sentBy=replay.sentBy;
        



                this.suggestedActions.push(  new Replay(replay));
              
            });
           
        }


        
        if(o.LinkAction && o.LinkAction.length){
            console.log("inside Links");
            debugger;
            console.log(o.LinkAction);
            this.LinkAction=[];
           var test=[];
                o.LinkAction.forEach(links => {
                    console.log(links);
    
                 this.sentBy=links.sentBy;
                 //this.webUrl=links.webUrl;
                 
    
    
    
                    this.LinkAction.push(  new Links(links));
                  
                });
               
            }
    
  



    
    
    
    
    
    
    
        }
    
    
    }
    export class Chip{
    type:string='webUrl';
    text:string='';
    
    
    imageUrl:string;
    
    videoUrl:string;
    audioUrl:string;
    webUrl:string;
    docUrl:string;
    image?: HTMLImageElement;
    
    constructor(o){
    
       
        this.type=o.type;
    this.imageUrl=o.imageUrl;
    this.text=o.text;
    this.videoUrl=o.videoUrl;
    this.audioUrl=o.audioUrl;
    this.docUrl=o.docUrl;
    this.webUrl=o.webUrl;
    this.image=o.image;
    
    
    
    
    
    
    
    }
    }

    export class Replay{
        type:string='webUrl';
        text:string='';
        
        
        imageUrl:string;
        
        videoUrl:string;
        audioUrl:string;
        webUrl:string;
        docUrl:string;
        image?: HTMLImageElement;
        sentBy:string;
        constructor(o){
        this.sentBy=o.sentBy;
            
            this.type=o.type;
        this.imageUrl=o.imageUrl;
        this.text=o.text;
        this.videoUrl=o.videoUrl;
        this.audioUrl=o.audioUrl;
        this.docUrl=o.docUrl;
        this.webUrl=o.webUrl;
        this.image=o.image;
       
        
        
        
        
        
        
        }}
        export class Links{
            type:string='webUrl';
            text:string='';
            
            
            imageUrl:string;
            
            videoUrl:string;
            audioUrl:string;
            webUrl:string;
            docUrl:string;
            image?: HTMLImageElement;
            sentBy:string;
            constructor(o){
            this.sentBy=o.sentBy;
                
                this.type=o.type;
            this.imageUrl=o.imageUrl;
            this.text=o.text;
            this.videoUrl=o.videoUrl;
            this.audioUrl=o.audioUrl;
            this.docUrl=o.docUrl;
            this.webUrl=o.webUrl;
            this.image=o.image;
           
            
            
            
            
            
            
            }
        
    
    }