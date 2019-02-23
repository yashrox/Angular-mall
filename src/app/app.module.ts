import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule , ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadersComponent } from './headers/headers.component';
import { BoyclothComponent } from './clothes/boycloth/boycloth.component';
import { GirlclothComponent } from './clothes/girlcloth/girlcloth.component';
import { GirlshoComponent } from './shoes/girlsho/girlsho.component';
import { BoyshoComponent } from './shoes/boysho/boysho.component';
import { HomeComponent } from './home/home.component';
import {boycloth } from './clothes/boycloth.services';
import {girlcloth } from './clothes/girlcloth.services';
import { BoydisplayComponent } from './clothes/boycloth/boydisplay/boydisplay.component';
import {searchdata} from './shared/pipe.transform';
import { BoyidComponent } from './clothes/boycloth/boyid/boyid.component';
import { BoyeditComponent } from './clothes/boycloth/boyid/boyedit/boyedit.component';
import { NewclothComponent } from './clothes/boycloth/newcloth/newcloth.component';
import { SigninComponent } from './clothes/auth/signin/signin.component';
import { SignupComponent } from './clothes/auth/signup/signup.component';
import { Activate } from './clothes/auth/canactivate'
import {Deactivate} from './clothes/auth/candeactivate'


@NgModule({
  declarations: [
    AppComponent,
    HeadersComponent,
    BoyclothComponent,
    GirlclothComponent,
    GirlshoComponent,
    BoyshoComponent,
    HomeComponent,
    BoydisplayComponent,
    searchdata,
    BoyidComponent,
    BoyeditComponent,
    NewclothComponent,
    SigninComponent,
    SignupComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
   
  ],
  providers: [boycloth , girlcloth, Activate,Deactivate],
  bootstrap: [AppComponent]
})
export class AppModule { }
