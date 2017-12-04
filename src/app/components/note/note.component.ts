import { Component, OnInit, Input } from '@angular/core';
import { Notes } from '../../models/common/notes';
import { TitanService } from '../../services/titan/titan.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  @Input('note') note: Notes;  
  constructor(public titanService: TitanService) { }

  ngOnInit() {
  }

}
