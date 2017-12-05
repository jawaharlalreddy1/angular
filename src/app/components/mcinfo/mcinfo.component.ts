import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EsbService } from '../../services/ESB/esb.service';
import { McInfo } from '../../models/common/mcinfo';
import { CmInfo } from '../../models/common/cminfo';

@Component({
  selector: 'app-mcinfo',
  templateUrl: './mcinfo.component.html',
  styleUrls: ['./mcinfo.component.css']
})
export class McinfoComponent implements OnInit {
  enterPriseItemId: string;
  taskId: string;
  enterpriseAcctId: string;
  mcinfo = {};
  cminfo= {};

  constructor(private router: Router,
    private route: ActivatedRoute,
    private esbservice: EsbService
  ) { }

  ngOnInit() {
    this.enterPriseItemId = this.route.snapshot.params['enterpriseItemId'];
    this.taskId = this.route.snapshot.params['id'];
    this.enterpriseAcctId = this.route.snapshot.params['enterpriseAcctId'];

    this.esbservice.getMcDetails(this.enterPriseItemId, this.enterpriseAcctId).subscribe(mcdata => {
      console.log(mcdata);
      console.log(mcdata.response);
      this.mcinfo = mcdata.response.mcCMInfo.mc_Info;
      this.cminfo = mcdata.response.mcCMInfo.cm_Info;

    },
      err => {
        console.log('An error has occured while retreving data from Titan Seo');
      }
    )
  }

}
