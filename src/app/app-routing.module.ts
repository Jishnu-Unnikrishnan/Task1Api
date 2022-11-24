import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { IndexComponent } from './home/index/index.component';

const routes: Routes = [
  {
    path:'', component:IndexComponent
  },
  {
    path:'details/:id', component:DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
