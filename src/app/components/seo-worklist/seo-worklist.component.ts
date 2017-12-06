import { CamundaService } from './../../services/camunda/camunda.service';
import { Component, OnInit, Input } from '@angular/core';
import { TitanService } from '../../services/titan/titan.service';
import { Tasks } from '../../models/tasks';
import {SharedDataService} from '../../services/shared-data.service';

@Component({
  selector: 'app-seo-worklist',
  templateUrl: './seo-worklist.component.html',
  styleUrls: ['./seo-worklist.component.css']
})
export class SeoWorklistComponent implements OnInit {
  tasks:Tasks[];
  userId:string;
  user: string = 'demo';  
  constructor(private camundaservice: CamundaService,
  private titanService:TitanService,
  private shareddataservice:SharedDataService) { }

  ngOnInit() {
    this.userId = this.shareddataservice.userId; 
    this.titanService.getAssignedTasks(this.userId,false).subscribe(tasks => {
      console.log(tasks);
      this.tasks = tasks.data;
      console.log(this.tasks);
    },
      err => {
        console.log('An error has occured while retreving data from Camunda');
      }
    )   
  }

  claim(taskId:string ,task:Tasks){
    console.log('userId'+this.userId);  
    console.log('taskId'+taskId);
    console.log('task'+task);
    this.camundaservice.claimTask(this.userId ,taskId).subscribe(res => {
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
