import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserserviceProvider } from '../../providers/user/user.services';
import { APP_USER, UserConfig } from '../../providers/user/user.config';
import { RegisterPage } from '../register/register';
import { ListPage } from '../list/list';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [ UserserviceProvider, { provide: APP_USER, useValue: UserConfig }]
})
export class LoginPage {
  Credentials = { "name": "", "pass": "" };
  responseData : any;
  error : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public userService:UserserviceProvider) {
  }

  login(){
    this.userService.Login(this.Credentials).then((result) => {
      this.responseData = result;
      localStorage.setItem('currentUser', JSON.stringify(this.responseData));
      this.navCtrl.push(ListPage);
    }, (err) => {
      this.error = err.json().message ? err.json().message : err.toString();
    });

  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }

  createAccount() {
    this.navCtrl.push(RegisterPage);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
