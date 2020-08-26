import { Component, OnInit ,Input} from '@angular/core';
import { DialogflowService } from 'src/app/services/dialogflow.service';
import { RichMessage, Replay } from '../../model/rich-messages.model';
import { NgModule } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

import {Chip} from 'src/app/model/rich-messages.model';
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})



export class MessageComponent implements OnInit {
 
@Input() message;
@Input('test') test:[];


constructor(private dfs: DialogflowService) { }


  ngOnInit() {}
 
  lineChartData: ChartDataSets[] = [
   
    { data: [this.test], label: 'Balance' },
    
  ];

  lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June'];

  lineChartOptions = {
    responsive: true,
    
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];
    lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

chipOperation(chip:Chip){
  console.log(chip);
  this.dfs.sendToBot({
    text: chip.text,
    sentBy: 'user'
  })
}

work(){
  console.log("inside work")
  var test=document.getElementById('suggestion');
  test.style.display="none";
  
   }
   work1(){
    console.log("inside work1")
    var test=document.getElementById('suggestion');
    test.style.display="block";
     }

ReplayOperation(replay:Replay){
  console.log("inside message component")

  console.log(replay);
  this.dfs.sendToBot({
    text: replay.text,
    sentBy: 'user'
  })
}
   

 
  

}
