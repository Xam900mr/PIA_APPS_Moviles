import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Firestore, collectionData} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { collection, doc, deleteDoc } from 'firebase/firestore';
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  Cards$! : /*collectionData(collection(this.fire, 'Cancion1')) as */Observable<Card[]>;
  constructor(private alerta:AlertController, private readonly fire: Firestore) {}
  Canciones: Card[] = [];

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;

    const collectionRef = collection(this.fire, 'Cancion1');
    this.Cards$ = collectionData(collectionRef, {idField: 'id'}) as Observable<Card[]>;
    
    this.Cards$.subscribe(cards => {
      this.Canciones = cards;
      console.log(this.Canciones);
    });
  }

  async deleteCancion(BorrarID: string) {
    try {
      const docRef = doc(this.fire, `Cancion1/${BorrarID}`);
      await deleteDoc(docRef);
      this.Canciones = this.Canciones.filter(card => card.id !== BorrarID);
      console.log('Cancion borrada');
    } catch (error) {
      console.error('Error borrando el documento: ', error);
    }
  }
}

export interface Card {
  nombre: string;
  artista: string;
  url: string;
  id: string;
  favoritos: boolean;
}

