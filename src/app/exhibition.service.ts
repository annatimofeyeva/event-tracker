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

  updateExhibition(localUpdatedExhibition){
    var exhibitionEntryInFirebase = this.getExhibitionById(localUpdatedExhibition.$key);
    exhibitionEntryInFirebase.update({title: localUpdatedExhibition.title,
                                location: localUpdatedExhibition.location,
                                description: localUpdatedExhibition.description,
                                date: localUpdatedExhibition.date
                              });
  }

  deleteExhibition(localExhibitionToDelete){
       var exhibitionEntryInFirebase = this.getExhibitionById(localExhibitionToDelete.$key);
     exhibitionEntryInFirebase.remove();
   }
}
