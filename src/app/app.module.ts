import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubarComponent } from './menubar/menubar.component';
import{ HttpClientModule} from '@angular/common/http'
import {Router,Routes, RouterModule} from "@angular/router"; 
import { UserlistComponent } from './userlist/userlist.component';
import { ClientlistComponent } from './clientlist/clientlist.component';
import { ClientaddComponent } from './clientadd/clientadd.component';
import { UseraddComponent } from './useradd/useradd.component';
import { CompterenduComponent } from './compterendu/compterendu.component';
import { CrlistComponent } from './crlist/crlist.component';
import { CrService } from './Services/cr.service';
@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
   
    
    UserlistComponent,
   
    
    ClientlistComponent,
   
    
    ClientaddComponent,
   
    
    UseraddComponent,
   
    
    CompterenduComponent,
   
 

    CrlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  CrService
})
export class AppModule { }
