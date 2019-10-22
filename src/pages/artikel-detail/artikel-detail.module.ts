import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArtikelDetailPage } from './artikel-detail';

@NgModule({
  declarations: [
    ArtikelDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ArtikelDetailPage),
  ],
})
export class ArtikelDetailPageModule {}
