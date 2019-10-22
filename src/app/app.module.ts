import { ApiProvider } from './../providers/api/api';
import { KomenDetailPage } from './../pages/komen-detail/komen-detail';
import { KomenPage } from './../pages/komen/komen';
import { ArtikelPage } from './../pages/artikel/artikel';
import { TambahprodukPage } from './../pages/tambahproduk/tambahproduk';
import { KeranjangPage } from './../pages/keranjang/keranjang';
import { DaftarPage } from './../pages/daftar/daftar';
import { PenggunaPage } from './../pages/pengguna/pengguna';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ArtikelDetailPage } from '../pages/artikel-detail/artikel-detail';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PenggunaPage,
    KeranjangPage,
    TambahprodukPage,
    DaftarPage,
    ArtikelPage,
    ArtikelDetailPage,
    KomenPage,
    KomenDetailPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PenggunaPage,
    KeranjangPage,
    TambahprodukPage,
    DaftarPage,
    ArtikelPage,
    ArtikelDetailPage,
    KomenPage,
    KomenDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider
  ]
})
export class AppModule {}
