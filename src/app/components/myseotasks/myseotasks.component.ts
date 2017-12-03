import { Component, OnInit } from '@angular/core';
import { TitanService } from '../../services/titan/titan.service';
import { Tasks } from '../../models/tasks';


@Component({
  selector: 'app-myseotasks',
  templateUrl: './myseotasks.component.html',
  styleUrls: ['./myseotasks.component.css']
})
export class MyseotasksComponent implements OnInit {

  tasks: any[];
  user: string = 'demo';

  constructor(private titanService: TitanService) { }

  ngOnInit() {
    this.titanService.getAssignedTasks(this.user).subscribe(tasks => {
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
