import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  menueItems: any =
    {
      menuId: "",
      menuDesc: "",
      menuParentId: "",
      menuVal: ""
    }


  menues: any = Object;
  route: any;

  constructor(private router: Router,private menuService: MenuService) { }

  ngOnInit(): void {
   // this.Menu();
    console.log("in ngonit");
    console.log(this.menueItems);
    console.log("in ngonit 03");
    console.log(this.menues);
  }


  redirect() {
    console.log("exposure demand")
    this.route.navigate(['/demandofpayment']);
   
  }

  

  profitLossReportScreen()
  {
    this.router.navigate(['/profit-loss-report-screen']);
  }

  exposuredemandReport()
  {
    this.router.navigate(['/exposuredemand']);
  }
  MTSReleaseReport(){
    this.router.navigate(['/mtsrelease-report-screen']);

  }
  MTSunReleaseReport(){
    this.router.navigate(['/mtsunrelease-report-screen']);

  }
  
  concentrationMarginReport()
  {
    this.router.navigate(['/concentration-margin-report-screen']);
  }
  
  gotodepositerelasescreen()
  {
    this.router.navigate(['/depositerelasescreen']);
  }
  gotodepositeRelaseScreenTier2()
  {
    this.router.navigate(['/deposite-release-screen']);
  }
  
  gotoConcentrationMargin()
  {
    this.router.navigate(['/concentrationmarginfinancierreport']);
  }
  Fecth(){
    this.router.navigate(['/user']);
  }
  gotoMTSReleaseScreen()
  {
    this.router.navigate(['/mts-release-screen']);
  }

  financierReportScreen()
  {
    this.router.navigate(['/financier-brief-report-screen']);
  }

  financeeReportScreen()
  {
    this.router.navigate(['/financee-brief-report-screen']);
  }
  buyStatementReportScreen()
  {
    this.router.navigate(['/buy-statement-report-screen']);
  }

  sellStatementReportScreen()
  {
    this.router.navigate(['/sell-statement-report-screen']);
  }
  UINnetDemandReportScreen()
  {
    this.router.navigate(['/uin-net-demand-report-screen']);
  }
 
  nbafReportScreen()
  {
    this.router.navigate(['/nbafreport-screen']);
  }

  cashReleaseRequestReportScreen()
  {
    this.router.navigate(['/cash-release-request-report-screen']);
  }
  cashAllocationReportScreen()
  {
    this.router.navigate(['/cashallocationbalance-request-report-screen']);
  }

  pledgeReleaseRequestReportScreen()
  {
    this.router.navigate(['/pledge-release-request-report-screen']);
  }
  pledgeByUinReportScreen()
  {
    this.router.navigate(['/pledge-by-uin-report-screen']);
  }

  MTMprofitReportScreen()
  {
    this.router.navigate(['/mtmprofit-report-screen']);
  }
  MTMlossReportScreen()
  {
    this.router.navigate(['/mtmloss-report-screen']);
  }


  Menu() {
    this.menuService.doLogin("C").subscribe(
      (response: any[]) => {
        //debugger
        console.log(response + " res");
        this.menues = response;
        this.menueItems = this.menues;
        console.log(this.menues);


        console.log(this.menueItems[4].menuDesc);

        let k = 0;


        console.log("the menue items");
        console.log(this.menueItems)
        //  this. ParentMenu();
      }
      ,
      (errorResponse: HttpErrorResponse) => {
        console.log(errorResponse.message);
        alert("Inavlid username or password");
      }
    )


  }

}
