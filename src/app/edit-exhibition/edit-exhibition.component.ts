import { Component, OnInit, Input } from '@angular/core';
import { Exhibition } from '../exhibition.model';
import { ExhibitionService } from '../exhibition.service';


@Component({
  selector: 'app-edit-exhibition',
  templateUrl: './edit-exhibition.component.html',
  styleUrls: ['./edit-exhibition.component.css'],
  providers: [ExhibitionService]
})
export class EditExhibitionComponent implements OnInit {
@Input() selectedExhibition;

  constructor(private exhibitionService: ExhibitionService) { }

  ngOnInit() {
  }

  beginUpdatingExhibition(exhibitionToUpdate){
      this.exhibitionService.updateExhibition(exhibitionToUpdate);
    }

    beginDeletingExhibition(exhibitionToDelete){
     if(confirm("Are you sure you want to delete this item?")){
          this.exhibitionService.deleteExhibition(exhibitionToDelete);
        }
   }

}
