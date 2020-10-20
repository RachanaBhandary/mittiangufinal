import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageComponent } from './components/message/message.component';
import { ChatWindowComponent } from './components/chat-window/chat-window.component';
import { CommonModule} from '@angular/common';
import { DialogflowService } from './services/dialogflow.service';
import { MittiLogoComponent } from './components/mitti-logo/mitti-logo.component';
import {FormsModule} from '@angular/forms';
import { Route } from '@angular/compiler/src/core';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule } from '@angular/material/tooltip';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ChartsModule } from 'ng2-charts';
import { StarRatingComponent } from './components/star-component/star-rating/star-rating.component';
import { ChatWindowService } from 'src/app/services/chat-window.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CdkTableModule } from '@angular/cdk/table';

import {HttpClientModule} from '@angular/common/http';
import { LoanComponent } from './loan/loan.component';
import { AccountComponent } from './account/account.component';
import { MailComponent } from './mail/mail.component';



@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    ChatWindowComponent,
    MittiLogoComponent,
    StarRatingComponent,
    LoanComponent,
    AccountComponent,
    MailComponent

  
    
    
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireStorageModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    BrowserAnimationsModule,
    CdkTableModule,
    ChartsModule,
  
    HttpClientModule,
    
  ],
  
    providers: [DialogflowService, MatSnackBar,ChatWindowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
