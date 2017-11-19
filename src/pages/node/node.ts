import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NodeserviceProvider } from '../../providers/node/node.services';
import { APP_NODE, NodeConfig } from '../../providers/node/node.config';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'page-node',
  templateUrl: 'node.html',
  providers: [ NodeserviceProvider, { provide: APP_NODE, useValue: NodeConfig } ]
})
export class NodePage {
  nid: any;
  content: any;
  url: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public nodeService:NodeserviceProvider, private route: ActivatedRoute) {

  }

  getNode(nid){

      this.nodeService.getById(nid).then((result) => {
          this.content = result;
      }, (err) => {
          console.log('failed content');
      });

  }

  ngOnInit(): void {

      let nid = this.navParams.get('id');

        this.route.params.subscribe(params => {
            let id = params['id'];
            this.getNode(nid);
        });

  }

}
