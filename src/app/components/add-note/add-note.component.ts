import { Notes } from './../../models/common/notes';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {
  @Output() noteAdded = new EventEmitter<Notes>();
note:string;
  constructor() { }

  ngOnInit() {
  }
  addNotes(){
    this.noteAdded.emit({ notes: this.note,hide: false});
    this.note = null;
  }

}
