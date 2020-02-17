import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; 
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginAppComponent } from './login-app/login-app.component';
import { UsermanagementComponent } from './usermanagement/usermanagement.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginAppComponent,
    UsermanagementComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})


export class AppModule { }
