import { Component, OnInit } from '@angular/core';
import { Exhibition } from '../exhibition.model';
import { Router } from '@angular/router';
import { ExhibitionService } from '../exhibition.service';

@Component({
  selector: 'app-exhibitions',
  templateUrl: './exhibitions.component.html',
  styleUrls: ['./exhibitions.component.css'],
  providers: [ExhibitionService]
})

export class ExhibitionsComponent implements OnInit {
  exhibitions: Exhibition[];

  constructor(private router: Router, private exhibitionService: ExhibitionService){}

  ngOnInit(){
    this.exhibitions = this.exhibitionService.getExhibition();
  }


    goToDetailPage(clickedExhibition: Exhibition) {
      this.router.navigate(['exhibitions', clickedExhibition.id]);
    };

}
