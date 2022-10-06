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

  exposuredemandReport()
  {
    this.router.navigate(['/exposuredemand']);
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
