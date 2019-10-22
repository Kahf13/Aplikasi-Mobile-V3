import { PenggunaPage } from './../pengguna/pengguna';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }

  onGoToPengguna()
  {
    this.navCtrl.push(PenggunaPage);
  }

}
