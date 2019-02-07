import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase, AngularFireObject,AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import * as moment from 'moment';

export interface datosRegistro {
  Cedula:string,
  inicio:string,
  final:string,
  Materia:string,
  Fecha:string
}

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {
  id: any;
  private sub: any;
  fecha:Date;
  //RegistrosList: AngularFireList<any>;
  registrosBD: Observable<any[]>;
  registroProf=[];

      /*this.registroUser = this.registroUser.map(item =>{
        let temp = new Date(item.Año,item.Mes,item.Dia,item.Hora,item.Minutos);
        
        return {
          ...item,
          Date: moment(temp).format('dddd, DD  MMMM')
        }
      })*/


  constructor(
    private route: ActivatedRoute,
    db: AngularFireDatabase
    ) 
    { 
      this.registrosBD = db.list('RegistroE').valueChanges();
    }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    })
    
    this.registrosBD.subscribe(data =>{
      this.registroProf=[];
      data.forEach(item=>{
        let arr = Object.values(item)
        let reg = arr.filter((reg:datosRegistro)=>(reg.Cedula == this.id))
        this.registroProf.push(reg)
      })
    });
  
    this.fecha = new Date(2018,11,16,10,49)
  }


  insertionSort = arr => {
    const l = arr.length;
    let j, temp;

    for ( let i = 1; i < l; i++ ) {
        j = i;
        temp = arr[ i ];
        while ( j > 0 && arr[ j - 1 ] > temp ) {
            arr[ j ] = arr[ j - 1 ];
            j--;
        }
        arr[ j ] = temp;
    }
    return arr;
};

}
