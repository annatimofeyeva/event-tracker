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

  // getExhibitionById(exhibitionId: number){
  //   for (var i = 0; i <= EXHIBITIONS.length - 1; i++) {
  //     if (EXHIBITIONS[i].id === exhibitionId) {
  //       return EXHIBITIONS[i];
  //     }
  //   }
  // }
}
