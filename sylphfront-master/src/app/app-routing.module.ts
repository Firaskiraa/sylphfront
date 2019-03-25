import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientlistComponent } from './clientlist/clientlist.component';
import {ClientaddComponent } from './clientadd/clientadd.component';
const routes: Routes = [
  {
    path:'',
    component:ClientlistComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
