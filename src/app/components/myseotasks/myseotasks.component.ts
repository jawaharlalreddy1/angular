
import { Component, OnInit } from '@angular/core';
import { TitanService } from '../../services/titan/titan.service';
import { CamundaService } from './../../services/camunda/camunda.service';
import { Tasks } from '../../models/tasks';
import { SharedDataService } from '../../services/shared-data.service';
import { NgProgress } from 'ngx-progressbar';


@Component({
  selector: 'app-myseotasks',
  templateUrl: './myseotasks.component.html',
  styleUrls: ['./myseotasks.component.css']
})
export class MyseotasksComponent implements OnInit {

  tasks: any[];
  user: string;

  p: number;
  itemsPerPage: any;
  countOfPages: any;
  page: any;

  constructor(private titanService: TitanService,
    private shareddataservice: SharedDataService,
    public ngProgress: NgProgress,
    public camundaService: CamundaService) {
    this.p = 1; this.itemsPerPage = 5;
    this.camundaService.countTask().subscribe(totalcount => {
    this.countOfPages = (JSON.parse(JSON.stringify(totalcount)).count);
    })
  }

  ngOnInit() {
    this.pageChange(this.p)
  }

  public pageChange(even: any): void {
    if (even == 1)
    this.page = 1; else
    this.page = (even - 1) * this.itemsPerPage + 1;
    this.p = even;
    this.user = this.shareddataservice.userId;
    this.ngProgress.start();
    this.titanService.getAssignedTasksByPage(this.user, false, false, this.page, this.itemsPerPage).subscribe(tasks => {
    console.log(tasks);
    this.tasks = tasks.data;
    console.log(this.tasks);
    this.ngProgress.done();
    },
      err => {
      console.log('An error has occured while retreving data from Camunda');
      }
    )
  }
}
