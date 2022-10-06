import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-concentration-margin-report-screen',
  templateUrl: './concentration-margin-report-screen.component.html',
  styleUrls: ['./concentration-margin-report-screen.component.scss']
})
export class ConcentrationMarginReportScreenComponent implements OnInit {
  route: any;
  constructor(private router: Router) { }
  exposureDemandReport(){
    this.router.navigate(['/concentrationmarginfinancierreport']);
  }
  ngOnInit(): void {
  }

}
