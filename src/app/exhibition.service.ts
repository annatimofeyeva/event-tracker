import { Injectable } from '@angular/core';
import { Exhibition } from './exhibition.model';
import { EXHIBITIONS } from './mock-exhibition';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ExhibitionService {
   exhibitions: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.exhibitions = database.list('exhibitions');
   }

  getExhibition() {
    return this.exhibitions;
  }

  addExhibition(newExhibition: Exhibition) {
    this.exhibitions.push(newExhibition);
  }

  getExhibitionById(exhibitionId: string){
    return this.database.object('exhibitions/' + exhibitionId);
  }
}
