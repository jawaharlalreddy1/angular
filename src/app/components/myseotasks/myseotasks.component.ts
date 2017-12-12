import { Component, OnInit } from '@angular/core';
import { TitanService } from '../../services/titan/titan.service';
import { Tasks } from '../../models/tasks';
import {SharedDataService} from '../../services/shared-data.service';
import { NgProgress } from 'ngx-progressbar';


@Component({
  selector: 'app-myseotasks',
  templateUrl: './myseotasks.component.html',
  styleUrls: ['./myseotasks.component.css']
})
export class MyseotasksComponent implements OnInit {

  tasks: any[];  
  user:string;
  constructor(private titanService: TitanService,
    private shareddataservice:SharedDataService,
    public ngProgress: NgProgress) { }

  ngOnInit() {
    this.user = this.shareddataservice.userId; 
    this.ngProgress.start();
    this.titanService.getAssignedTasks(this.user,true,false).subscribe(tasks => {
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
