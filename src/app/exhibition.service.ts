import { Injectable } from '@angular/core';
import { Exhibition } from './exhibition.model';
import { EXHIBITIONS } from './mock-exhibition';

@Injectable()
export class ExhibitionService {

  constructor() { }

  getExhibition() {
    return EXHIBITIONS;
  }
}
