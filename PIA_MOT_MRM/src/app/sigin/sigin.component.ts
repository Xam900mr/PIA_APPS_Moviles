import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { user } from '../user.model';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../auth.service';
import { FotService } from '../fot.service';


@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
  styleUrls: ['./sigin.component.scss'],
})
export class SiginComponent  implements OnInit {

  constructor(private alerta:AlertController, private modal:ModalController, 
    private authService: AuthService, public photoService : FotService) { }

    public capturedPhoto: any;

  CerrarModal(){
    this.modal.dismiss()
  };

 async ConfirmarModal() {

  try {
    await this.authService.register(this.usuario.user_name, this.usuario.pass);
    this.usuario.foto = this.capturedPhoto;
    this.modal.dismiss(this.usuario);
  } catch (error) {
    console.error("Error during registration:", error);
    console.error("Error during login:", error);
    const alert = await this.alerta.create({
      header: 'Error',
      message: 'Usuario ya existe o contraseña muy corta.',
      buttons: ['OK']
    });

    await alert.present();
  }
  
  };
  
  usuario: user = {
    user_name: '',
    pass: '',
    foto: ''
  };

  async tomarFoto() {
    this.capturedPhoto = await this.photoService.addNewToGallery();
  }

  ngOnInit() {}

}
