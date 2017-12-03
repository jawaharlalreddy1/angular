import { Component, OnInit,Input } from '@angular/core';
import {NgbModal,} from '@ng-bootstrap/ng-bootstrap';
import { NotesComponent } from '../notes/notes.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbarsecondary',
  templateUrl: './navbarsecondary.component.html',
  styleUrls: ['./navbarsecondary.component.css']
})
export class NavbarsecondaryComponent implements OnInit {
//@Input() productinstanceid;
productInstanceId: number;
taskId: string;
enterpriseItemId:string;
  constructor(private modalService: NgbModal,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.productInstanceId = this.route.snapshot.params['pid'];
    this.taskId = this.route.snapshot.params['id'];
    this.enterpriseItemId = this.route.snapshot.params['enterpriseItemId'];
  }

  open() {
    const modalRef = this.modalService.open(NotesComponent,{ size: 'lg',backdrop: 'static' });
    modalRef.componentInstance.id = this.enterpriseItemId;
  //  console.log('text'+this.productinstanceid);
  }

}
