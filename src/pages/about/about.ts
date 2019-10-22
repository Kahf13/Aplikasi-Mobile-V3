import { KomenPage } from './../komen/komen';
import { ArtikelPage } from './../artikel/artikel';
import { TambahprodukPage } from './../tambahproduk/tambahproduk';
import { KeranjangPage } from './../keranjang/keranjang';
import { DaftarPage } from './../daftar/daftar';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }

  onGoToDaftar()
  {
    this.navCtrl.push(DaftarPage);
  }

  onGoToKeranjang()
  {
    this.navCtrl.push(KeranjangPage);
  }

  onGoToTambah()
  {
    this.navCtrl.push(TambahprodukPage);
  }

  onGoToKomentar()
  {
    this.navCtrl.push(KomenPage);
  }

  onGoToArtikel()
  {
    this.navCtrl.push(ArtikelPage);
  }
}
