import { AboutPage } from './../about/about';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the KeranjangPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-keranjang',
  templateUrl: 'keranjang.html',
})
export class KeranjangPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onGoToKembali()
  {
    this.navCtrl.push(AboutPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KeranjangPage');
  }

}
