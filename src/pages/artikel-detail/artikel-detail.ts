import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-artikel-detail',
  templateUrl: 'artikel-detail.html',
})
export class ArtikelDetailPage {
  film: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.film = this.navParams.get('film');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArtikelDetailPage');
  }

}
