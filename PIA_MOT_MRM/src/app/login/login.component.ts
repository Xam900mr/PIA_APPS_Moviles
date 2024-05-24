import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { user } from '../user.model';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {

  constructor(private alerta:AlertController, private modal:ModalController, private authService: AuthService) {}

  //userarray: user[]=this.service.usuarios;
  
  
  CerrarModal(){
    this.modal.dismiss()
  };

  async ConfirmarModal() {

    try {
      await this.authService.login(this.usuario.user_name, this.usuario.pass);
      this.modal.dismiss(this.usuario);
    } catch (error) {
      console.error("Error during login:", error);
      const alert = await this.alerta.create({
        header: 'Error',
        message: 'Usuario o contraseña incorrectos.',
        buttons: ['OK']
      });
  
      await alert.present();
    }
  };
        

    usuario: user = {
      user_name: '',
      pass: ''
    };

  ngOnInit() {}

}
