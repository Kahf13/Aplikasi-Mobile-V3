import { KeranjangPage } from './../keranjang/keranjang';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-daftar',
  templateUrl: 'daftar.html',
})
export class DaftarPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onGoToKeranjang()
  {
    this.navCtrl.push(KeranjangPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DaftarPage');
  }

}
