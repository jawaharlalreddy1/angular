import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, } from '@ng-bootstrap/ng-bootstrap';
import { NotesComponent } from '../notes/notes.component';
import { Router, ActivatedRoute } from '@angular/router';
import { TaskHistoryComponent } from '../task-history/task-history.component';
import { CamundaService } from './../../services/camunda/camunda.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-navbarsecondary',
  templateUrl: './navbarsecondary.component.html',
  styleUrls: ['./navbarsecondary.component.css']
})
export class NavbarsecondaryComponent implements OnInit {  
  productInstanceId: number;
  taskId: string;
  enterpriseItemId: string;
  history:boolean;
  constructor(private modalService: NgbModal,
    private router: Router,
    private route: ActivatedRoute,
    private camundaservice: CamundaService,
    private flashMessagesService: FlashMessagesService) { }

  ngOnInit() {
    this.productInstanceId = this.route.snapshot.params['pid'];
    this.taskId = this.route.snapshot.params['id'];
    this.enterpriseItemId = this.route.snapshot.params['enterpriseItemId'];
    this.history = this.route.snapshot.params['history'];
  }

  openNotes() {
    const modalRef = this.modalService.open(NotesComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.id = this.enterpriseItemId;
    modalRef.componentInstance.history = this.history;
    //  console.log('text'+this.productinstanceid);
  }
  openTaskHistory() {
    const modalRef = this.modalService.open(TaskHistoryComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.id = this.enterpriseItemId;
    //  console.log('text'+this.productinstanceid);
  }

  completeTask() {
    this.camundaservice.completeTask(this.taskId).subscribe(res => {
      console.log(res);
      this.flashMessagesService.show('Task has been completed', {
        cssClass: 'alert-success', timeout: 4000
      });
      this.router.navigate(['/myseo']);
    })
  }

}


