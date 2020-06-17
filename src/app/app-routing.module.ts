import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatWindowComponent } from './components/chat-window/chat-window.component';
import { MittiLogoComponent } from './components/mitti-logo/mitti-logo.component';

const routes: Routes = [

  {path:'',component:MittiLogoComponent},
    {path:"homePage",component:ChatWindowComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
