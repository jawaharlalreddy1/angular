import { Component, OnInit } from '@angular/core';
import { TitanService } from '../../services/titan/titan.service';
import { Tasks } from '../../models/tasks';
import {SharedDataService} from '../../services/shared-data.service';


@Component({
  selector: 'app-myseotasks',
  templateUrl: './myseotasks.component.html',
  styleUrls: ['./myseotasks.component.css']
})
export class MyseotasksComponent implements OnInit {

  tasks: any[];  
  user:string;
  constructor(private titanService: TitanService,
    private shareddataservice:SharedDataService) { }

  ngOnInit() {
    this.user = this.shareddataservice.userId; 
    this.titanService.getAssignedTasks(this.user,true).subscribe(tasks => {
      console.log(tasks);
      this.tasks = tasks.data;
      console.log(this.tasks);
    },
      err => {
        console.log('An error has occured while retreving data from Camunda');
      }
    )

  }
}
