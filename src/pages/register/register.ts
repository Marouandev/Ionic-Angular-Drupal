import { Component, Injectable, Inject } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserserviceProvider } from '../../providers/user/user.services';
import { APP_USER, UserConfig } from '../../providers/user/user.config';
import { LoginPage } from '../login/login';
import { ListPage } from '../list/list';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
  providers: [ UserserviceProvider, { provide: APP_USER, useValue: UserConfig }]
})
export class RegisterPage {

  Credentials = { "name": "", "pass": "", "mail":"" };
  responseData : any;
  data : any;
  error : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public userService:UserserviceProvider) {
  }

  signup(){
    this.data = { 
      "name": { "value": this.Credentials.name }, 
      "mail": { "value": this.Credentials.mail }, 
      "pass": { "value": this.Credentials.pass } 
    };
    this.userService.Register(this.data).then((result) => {
      this.responseData = result;
      localStorage.setItem('currentUser', JSON.stringify(this.responseData));
      this.navCtrl.push(ListPage);
    }, (err) => {
      this.error = err.json().message ? err.json().message : err.toString();
    });

  }

  login() {
    this.navCtrl.push(LoginPage);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
