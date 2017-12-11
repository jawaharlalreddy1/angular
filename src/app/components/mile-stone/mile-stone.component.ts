import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbActiveModal, NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap';
import { TitanService } from '../../services/titan/titan.service';

@Component({
  selector: 'app-mile-stone',
  templateUrl: './mile-stone.component.html',
  styleUrls: ['./mile-stone.component.css']
})
export class MileStoneComponent implements OnInit {
  @Input() id;
  milestones: any[] = [];
  transactionType: string;
  htmlclass: string;
  constructor(public activeModal: NgbActiveModal,
    public titanService: TitanService,
    config: NgbProgressbarConfig) {
  }

  ngOnInit() {
    this.titanService.getMileStone(this.id).subscribe(milestonedata => {
      // this.notes = notesdata.notes;
      this.milestones = milestonedata.milestones;
      this.transactionType = milestonedata.recentTransactionType;
      console.log(this.milestones)
    },
      err => {
        console.log('An error has occured while retreving data from Titan Seo');
      }
    )
  }

  getClass() {
    for (let milestone of this.milestones) {
      if (milestone.status == 'InProgress') {
        return "col bs-wizard-step disabled";
      } else {
        return "col bs-wizard-step complete";
      }
    }
    //this.htmlclass = "one success-color";            
    //  return "progress-bar progress-bar-warning progress-bar-striped progress-bar-animated";
    //return this.htmlclass
  }

  getStyle() {
    let myStyles = {
      'width': `100%`,
      'height': `17px`
    }
    return myStyles;
  }

}
