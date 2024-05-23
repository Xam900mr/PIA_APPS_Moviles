import { Component, OnInit, ViewChild, inject} from '@angular/core';
import { ModalController} from '@ionic/angular';
import { cancion } from '../music.model';
import { NgForm } from '@angular/forms';
import { Firestore } from '@angular/fire/firestore';
import { addDoc, collection } from 'firebase/firestore';
import { AudioUploadService } from '../audio-upload.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss'],
})
export class AgregarComponent  implements OnInit {

  @ViewChild ("agregarCancion") cancionForm: any;

  firestore: Firestore= inject(Firestore);
  selectedFile: File | null = null;

  constructor(private modal:ModalController, private subidaaudio: AudioUploadService) { }

 /* //Subir Archivo a firebase
  async onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const filePath = `audio/${new Date().getTime()}_${file.name}`;
      try {
        const downloadURL = await this.subidaaudio.uploadAudio(file, filePath, this.cancionForm.value.nombre, this.cancionForm.value.artista);
        console.log('File available at', downloadURL);
      } catch (error) {
        console.error('Error uploading file', error);
      }
    }
  }*/

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedFile = file;
    }
  }

  CerrarModal(){
    this.modal.dismiss()
  };

  async Guardar() {
      if (this.selectedFile) {
        const filePath = `audio/${new Date().getTime()}_${this.selectedFile.name}`;
        try {
          const downloadURL = await this.subidaaudio.uploadAudio(
            this.selectedFile,
            filePath,
            this.cancionForm.value.nombre,
            this.cancionForm.value.artista
          );
          console.log('File available at', downloadURL);
        } catch (error) {
          console.error('Error uploading file', error);
        }
      }
    
    /*const colect= collection(this.firestore, 'Cancion1');

    addDoc(colect, { 
      'nombre': this.cancionForm.value.nombre,
      'artista': this.cancionForm.value.artista
    });*/
  }

  ConfirmarModal() {
    this.Guardar();
    this.modal.dismiss(this.song);
  }

  song: cancion = {
    nombre: '',
    audio: '',
    artista: '',
    foto: '',
  };

  ngOnInit() {}

}
