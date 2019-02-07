import { Component, OnInit, Input, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from "@angular/router";
import {AngularFireDatabase} from 'angularfire2/database';
import {Materias_T} from '../selec-laboratirio/materias';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-card-profesores',
  templateUrl: './card-profesores.component.html',
  styleUrls: ['./card-profesores.component.css']
})
export class CardProfesoresComponent implements OnInit {

  @Input() profesor;
  // @Input() PROFESOR;



  constructor(private router: Router,public dialog: MatDialog) {

  }

  ngOnInit() {
  }

  view(){
    this.router.navigate(['/horario',this.profesor.Nombre]);
  }

  viewReporte(){
    this.router.navigate(['/reporte',this.profesor.Cedula]);
  }
}

@Component({
  selector: 'dialog-horario',
  templateUrl: 'dialog-horario.html',
})
export class DialogHorario {

  constructor(
    public dialogRef: MatDialogRef<DialogHorario>,
    @Inject(MAT_DIALOG_DATA) public data) {}


}
