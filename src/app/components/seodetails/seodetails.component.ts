import { SeoHeader } from './../../models/seo/seoHeader';
import { Component, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TitanService } from '../../services/titan/titan.service';


@Component({
  selector: 'app-seodetails',
  templateUrl: './seodetails.component.html',
  styleUrls: ['./seodetails.component.css']
})
export class SeodetailsComponent implements OnInit {
  enterPriseItemId: string;
  taskId: string;

  seoheader: SeoHeader;
  categorylist: any[];
  websiteurllist: any[];


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private titanService: TitanService
  ) { }

  ngOnInit() {
    this.enterPriseItemId = this.route.snapshot.params['enterpriseItemId'];
    this.taskId = this.route.snapshot.params['id'];
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

}
