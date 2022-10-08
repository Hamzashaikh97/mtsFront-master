import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-mtsunrelease-report-screen',
  templateUrl: './mtsunrelease-report-screen.component.html',
  styleUrls: ['./mtsunrelease-report-screen.component.scss']
})
export class MTSunReleaseReportScreenComponent implements OnInit {
  route: any;
  constructor(private router: Router) { }
  MTSunRelease(){
    this.router.navigate(['/mtsunreleasereport']);
  }
  ngOnInit(): void {
  }

}
