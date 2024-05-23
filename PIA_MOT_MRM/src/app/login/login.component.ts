import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { user } from '../user.model';
import { UsuariosService } from '../usuarios.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {

  constructor(private alerta:AlertController, private modal:ModalController, private service:UsuariosService) {}

  userarray: user[]=this.service.usuarios;
  
  
  CerrarModal(){
    this.modal.dismiss()
  };

  async ConfirmarModal() {
    let coincide: boolean = false;
    let i = 0;
  
    while (i < this.userarray.length) {
      if (this.userarray[i].user_name === this.usuario.user_name && this.userarray[i].pass === this.usuario.pass) {
        coincide = true;
        this.modal.dismiss(this.usuario);
        break; 
      } else {
        i++;
      }
    }
  
    if (!coincide) {
      const alert = await this.alerta.create({
        header: 'Error',
        message: 'Usuario o contraseña incorrectos.',
        buttons: ['OK']
      });
  
      await alert.present();
    }
  };
        

    usuario: user = {
      email: '',
      user_name: '',
      pass: ''
    };

  ngOnInit() {}

}
