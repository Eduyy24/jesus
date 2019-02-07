import { Observer } from 'rxjs/Rx';
import { any } from 'codelyzer/util/function';

import { Injectable } from '@angular/core';
import { Storage } from './storage';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';



@Injectable()
export class StorageService {

  constructor(
    private db: AngularFirestore
  ) {}

  
  public errort = false;
 
  


  deleteUpload(upload: Storage) {
    //this.deleteFileStorage(upload.name)
  }

  // Executes the file uploading to firebase https://firebase.google.com/docs/storage/web/upload-files
   pushUpload(upload: Storage, rute: string) {
    return new Observable(observer=>{
      const storageRef = firebase.storage().ref();
      const uploadTask = storageRef.child(`${rute}/${upload.file.name}`).put(upload.file);
  
      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot) =>  {
          upload.progress = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100;
        },
        (error) => {
          // upload failed
          this.errort = error? true : false;
          observer.next(error);
          observer.complete();
        },
        () => {
          // upload success
          var y;
          upload.url = uploadTask.snapshot.downloadURL
          
          //upload.name = upload.file.name
          //upload.tipo=tipo;
          //this.saveFileData(upload,subrute)
  
          observer.next(upload.url);
          observer.complete();
        }
      );
    })
  
  }//fin push





  // Firebase files must have unique names in their respective storage dir
  // So the name serves as a unique key
  /*private deleteFileStorage(name:string) {
    const storageRef = firebase.storage().ref();
    storageRef.child(`${this.basePath}/${name}`).delete()
  }*/

}
