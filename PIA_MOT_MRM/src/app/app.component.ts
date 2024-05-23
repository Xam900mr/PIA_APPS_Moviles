import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginComponent } from './login/login.component';
import { SiginComponent } from './sigin/sigin.component';
import { AgregarComponent } from './agregar/agregar.component';
import { user } from './user.model';
import { cancion } from './music.model';
import { UsuariosService } from './usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/folder/Inicio', icon: 'home' },
    { title: 'Busqueda', url: '/folder/Busqueda', icon: 'search' }
  ];
 // public labels = ['', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor( private modal: ModalController) {}

  private isModalOpen = false;

  async presentLogin() {
    if(this.isModalOpen){
      return;
    }
    this.isModalOpen=true;
    const modal = await this.modal.create({
     component: LoginComponent,
     cssClass:'Clasemodal'
    });
    modal.onDidDismiss().then((dataReturned) => {
      this.isModalOpen=false;
      if(dataReturned.data) {
        this.active_user = dataReturned.data;
      }
    });
    return await modal.present();
  }

  async presentSigin() {
    if(this.isModalOpen){
      return;
    }
    this.isModalOpen=true;
    const modal = await this.modal.create({
      component: SiginComponent,
      cssClass:'Clasemodal'
    });
    modal.onDidDismiss().then((dataReturned) => {
      this.isModalOpen=false;
      if(dataReturned.data) {
        this.active_user = dataReturned.data;
      }
    });
    return await modal.present();
  }

  async presentAgregar() {
    if(this.isModalOpen){
      return;
    }
    this.isModalOpen=true;
    const modal = await this.modal.create({
      component: AgregarComponent,
      cssClass:'Clasemodal'
    });
    modal.onDidDismiss().then((dataReturned) => {
     /*this.isModalOpen=false;
      if(dataReturned.data) {
        this.song = dataReturned.data;
      }*/
    });
    return await modal.present();
  }



  active_user: user={
    email: '',
    user_name: '',
    pass: ''
  };

  song: cancion = {
    nombre: '',
    audio: '',
    artista: '',
    foto: '',
  };


 
  
}
