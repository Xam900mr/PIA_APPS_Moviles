import { Injectable } from '@angular/core';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import { DatabaseService } from './database.service';

@Injectable({
  providedIn: 'root'
})
export class AudioUploadService { 

  private storage = getStorage(initializeApp(environment.firebase))

  constructor( private dbService: DatabaseService) { }

  uploadAudio(file:File, filepath:string, nombre: string, artista: string): Promise <string> {
    return new Promise((resolve, reject) => {
      const storageRef = ref(this.storage, filepath);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        'state_changed',
        (snapshot) => {

        },
        (error) => {
          reject(error);
        },
        async () => {
          try {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            const record = { url: downloadURL, nombre: nombre, artista: artista, createdAt: new Date() };
            await this.dbService.addAudioRecord(record);
            resolve(downloadURL);
          } catch (error) {
            reject(error);
          }
        }
        
      );
    });
  }

}
