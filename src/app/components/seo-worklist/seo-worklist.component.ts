import { CamundaService } from './../../services/camunda/camunda.service';
import { Component, OnInit, Input } from '@angular/core';
import { TitanService } from '../../services/titan/titan.service';
import { Tasks } from '../../models/tasks';
import { SharedDataService } from '../../services/shared-data.service';
import { TaskHistoryHeader } from '../../models/common/taskHistoryHeader';
import { TaskHistory } from '../../models/common/taskHistory';
import { FlashMessagesService } from 'angular2-flash-messages';
import {DatePipe } from '@angular/common';
import { NgProgress } from 'ngx-progressbar';

@Component({
  selector: 'app-seo-worklist',
  templateUrl: './seo-worklist.component.html',
  styleUrls: ['./seo-worklist.component.css']
})
export class SeoWorklistComponent implements OnInit {
  tasks: Tasks[];
  userId: string;
  user: string = 'demo';
  taskhistoryheader: TaskHistoryHeader;
  taskhistory: TaskHistory;
  
  p: number;
  itemsPerPage: any;
  countOfPages: any;
  page: any;

  constructor(public camundaservice: CamundaService,
    private titanService: TitanService,
    private shareddataservice: SharedDataService,
    private flashMessagesService: FlashMessagesService,
    private datePipe: DatePipe,
    public ngProgress: NgProgress) { 
      this.p = 1; this.itemsPerPage = 5;
    this.camundaservice.countTask().subscribe(totalcount => {
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
    this.ngProgress.start();
    this.userId = this.shareddataservice.userId;
    this.titanService.getAssignedTasksByPage(this.userId, false,false,  this.page, this.itemsPerPage).subscribe(tasks => {
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
  claim(taskId: string, task: Tasks) {
    console.log('userId' + this.userId);
    console.log('taskId' + taskId);
    console.log('task' + task);

    this.camundaservice.claimTask(this.userId, taskId).subscribe(res => {
      console.log(res);
      for (let i = 0; i < this.tasks.length; i++) {
        if (task == this.tasks[i]) {
          //  console.log('testst' + this.tasks[i]);
          console.log('testst1234' + this.tasks[i].enterpriseItemId);
          this.createTaskHistory(this.tasks[i]);
          this.tasks.splice(i, 1);
          this.flashMessagesService.show('Task has been Claimed', {
            cssClass: 'alert-success', timeout: 4000
          });
        }
      }
    }

    )
  }

  createTaskHistory(task) {
    console.log(task.enterpriseItemId + ' ' + task.parentId);

    let object = {
      'taskHistoryHeader': {
        "enterpriseItemid": task.enterpriseItemId,
        "parentProcessId": task.parentId
      },
      'taskHistory': []
    }

    let taskHistory = {
      "taskId": task.id,
      "taskDescription": 'SEO - New Task',
      "status": 'Accepted',
      "user": this.userId,
      "dateTimeStamp": this.datePipe.transform(new Date(), 'yyyy-MM-dd hh:mm:ss'),
      "taskHistoryDetails": []
    }
    object.taskHistory.push(taskHistory);
    return this.titanService.addTaskHistory(object).subscribe(res => {
      console.log(res);
    })
  }

}
