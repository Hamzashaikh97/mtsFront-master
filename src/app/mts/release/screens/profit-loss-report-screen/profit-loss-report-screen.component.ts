import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profit-loss-report-screen',
  templateUrl: './profit-loss-report-screen.component.html',
  styleUrls: ['./profit-loss-report-screen.component.scss']
})
export class ProfitLossReportScreenComponent implements OnInit {
  route: any;
  constructor(private router: Router) { }
  profitLossReport(){
    this.router.navigate(['/profitlossreport']);
  }
  ngOnInit(): void {
  }

}
