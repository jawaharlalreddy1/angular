import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TitanService } from '../../services/titan/titan.service';

@Component({
  selector: 'app-task-history',
  templateUrl: './task-history.component.html',
  styleUrls: ['./task-history.component.css']
})
export class TaskHistoryComponent implements OnInit {
  @Input() id;
  taskhistory: any[] = [];
  constructor(public activeModal: NgbActiveModal,
    public titanService: TitanService) { }

  ngOnInit() {
    this.titanService.getTaskHistory(this.id).subscribe(taskdata => {
     // this.notes = notesdata.notes;
     this.taskhistory = taskdata.taskHistory;
console.log(this.taskhistory)
    },
      err => {
        console.log('An error has occured while retreving data from Titan Seo');
      }
    )
  }

}
