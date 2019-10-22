import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-komen-detail',
  templateUrl: 'komen-detail.html',
})
export class KomenDetailPage {
 film: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.film = this.navParams.get('film');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KomenDetailPage');
  }

}
