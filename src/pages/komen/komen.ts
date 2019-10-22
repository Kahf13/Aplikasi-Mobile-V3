import { ApiProvider } from './../../providers/api/api';
import { KomenDetailPage } from './../komen-detail/komen-detail';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';




@IonicPage()
@Component({
  selector: 'page-komen',
  templateUrl: 'komen.html',
})
export class KomenPage {
  komentars: Observable<any>;

  constructor(public navCtrl: NavController, public apiProvider: ApiProvider, public NavParams: NavParams) {
    this.komentars = this.apiProvider.getKomentar();
  }
    openDetails(komentar){
      this.navCtrl.push(KomenDetailPage, {people: komentar});
    }

}
