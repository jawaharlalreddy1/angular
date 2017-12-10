import { Component, OnInit, Output } from '@angular/core';
import { SeoHeader } from '../../models/seo/seoHeader';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-seoinfo',
  templateUrl: './seoinfo.component.html',
  styleUrls: ['./seoinfo.component.css']
})
export class SeoinfoComponent implements OnInit {
  history: string;
  routeto: string;
  backto: string;
  constructor(private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.history = 'false';
    this.history = this.route.snapshot.params['history'];
    console.log(this.history);
    if (this.history == 'true') {
      this.routeto = 'myseohistory';
      this.backto = 'Back To My Seo Completed Tasks';
      console.log('if' + this.history);
    } else {
      console.log('else' + this.history);
      this.routeto = 'myseo';
      this.backto = 'Back To My Seo Tasks';
    }

  }

}
