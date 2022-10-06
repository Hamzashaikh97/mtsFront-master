import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { DemandofpaymentComponent } from './mts/release/reports/demandofpayment/demandofpayment.component';
import { LoginComponent } from './mts/release/shared/login/login.component';
import { MainMenuComponent } from './mts/release/shared/main-menu/main-menu.component';
import {MtsReleaseScreenComponent} from './mts/release/screens/mts-release-screen/mts-release-screen.component'
import { MtsreleasereportComponent } from './mts/release/reports/mtsreleasereport/mtsreleasereport.component';
import { MtsunreleasereportComponent } from './mts/release/reports/mtsunreleasereport/mtsunreleasereport.component';
import { ProfitlossreportComponent } from './mts/release/reports/profitlossreport/profitlossreport.component';
import { FinancierbriefreportComponent } from './mts/release/reports/financierbriefreport/financierbriefreport.component';
import { FinanceebriefreportComponent } from './mts/release/reports/financeebriefreport/financeebriefreport.component';
import { BuystatementreportComponent } from './mts/release/reports/buystatementreport/buystatementreport.component';
import { SellstatementreportComponent } from './mts/release/reports/sellstatementreport/sellstatementreport.component';
import { UINnetdemandreportComponent } from './mts/release/reports/uinnetdemandreport/uinnetdemandreport.component';
import { NBAFdefinedbrokersreportComponent } from './mts/release/reports/nbafdefinedbrokersreport/nbafdefinedbrokersreport.component';
import { CashreleaserequestreportComponent } from './mts/release/reports/cashreleaserequestreport/cashreleaserequestreport.component';
import { CashallocationBalancereportComponent } from './mts/release/reports/cashallocation-balancereport/cashallocation-balancereport.component';
import { PledgedreleaserequestreportComponent } from './mts/release/reports/pledgedreleaserequestreport/pledgedreleaserequestreport.component';
import { ConcentrationmarginfinancierreportComponent } from './mts/release/reports/concentrationmarginfinancierreport/concentrationmarginfinancierreport.component';
import { PledgebyUINreportComponent } from './mts/release/reports/pledgeby-uinreport/pledgeby-uinreport.component';
import { MTMprofitreportComponent } from './mts/release/reports/mtmprofitreport/mtmprofitreport.component';
import { MTMlossreportComponent } from './mts/release/reports/mtmlossreport/mtmlossreport.component';
import { NavBarComponent } from './mts/release/shared/nav-bar/nav-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdSortableHeader } from './mts/release/reports/concentrationmarginfinancierreport/sortable.directive';
import {DepositeReleaseScreenComponent} from './mts/release/screens/deposite-release-screen/deposite-release-screen.component';
import { DepositerelasescreenComponent } from './mts/release/screens/depositerelasescreen/depositerelasescreen.component'
import {ExposuredemandComponent} from './mts/release/screens/exposuredemand/exposuredemand.component';
import { ConcentrationMarginReportScreenComponent } from './mts/release/screens/concentration-margin-report-screen/concentration-margin-report-screen.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainMenuComponent,
    DemandofpaymentComponent,
    MtsReleaseScreenComponent,
    MtsreleasereportComponent,
    MtsunreleasereportComponent,
    ProfitlossreportComponent,
    FinancierbriefreportComponent,
    FinanceebriefreportComponent,
    BuystatementreportComponent,
    SellstatementreportComponent,
    UINnetdemandreportComponent,
    NBAFdefinedbrokersreportComponent,
    CashreleaserequestreportComponent,
    CashallocationBalancereportComponent,
    PledgedreleaserequestreportComponent,
    ConcentrationmarginfinancierreportComponent,
    PledgebyUINreportComponent,
    MTMprofitreportComponent,
    MTMlossreportComponent,
    NavBarComponent,
    NgbdSortableHeader,
    DepositeReleaseScreenComponent,
    DepositerelasescreenComponent,
    ExposuredemandComponent,
    ConcentrationMarginReportScreenComponent
    
 
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AgGridModule,
    NgbModule
  ],
  
  providers: [],
  bootstrap: [AppComponent],
 

  
})
export class AppModule { }
