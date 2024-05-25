import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { collection } from 'firebase/firestore';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss'],
})
export class BusquedaComponent  implements OnInit {

  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  Cards$ = collectionData(collection(this.fire, 'Cancion1')) as Observable<Card[]>;
  constructor(private alerta:AlertController, private readonly fire: Firestore) {}
  Canciones: Card[] = [];
  Filtradas: Card[] = [];
  searchTerm: string = '';

  ngOnInit() {
    this.Cards$.subscribe(cards => {
      this.Canciones = cards;
      this.Filtradas = cards;
      console.log(this.Canciones);
    });
  }

  filtrar(event: any) {
    const query = event.target.value.toLowerCase();
    this.Filtradas = this.Canciones.filter(card => {
      return card.nombre.toLowerCase().includes(query) || card.artista.toLowerCase().includes(query)
    })
  }


}
export interface Card {
  nombre: string;
  artista: string;
  url: string;
  id: string;
  //favoritos: boolean;
}
