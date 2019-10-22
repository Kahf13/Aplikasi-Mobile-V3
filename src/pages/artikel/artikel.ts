import { ArtikelDetailPage } from './../artikel-detail/artikel-detail';
import { ApiProvider } from './../../providers/api/api';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';



@IonicPage()
@Component({
  selector: 'page-artikel',
  templateUrl: 'artikel.html',
})
export class ArtikelPage {
  artikels: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public apiProvider: ApiProvider) {
      this.artikels = this.apiProvider.getArtikel();
  }

  openDetails(artikel){
    this.navCtrl.push(ArtikelDetailPage, {film: artikel});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArtikelPage');
  }

}
