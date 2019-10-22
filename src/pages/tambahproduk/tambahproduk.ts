import { AboutPage } from './../about/about';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TambahprodukPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tambahproduk',
  templateUrl: 'tambahproduk.html',
})
export class TambahprodukPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onGoToKembali()
  {
    this.navCtrl.push(AboutPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TambahprodukPage');
  }

}
