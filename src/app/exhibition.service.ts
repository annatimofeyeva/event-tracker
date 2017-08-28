import { Injectable } from '@angular/core';
import { Exhibition } from './exhibition.model';
import { EXHIBITIONS } from './mock-exhibition';

@Injectable()
export class ExhibitionService {

  constructor() { }

  getExhibition() {
    return EXHIBITIONS;
  }

  getExhibitionById(exhibitionId: number){
    for (var i = 0; i <= EXHIBITIONS.length - 1; i++) {
      if (EXHIBITIONS[i].id === exhibitionId) {
        return EXHIBITIONS[i];
      }
    }
  }
}
