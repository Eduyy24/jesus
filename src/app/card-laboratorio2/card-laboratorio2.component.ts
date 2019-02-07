import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Materias_T} from '../selec-laboratirio/materias';
import {Observable} from 'rxjs/Observable';
import {AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'app-card-laboratorio2',
  templateUrl: './card-laboratorio2.component.html',
  styleUrls: ['./card-laboratorio2.component.css']
})
export class CardLaboratorio2Component implements OnInit {

  id: any;
  private sub: any;
  materias: Observable <any[]>;

  Materia:Materias_T[] =[];

  constructor(private route: ActivatedRoute,public db: AngularFireDatabase,) {

  }

  lu6='';lu7='';lu8='';lu9='';lu10='';lu11='';lu12='';lu13='';lu14='';lu15='';lu16='';lu17='';lu18='';lu19='';lu20='';lu21='';
  ma6='';ma7='';ma8='';ma9='';ma10='';ma11='';ma12='';ma13='';ma14='';ma15='';ma16='';ma17='';ma18='';ma19='';ma20='';ma21='';
  mi6='';mi7='';mi8='';mi9='';mi10='';mi11='';mi12='';mi13='';mi14='';mi15='';mi16='';mi17='';mi18='';mi19='';mi20='';mi21='';
  ju6='';ju7='';ju8='';ju9='';ju10='';ju11='';ju12='';ju13='';ju14='';ju15='';ju16='';ju17='';ju18='';ju19='';ju20='';ju21='';
  vi6='';vi7='';vi8='';vi9='';vi10='';vi11='';vi12='';vi13='';vi14='';vi15='';vi16='';vi17='';vi18='';vi19='';vi20='';vi21='';
  sa6='';sa7='';sa8='';sa9='';sa10='';sa11='';sa12='';sa13='';sa14='';sa15='';sa16='';sa17='';sa18='';sa19='';sa20='';sa21='';
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];

      this.materias = this.db.list('Materias').valueChanges();
      this.materias.subscribe(materia =>{
        materia.forEach(info=>{
          if(info.Docente == this.id){
            //this.Materia.push(new Materias_T(materia.Docente,materia.Laboratorio,materia.dia,materia.final,materia.inicio,materia.nombre))
            let ini = info.inicio.split(':');
            let fin = info.final.split(':');
            switch(info.dia){
              case 'Lunes':
                for (let i=ini[0];i<fin[0];i++){
                  i=Number(i);
                  switch (i){
                    case 6:
                      this.lu6 = info.nombre;
                      break;
                    case 7:
                      this.lu7 = info.nombre;
                      break;
                    case 8:
                      this.lu8 = info.nombre;
                      break;
                    case 9:
                      this.lu9 = info.nombre;
                      break;
                    case 10:
                      this.lu10 = info.nombre;
                      break;
                    case 11:
                      this.lu11 = info.nombre;
                      break;
                    case 12:
                      this.lu12 = info.nombre;
                      break;
                    case 13:
                      this.lu13 = info.nombre;
                      break;
                    case 14:
                      this.lu14 = info.nombre;
                      break;
                    case 15:
                      this.lu15 = info.nombre;
                      break;
                    case 16:
                      this.lu16 = info.nombre;
                      break;
                    case 17:
                      this.lu17 = info.nombre;
                      break;
                    case 18:
                      this.lu18 = info.nombre;
                      break;
                    case 19:
                      this.lu19 = info.nombre;
                      break;
                    case 20:
                      this.lu20 = info.nombre;
                      break;
                    case 21:
                      this.lu21 = info.nombre;
                      break;
                  }
                }
                break;
              case 'Martes':
                for (let i=ini[0];i<fin[0];i++){
                  i=Number(i);
                  switch (i){
                    case 6:
                      this.ma6 = info.nombre;
                      break;
                    case 7:
                      this.ma7 = info.nombre;
                      break;
                    case 8:
                      this.ma8 = info.nombre;
                      break;
                    case 9:
                      this.ma9 = info.nombre;
                      break;
                    case 10:
                      this.ma10 = info.nombre;
                      break;
                    case 11:
                      this.ma11 = info.nombre;
                      break;
                    case 12:
                      this.ma12 = info.nombre;
                      break;
                    case 13:
                      this.ma13 = info.nombre;
                      break;
                    case 14:
                      this.ma14 = info.nombre;
                      break;
                    case 15:
                      this.ma15 = info.nombre;
                      break;
                    case 16:
                      this.ma16 = info.nombre;
                      break;
                    case 17:
                      this.ma17 = info.nombre;
                      break;
                    case 18:
                      this.ma18 = info.nombre;
                      break;
                    case 19:
                      this.ma19 = info.nombre;
                      break;
                    case 20:
                      this.ma20 = info.nombre;
                      break;
                    case 21:
                      this.ma21 = info.nombre;
                      break;
                  }
                }
                break;
              case 'Miercoles':
                for (let i=ini[0];i<fin[0];i++){
                  i=Number(i);
                  switch (i){
                    case 6:
                      this.mi6 = info.nombre;
                      break;
                    case 7:
                      this.mi7 = info.nombre;
                      break;
                    case 8:
                      this.mi8 = info.nombre;
                      break;
                    case 9:
                      this.mi9 = info.nombre;
                      break;
                    case 10:
                      this.mi10 = info.nombre;
                      break;
                    case 11:
                      this.mi11 = info.nombre;
                      break;
                    case 12:
                      this.mi12 = info.nombre;
                      break;
                    case 13:
                      this.mi13 = info.nombre;
                      break;
                    case 14:
                      this.mi14 = info.nombre;
                      break;
                    case 15:
                      this.mi15 = info.nombre;
                      break;
                    case 16:
                      this.mi16 = info.nombre;
                      break;
                    case 17:
                      this.mi17 = info.nombre;
                      break;
                    case 18:
                      this.mi18 = info.nombre;
                      break;
                    case 19:
                      this.mi19 = info.nombre;
                      break;
                    case 20:
                      this.mi20 = info.nombre;
                      break;
                    case 21:
                      this.mi21 = info.nombre;
                      break;
                  }
                }
                break;
              case 'Jueves':
                for (let i=ini[0];i<fin[0];i++){
                  i=Number(i);
                  switch (i){
                    case 6:
                      this.ju6 = info.nombre;
                      break;
                    case 7:
                      this.ju7 = info.nombre;
                      break;
                    case 8:
                      this.ju8 = info.nombre;
                      break;
                    case 9:
                      this.ju9 = info.nombre;
                      break;
                    case 10:
                      this.ju10 = info.nombre;
                      break;
                    case 11:
                      this.ju11 = info.nombre;
                      break;
                    case 12:
                      this.ju12 = info.nombre;
                      break;
                    case 13:
                      this.ju13 = info.nombre;
                      break;
                    case 14:
                      this.ju14 = info.nombre;
                      break;
                    case 15:
                      this.ju15 = info.nombre;
                      break;
                    case 16:
                      this.ju16 = info.nombre;
                      break;
                    case 17:
                      this.ju17 = info.nombre;
                      break;
                    case 18:
                      this.ju18 = info.nombre;
                      break;
                    case 19:
                      this.ju19 = info.nombre;
                      break;
                    case 20:
                      this.ju20 = info.nombre;
                      break;
                    case 21:
                      this.ju21 = info.nombre;
                      break;
                  }
                }
                break;
              case 'Viernes':
                for (let i=ini[0];i<fin[0];i++){
                  i=Number(i);
                  switch (i){
                    case 6:
                      this.vi6 = info.nombre;
                      break;
                    case 7:
                      this.vi7 = info.nombre;
                      break;
                    case 8:
                      this.vi8 = info.nombre;
                      break;
                    case 9:
                      this.vi9 = info.nombre;
                      break;
                    case 10:
                      this.vi10 = info.nombre;
                      break;
                    case 11:
                      this.vi11 = info.nombre;
                      break;
                    case 12:
                      this.vi12 = info.nombre;
                      break;
                    case 13:
                      this.vi13 = info.nombre;
                      break;
                    case 14:
                      this.vi14 = info.nombre;
                      break;
                    case 15:
                      this.vi15 = info.nombre;
                      break;
                    case 16:
                      this.vi16 = info.nombre;
                      break;
                    case 17:
                      this.vi17 = info.nombre;
                      break;
                    case 18:
                      this.vi18 = info.nombre;
                      break;
                    case 19:
                      this.vi19 = info.nombre;
                      break;
                    case 20:
                      this.vi20 = info.nombre;
                      break;
                    case 21:
                      this.vi21 = info.nombre;
                      break;
                  }
                }
                break;
              case 'Sabado':
                for (let i=ini[0];i<fin[0];i++){
                  i=Number(i);
                  switch (i){
                    case 6:
                      this.sa6 = info.nombre;
                      break;
                    case 7:
                      this.sa7 = info.nombre;
                      break;
                    case 8:
                      this.sa8 = info.nombre;
                      break;
                    case 9:
                      this.sa9 = info.nombre;
                      break;
                    case 10:
                      this.sa10 = info.nombre;
                      break;
                    case 11:
                      this.sa11 = info.nombre;
                      break;
                    case 12:
                      this.sa12 = info.nombre;
                      break;
                    case 13:
                      this.sa13 = info.nombre;
                      break;
                    case 14:
                      this.sa14 = info.nombre;
                      break;
                    case 15:
                      this.sa15 = info.nombre;
                      break;
                    case 16:
                      this.sa16 = info.nombre;
                      break;
                    case 17:
                      this.sa17 = info.nombre;
                      break;
                    case 18:
                      this.sa18 = info.nombre;
                      break;
                    case 19:
                      this.sa19 = info.nombre;
                      break;
                    case 20:
                      this.sa20 = info.nombre;
                      break;
                    case 21:
                      this.sa21 = info.nombre;
                      break;
                  }
                }
                break;
            }
          }
        })
      });
    });

  }


}
