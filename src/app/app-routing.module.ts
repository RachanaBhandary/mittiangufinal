import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatWindowComponent } from './components/chat-window/chat-window.component';
import { MittiLogoComponent } from './components/mitti-logo/mitti-logo.component';
import { LoanComponent } from './loan/loan.component';
import { AccountComponent } from './account/account.component';
import { MailComponent } from './mail/mail.component';

const routes: Routes = [

  {path:'',component:MittiLogoComponent},
    {path:"homePage",component:ChatWindowComponent},
    { path: 'mail', component: MailComponent },
  { path: 'loan', component: LoanComponent },
  { path: 'account', component: AccountComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
