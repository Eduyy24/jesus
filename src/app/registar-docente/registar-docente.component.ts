import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireObject,AngularFireList } from 'angularfire2/database';
import { StorageService } from '../services/storage.service';
import { Storage } from '../services/storage';
@Component({
  selector: 'app-registar-docente',
  templateUrl: './registar-docente.component.html',
  styleUrls: ['./registar-docente.component.css']
})
export class RegistarDocenteComponent implements OnInit {
  color = 'primary';
  mode1 = 'determinate';


  Docentes: AngularFireList<any>;
  nombre;
  apellido;
  correo;
  celular;
  ingeniero;
  cedula;

  selectedFiles: FileList;
  currentUpload1: Storage;
  foto1 = false;

  constructor(db: AngularFireDatabase,public upSvc: StorageService,) {
    //this.items = db.list('items').valueChanges();
    this.Docentes = db.list('Docentes');
    this.nombre='';
    this.apellido='';
    this.correo = '';
    this.celular = '';
    this.ingeniero = '';
    this.cedula = '';
    
  }

  ngOnInit() {
  }
  // Imagenes
  detectFiles1(event) {
    this.selectedFiles = event.target.files;
    let file1 = this.selectedFiles.item(0)
    this.currentUpload1 = new Storage(file1);
    this.foto1 = this.currentUpload1 ? true : false;
  }

  guardar(){
    this.foto1 ?
      this.upSvc.pushUpload(this.currentUpload1,'Docentes')
        .subscribe(info=>{
          this.Docentes.push({
            Nombre: this.nombre,
            Apellido:this.apellido,
            Ingeniero:this.ingeniero,
            Correo: this.correo,
            Celular: this.celular,
            Foto: info,
            Cedula:this.cedula
          });
          this.nombre = '';
          this.apellido = '';
          this.correo = '';
          this.celular = '';
          this.ingeniero = '';
          this.cedula = '';
        }): console.log('Error');

  }

}
