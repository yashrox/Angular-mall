import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BoyclothComponent } from './clothes/boycloth/boycloth.component'
import {GirlclothComponent } from './clothes/girlcloth/girlcloth.component'
import {HomeComponent}  from './home/home.component' 
import {AppComponent}  from './app.component'
import {BoyidComponent} from './clothes/boycloth/boyid/boyid.component'
import {BoyeditComponent } from './clothes/boycloth/boyid/boyedit/boyedit.component'
import {NewclothComponent} from './clothes/boycloth/newcloth/newcloth.component'
import {SigninComponent} from './clothes/auth/signin/signin.component'
import {SignupComponent} from './clothes/auth/signup/signup.component'
import { Activate } from './clothes/auth/canactivate'
import {Deactivate} from './clothes/auth/candeactivate'

const routes: Routes = [
    {path : ' ' , redirectTo : '/home' , pathMatch : 'full' },
    {path : 'home' , component : HomeComponent},
    { path : 'boyscloth' , component : BoyclothComponent , children :[
      {path : 'new' , component : NewclothComponent ,  canActivate : [Activate]},
      ] },
   { path : 'boyscloth/:id' , component : BoyidComponent , children : [
      { path : 'edit/:id' , component : BoyeditComponent , canDeactivate : [Deactivate]},
      ] },
    { path :  'girlscloth' , component : GirlclothComponent}, 
    {path : 'signin' , component : SigninComponent} , 
    {path : 'register' , component : SignupComponent}
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
