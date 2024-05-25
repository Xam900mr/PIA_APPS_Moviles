import { Component, OnInit, ViewChild, inject} from '@angular/core';
import { ModalController} from '@ionic/angular';
import { Firestore } from '@angular/fire/firestore';
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
  }

  ConfirmarModal() {
    this.Guardar();
    this.modal.dismiss();
  }


  ngOnInit() {}

}
