import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { user } from '../user.model';
import { UsuariosService } from '../usuarios.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
  styleUrls: ['./sigin.component.scss'],
})
export class SiginComponent  implements OnInit {

  constructor(private alerta:AlertController, private modal:ModalController, private service:UsuariosService) { }

  userarray: user[]=this.service.usuarios;

  CerrarModal(){
    this.modal.dismiss()
  };

  async ConfirmarModal() {
    let coincide: boolean = false;
    let i = 0;
  
    while (i < this.userarray.length) {
      if (this.userarray[i].user_name === this.usuario.user_name ) {
        coincide = true;
        const alert = await this.alerta.create({
          header: 'Error',
          message: 'Usuario ya existe.',
          buttons: ['OK']});

          await alert.present();
        break;
      } else {
        i++;
      }
    }
  
    if (!coincide) {
      
      this.modal.dismiss(this.usuario);
      };
  
      
  };
  

    usuario: user = {
      email: '',
      user_name: '',
      pass: ''
    };

  ngOnInit() {}

}
