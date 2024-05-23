import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private firestore: Firestore;

  constructor() { 
    const app = initializeApp(environment.firebase);
    this.firestore = getFirestore(app);
  }

  addAudioRecord(record: any): Promise<any> {
    const audioCollection = collection(this.firestore, 'Cancion1');
    return addDoc(audioCollection, record);
  }

}
