import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import {AngularFireDatabase} from 'angularfire2/database';
import {AngularFireList} from 'angularfire2/database';
import { AngularFireStorage } from 'angularfire2/storage';

import { MensualityModel } from '../models/mensuality.model';

@Injectable({
  providedIn: 'root'
})
export class MensualityService {
  mensualityList: AngularFireList<any>;

  constructor(private firebase: AngularFireDatabase, private storage: AngularFireStorage) { }

  getMensuality() {
    return this.firebase.list('mensualities').snapshotChanges().pipe(
      map(action => action.map(data => {
        return {
          key: data.payload.key,
          ...data.payload.val()
        };
      })));
  }

  createMensuality(mensuality: MensualityModel) {
    this.firebase.list('mensualities').push(mensuality);
  }
}
