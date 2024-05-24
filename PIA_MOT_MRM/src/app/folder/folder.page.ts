import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { collection } from 'firebase/firestore';
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  Cards$ = collectionData(collection(this.fire, 'Cancion1')) as Observable<Card[]>;
  constructor(private alerta:AlertController, private readonly fire: Firestore) {}
  
  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

 
  }

export interface Card {
  nombre: string;
  artista: string;
  url: string;
  id: string;
  favoritos: boolean;
}

