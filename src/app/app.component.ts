import { Component } from '@angular/core';
import { Routes, RouterModule,Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  title = 'MittiChatbot';
  router: string;


  constructor(private _router: Router){

    this.router = _router.url; 
}
}
