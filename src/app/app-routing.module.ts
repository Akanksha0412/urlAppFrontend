import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { DefaultComponent } from './default/default.component';
import { DisplayComponent } from './display/display.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"create",
    component: CreateComponent
  },
  {
    path:"display",
    component: DisplayComponent
  },
  {
    path:"",
    component:DefaultComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
