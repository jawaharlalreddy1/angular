import { SeoHeader } from './../../models/seo/seoHeader';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TitanService } from '../../services/titan/titan.service';
import { TaskHistoryDetails } from '../../models/common/taskHistoryDetails';
import { FlashMessagesService } from 'angular2-flash-messages';
import { SharedDataService } from '../../services/shared-data.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-seodetails',
  templateUrl: './seodetails.component.html',
  styleUrls: ['./seodetails.component.css']
})
export class SeodetailsComponent implements OnInit {
  parentId: any;
  userId: string;
  enterPriseItemId: string;
  taskId: string;
  history:string;

  seoheader: SeoHeader;
  categorylist: any[];
  websiteurllist: any[];

  thryvdetails: TaskHistoryDetails = {
    resultName: '',
    resultValue: ''
  }

  websitedetails: TaskHistoryDetails = {
    resultName: '',
    resultValue: ''
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private titanService: TitanService,
    private flashMessagesService: FlashMessagesService,
    private shareddataservice: SharedDataService,
    private datePipe: DatePipe
  ) { }

  ngOnInit() {
    this.userId = this.shareddataservice.userId;
    this.enterPriseItemId = this.route.snapshot.params['enterpriseItemId'];
    this.taskId = this.route.snapshot.params['id'];
    this.history = this.route.snapshot.params['history'];

    this.parentId = this.route.snapshot.params['parentId'];
    this.titanService.getSeodata(this.enterPriseItemId).subscribe(seodata => {
      console.log(seodata);
      console.log(seodata.product);
      this.seoheader = seodata.product;
      this.websiteurllist = seodata.WebsiteUrlList;
      this.categorylist = seodata.CategoryList;
    },
      err => {
        console.log('An error has occured while retreving data from Titan Seo');
      }
    )
  }

  onSubmit({ value, valid }: { value, valid: boolean }) {
    if (!valid) {
      this.flashMessagesService.show('Please fill in all fields', {
        cssClass: 'alert-danger', timeout: 4000
      });
      // this.router.navigate(['edit-client/'+this.id]);
    } else {
      // Update client
      console.log(value.thryvdetails)
      console.log(value.websitedetails)

      let object = {
        'taskHistoryHeader': {
          "enterpriseItemid": this.enterPriseItemId,
          "parentProcessId": this.parentId
        },
        'taskHistory': []
      }

      let taskHistory = {
        "taskId": this.taskId,
        "taskDescription": 'Website Details',
        "status": '',
        "user": this.userId,
        "dateTimeStamp": this.datePipe.transform(new Date(), 'yyyy-MM-dd hh:mm:ss'),
        "taskHistoryDetails": []
      }
      let taskHistoryDetails = {
        "resultName":"Is Thryv Account",
        "resultValue":value.thryvdetails
      }
      let taskHistoryDetails1 = {
        "resultName":"Is website Live",
        "resultValue":value.websitedetails
      }
      taskHistory.taskHistoryDetails.push(taskHistoryDetails);
      taskHistory.taskHistoryDetails.push(taskHistoryDetails1);
      object.taskHistory.push(taskHistory);
      return this.titanService.addTaskHistory(object).subscribe(res => {
        console.log(res);
        this.flashMessagesService.show('Client updated', {
          cssClass: 'alert-success', timeout: 4000
        });
      });          // this.router.navigate(['/client/'+this.id]);
    }
  }

}
