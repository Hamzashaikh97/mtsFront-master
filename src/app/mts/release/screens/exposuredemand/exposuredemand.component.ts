import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exposuredemand',
  templateUrl: './exposuredemand.component.html',
  styleUrls: ['./exposuredemand.component.scss']
})
export class ExposuredemandComponent implements OnInit {
  route: any;
  constructor(private router: Router) { }
  exposureDemandReport(){
    this.router.navigate(['/demandofpayment']);
  }
  ngOnInit(): void {
  }

}
