import { Component, OnInit } from '@angular/core';
import { ModalController} from '@ionic/angular';
import { Cancion } from '../sigin/cancion';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss'],
})
export class AgregarComponent  implements OnInit {

  constructor(private modal:ModalController) { }

  CerrarModal(){
    this.modal.dismiss()
  };

  ConfirmarModal() {
    this.modal.dismiss(this.song);
  }

  song: Cancion = {
    Nombre: '',
    audio: '',
    album: '',
    img_album: '',
    favoritos: false
  };

  ngOnInit() {}

}
