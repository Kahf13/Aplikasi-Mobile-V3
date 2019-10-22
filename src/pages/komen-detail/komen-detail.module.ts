import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KomenDetailPage } from './komen-detail';

@NgModule({
  declarations: [
    KomenDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(KomenDetailPage),
  ],
})
export class KomenDetailPageModule {}
