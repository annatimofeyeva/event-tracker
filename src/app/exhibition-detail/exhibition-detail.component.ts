import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Exhibition } from '../exhibition.model';
import { ExhibitionService } from '../exhibition.service';

@Component({
  selector: 'app-exhibition-detail',
  templateUrl: './exhibition-detail.component.html',
  styleUrls: ['./exhibition-detail.component.css'],
  providers: [ExhibitionService]
})
export class ExhibitionDetailComponent implements OnInit {
  exhibitionId: string;
  exhibitionToDisplay;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private exhibitionService: ExhibitionService
  ) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.exhibitionId = urlParameters['id'];
    });
    this.exhibitionToDisplay = this.exhibitionService.getExhibitionById(this.exhibitionId);
  }

}
