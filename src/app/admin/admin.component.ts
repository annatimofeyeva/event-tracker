import { Component, OnInit } from '@angular/core';
import { Exhibition } from '../exhibition.model';
import { ExhibitionService } from '../exhibition.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ExhibitionService]
})
export class AdminComponent implements OnInit {

  constructor(private exhibitionService: ExhibitionService) { }

  ngOnInit() {
  }

  submitForm(title: string, location: string, description: string, date: string) {
    var newExhibition: Exhibition = new Exhibition(title, location, description, date);
    this.exhibitionService.addExhibition(newExhibition);
  }

}
