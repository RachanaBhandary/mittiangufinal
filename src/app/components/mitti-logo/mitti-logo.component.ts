import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { DialogflowService } from 'src/app/services/dialogflow.service';
@Component({
  selector: 'app-mitti-logo',
  templateUrl: './mitti-logo.component.html',
  styleUrls: ['./mitti-logo.component.css']
})
export class MittiLogoComponent implements OnInit {

  constructor(private _router:Router,private dfs:DialogflowService) {
    
   }

  handleClick(event: Event) {
    
    debugger;
    const test=document.getElementById('MittiLogoDesign');
   
this._router.navigate(['/homePage']);

  }

  
  

  ngOnInit(): void {
  }

}
