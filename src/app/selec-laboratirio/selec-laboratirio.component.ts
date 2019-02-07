import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';

import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";
import { Observable } from 'rxjs/Observable';
import {AngularFireDatabase} from 'angularfire2/database';
import {Materias_T} from './materias';

@Component({
  selector: 'app-selec-laboratirio',
  templateUrl: './selec-laboratirio.component.html',
  styleUrls: ['./selec-laboratirio.component.css']
})
export class SelecLaboratirioComponent implements OnInit {

  c_d:boolean;
  l:boolean;


  Materia103:Materias_T[] =[];
  Materia104:Materias_T[] =[];

  materias: Observable <any[]>;

  constructor(public Auth: AuthService, public router: Router, public afs:AngularFirestore,db: AngularFireDatabase) {
    this.materias = db.list('Materias').valueChanges();
    this.materias.subscribe(info =>{
      info.forEach(materia=>{
        if(materia.Laboratorio == 'ER103'){
          this.Materia103.push(new Materias_T(materia.Docente,materia.Laboratorio,materia.dia,materia.final,materia.inicio,materia.nombre))
        }else{
          this.Materia104.push(new Materias_T(materia.Docente,materia.Laboratorio,materia.dia,materia.final,materia.inicio,materia.nombre))

        }
      })
    });
    this.c_d = true;
    this.l = false;
    afs.firestore.settings({ timestampsInSnapshots: true });
   }

   ngOnInit() {
  }
  c_decente(){
    this.c_d = true;
    this.l = false;
  }
  lab(){
    this.c_d = false;
    this.l = true;
  }

}
