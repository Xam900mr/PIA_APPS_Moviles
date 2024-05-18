import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { user } from '../user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {

  constructor(private modal:ModalController) {}

  ConfirmarModal() {
    this.modal.dismiss(this.usuario);
  }

    usuario: user = {
      email: '',
      user_name: '',
      pass: ''
    };

  ngOnInit() {}

}
