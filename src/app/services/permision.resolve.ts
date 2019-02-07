import { AngularFireAuth } from 'angularfire2/auth/public_api';

import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot ,Router} from '@angular/router';
import { AngularFireDatabase } from "angularfire2/database";
import { AuthService } from "./auth.service";
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore'
import { Observable } from 'rxjs/Observable';

export interface user {user};
@Injectable()
export class PermisionResolve implements Resolve<any> {
    
    userDocument: AngularFirestoreDocument<any>;
    user: Observable<user>;

    constructor(private afs:AngularFirestore,private db: AngularFireDatabase, private afAuth: AngularFireAuth,private router: Router) {}
    

    resolve(route: ActivatedRouteSnapshot): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            this.userDocument =this.afs.collection('admin').doc('user');
            this.user=this.userDocument.valueChanges();
            this.user.subscribe(result => {
                this.afAuth.authState.subscribe(user=>{
                    var email = user ? user.email : '';
                    resolve(result.user == email );
                });
            });
        });
    }
}
