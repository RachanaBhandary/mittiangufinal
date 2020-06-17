import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-mitti-logo',
  templateUrl: './mitti-logo.component.html',
  styleUrls: ['./mitti-logo.component.css']
})
export class MittiLogoComponent implements OnInit {

  constructor(private _router:Router) { }

  handleClick(event: Event) {
   
    debugger;
    const test=document.getElementById('MittiLogoDesign');
   
this._router.navigate(['/homePage']);
console.log("hi");
  }

  
  

  ngOnInit(): void {
  }

}
