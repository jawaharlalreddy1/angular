import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TitanService } from '../../services/titan/titan.service';
import { Notes } from '../../models/common/notes';
import { NotesRes } from '../../models/common/notesRes';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  @Input() id;
  @Input() history;
  notes: Notes[];
  constructor(public activeModal: NgbActiveModal,
    public titanService: TitanService) { }
  note: any[] = [];
  ngOnInit() {
    console.log('notes'+this.history);
    this.titanService.getNotes(this.id).subscribe(notesdata => {
      this.notes = notesdata.notes;
      if (this.notes === undefined) {
        this.notes = this.note;
      }
    },
      err => {
        console.log('An error has occured while retreving data from Titan Seo');
      }
    )
  }

  addNote(note: Notes) {
    note.enterpriseItemId = this.id;
    note.addedBy = 'z990758';
    note.addedOn = new Date();
    console.log(note);
    this.titanService.addNote(note).subscribe(res => {
      console.log(res);
      this.notes.push(note)
    }

    )

  }


}
