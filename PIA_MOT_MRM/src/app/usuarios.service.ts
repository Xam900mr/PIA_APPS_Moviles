import { Injectable } from '@angular/core';
import { user } from './user.model';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor() { }

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
