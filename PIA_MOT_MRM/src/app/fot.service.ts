import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource} from '@capacitor/camera';

@Injectable({
  providedIn: 'root'
})
export class FotService {

  constructor() { }

  public async addNewToGallery() {    
    const capturedPhoto = await Camera.getPhoto({      

    resultType: CameraResultType.Uri,      
    source: CameraSource.Camera,
    quality: 100    
    });
    return capturedPhoto;
  }

   
}
