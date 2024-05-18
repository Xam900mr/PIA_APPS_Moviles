import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginComponent } from './login/login.component';
import { user } from './user.model';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/folder/Inicio', icon: 'home' },
    { title: 'Busqueda', url: '/folder/Busqueda', icon: 'search' },
    { title: 'Biblioteca', url: '/folder/Biblioteca', icon: 'musical-notes' },
    { title: 'Eliminar', url: '/folder/Eliminar', icon: 'trash' },
  ];
 // public labels = ['', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor( private modal: ModalController) {}

  async presentLogin() {
    const modal = await this.modal.create({
      component: LoginComponent,
    });
    modal.onDidDismiss().then((dataReturned) => {
      if(dataReturned.data) {
        this.active_user = dataReturned.data;
      }
    });
    return await modal.present();
  }

  active_user: user={
    email: '',
    user_name: '',
    pass: ''
  };

  usuarios: user[] = [
    {
      email: 'xam900mr@gmail.com',
      user_name: 'Elhamburger',
      pass: 'Hamburgesas99'
    },
    {
      email: 'hirez@burgerking.com',
      user_name: 'ElBurgesa',
      pass: 'hoddogsvshamburgesas'
    }
  ];
  
}
