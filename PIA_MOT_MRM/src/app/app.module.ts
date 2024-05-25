import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { user } from './user.model';
import { FormsModule } from '@angular/forms';
import { SiginComponent } from './sigin/sigin.component';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { AgregarComponent } from './agregar/agregar.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { BusquedaComponent } from './busqueda/busqueda.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, SiginComponent, AgregarComponent, BusquedaComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, provideFirebaseApp(() => initializeApp({"projectId":"hi-res-ae8c8","appId":"1:769626108707:web:f23db212730d13482d5296","storageBucket":"hi-res-ae8c8.appspot.com","apiKey":"AIzaSyB7lxuUwc6Q5bLoEd2h1gLQdGacs_qPxeU","authDomain":"hi-res-ae8c8.firebaseapp.com","messagingSenderId":"769626108707","measurementId":"G-RBYPZ3F7XC"})), provideAuth(() => getAuth()), provideAnalytics(() => getAnalytics()), ScreenTrackingService, UserTrackingService, provideFirestore(() => getFirestore()), provideStorage(() => getStorage())],
  bootstrap: [AppComponent],
})
export class AppModule {}
