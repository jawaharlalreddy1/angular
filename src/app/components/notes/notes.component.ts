import { Component, OnInit,Input } from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { TitanService } from '../../services/titan/titan.service';
import {Notes} from '../../models/common/notes';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  @Input() id;
  notes:any[];
  note:Notes ={
    enterpriseItemId:'',
    notes:'',
    addedBy:'',
    addedOn:null
  };
  constructor(public activeModal: NgbActiveModal,
    private titanService: TitanService) { }

  ngOnInit() {
    this.titanService.getNotes(this.id).subscribe(notesdata => {
      console.log(notesdata);  
      this.notes = notesdata.notes;     
    },
      err => {
        console.log('An error has occured while retreving data from Titan Seo');
      }
    )
  }

  addNotes(){

  }

}
