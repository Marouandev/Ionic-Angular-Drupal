import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
import { ListPage } from '../pages/list/list';
import { NodePage } from '../pages/node/node';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { APP_CONFIG, AppConfig } from './app.config';
import { AppRouting } from './app.routing';
import { HeadersService } from '../providers/headers';

@NgModule({
  declarations: [
    MyApp,
    ListPage,
    RegisterPage,
    LoginPage,
    NodePage
  ],
  imports: [
    BrowserModule, HttpModule,
    IonicModule.forRoot(MyApp),
    AppRouting,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListPage,
    LoginPage,
    RegisterPage,
    NodePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    { provide: APP_CONFIG, useValue: AppConfig },
    HeadersService
  ]
})
export class AppModule {}
