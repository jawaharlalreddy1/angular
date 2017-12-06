import { CamundaService } from './../../services/camunda/camunda.service';
import { Component, OnInit } from '@angular/core';
import { TitanService } from '../../services/titan/titan.service';
import { Tasks } from '../../models/tasks';

@Component({
  selector: 'app-seo-worklist',
  templateUrl: './seo-worklist.component.html',
  styleUrls: ['./seo-worklist.component.css']
})
export class SeoWorklistComponent implements OnInit {
  tasks:Tasks[];

  user: string = 'demo';
  constructor(private camundaservice: CamundaService,
  private titanService:TitanService) { }

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

  claim(taskId:string ,userId:string,task:Tasks){
    this.camundaservice.claimTask(userId ,taskId).subscribe(res => {
      console.log(res);
      for(let i = 0;i < this.tasks.length;i++){
        if(task == this.tasks[i]){
          this.tasks.splice(i, 1);
          console.log('data deleted');
        }
      }
    }

    )
  }

}
