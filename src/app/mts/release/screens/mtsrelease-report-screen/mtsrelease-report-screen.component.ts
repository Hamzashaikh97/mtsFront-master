import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-mtsrelease-report-screen',
  templateUrl: './mtsrelease-report-screen.component.html',
  styleUrls: ['./mtsrelease-report-screen.component.scss']
})
export class MTSReleaseReportScreenComponent implements OnInit {
  route: any;
  constructor(private router: Router) { }
  MTSRelease(){
    this.router.navigate(['/mtsreleasereport']);
  }
  ngOnInit(): void {
  }

}
