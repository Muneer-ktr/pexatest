import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';


import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { AdduserComponent } from './adduser/adduser.component';
import { GetuserComponent } from './getuser/getuser.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    AdduserComponent,
    GetuserComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
