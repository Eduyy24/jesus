import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireObject,AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-registrar-materias',
  templateUrl: './registrar-materias.component.html',
  styleUrls: ['./registrar-materias.component.css']
})
export class RegistrarMateriasComponent implements OnInit {
  materias: AngularFireList<any>;
  docentes: Observable<any[]>;
  nomDoc;
  nomLab;
  nombre;
  dia;
  inicio;
  final;
  Null='';

  constructor(db: AngularFireDatabase) {
    this.materias = db.list('Materias');
    this.docentes = db.list('Docentes').valueChanges();
    this.docentes.subscribe();
    this.nombre = '';
    this.dia = '';
    this.inicio = '';
    this.final = '';
    this.nomDoc = '';
    this.nomLab = '';
    this.Null='';

  }

  ngOnInit() {
  }
  guardar(){
    this.materias.push({
      nombre: this.nombre,
      dia:this.dia,
      inicio: this.inicio,
      final: this.final,
      Docente: this.nomDoc,
      Laboratorio: this.nomLab
    });

    this.nombre = '';
    this.dia = '';
    this.inicio = '';
    this.final = '';
    this.nomDoc = '';
    this.nomLab = '';
  }
}
