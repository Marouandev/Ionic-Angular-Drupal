import { Injectable, Inject, Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ViewserviceProvider } from '../../providers/view/view.services';
import { NodePage } from '../node/node';
import { APP_NODE, NodeConfig } from '../../providers/node/node.config';
import { APP_CONFIG, IAppConfig } from '../../app/app.config';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
  providers: [ ViewserviceProvider, { provide: APP_NODE, useValue: NodeConfig } ]
})
export class ListPage {
  responseData: any;
  url: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewService:ViewserviceProvider, @Inject(APP_CONFIG) private config: IAppConfig) {
  }

  ngOnInit(): void {
    this.initialList();
  }

  initialList(){
    this.url = this.config.viewApi;

    this.viewService.get(this.url).then((result) => {
      this.responseData = result;
    }, (err) => {
      console.log('failed list');
    });

  }

  gotoDetail(id) {
    this.navCtrl.push(NodePage, {
      id: id
    });
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.initialList();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.responseData = this.responseData.filter((item) => {
        return (item.title[0].value.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}
