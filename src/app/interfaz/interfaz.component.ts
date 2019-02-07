import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';

import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";
import { Observable } from 'rxjs/Observable';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';

@Component({
  selector: 'app-interfaz',
  templateUrl: './interfaz.component.html',
  styleUrls: ['./interfaz.component.css']
})
export class InterfazComponent implements OnInit {

  c_d:boolean;
  l:boolean;
  D:boolean;
  M:boolean;
  s:boolean;

  docentes: Observable<any[]>;

  constructor(public Auth: AuthService, public router: Router,db: AngularFireDatabase) {
    this.docentes = db.list('Docentes').valueChanges();
    this.c_d = true;
    this.l = false;
    this.D = false;
    this.M = false;
    this.s = false;
    //afs.firestore.settings({ timestampsInSnapshots: true });
   }

  ngOnInit() {
  }

  c_decente(){
    this.c_d = true;
    this.l = false;
    this.D = false;
    this.M = false;
    this.s = false;
  }
  lab(){
    this.c_d = false;
    this.l = true;
    this.D = false;
    this.M = false;
    this.s = false;
  }

  Rdoc(){
    this.c_d = false;
    this.l = false;
    this.D = true;
    this.M = false;
    this.s = false;
  }

  Rmate(){
    this.c_d = false;
    this.l = false;
    this.D = false;
    this.M = true;
    this.s = false;
  }

  logout() {
    this.Auth.signOut();
    // this.router.navigate(['/']);
  }
}



