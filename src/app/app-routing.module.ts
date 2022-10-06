import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { report } from 'process';
import { DemandofpaymentComponent } from './mts/release/reports/demandofpayment/demandofpayment.component';
import { MtsReleaseScreenComponent } from './mts/release/screens/mts-release-screen/mts-release-screen.component';
import{DepositeReleaseScreenComponent} from './mts/release/screens/deposite-release-screen/deposite-release-screen.component'
import { LoginComponent } from './mts/release/shared/login/login.component';
import { MainMenuComponent } from './mts/release/shared/main-menu/main-menu.component';
import {BuystatementreportComponent} from './mts/release/reports/buystatementreport/buystatementreport.component';
import {CashallocationBalancereportComponent} from './mts/release/reports/cashallocation-balancereport/cashallocation-balancereport.component';
import {CashreleaserequestreportComponent} from './mts/release/reports/cashreleaserequestreport/cashreleaserequestreport.component'
import {ConcentrationmarginfinancierreportComponent} from './mts/release/reports/concentrationmarginfinancierreport/concentrationmarginfinancierreport.component'
import {FinanceebriefreportComponent} from './mts/release/reports/financeebriefreport/financeebriefreport.component'
import {FinancierbriefreportComponent} from './mts/release/reports/financierbriefreport/financierbriefreport.component'
import {MTMlossreportComponent} from './mts/release/reports/mtmlossreport/mtmlossreport.component'
import {MTMprofitreportComponent} from './mts/release/reports/mtmprofitreport/mtmprofitreport.component'
import {MtsreleasereportComponent} from './mts/release/reports/mtsreleasereport/mtsreleasereport.component'
import {MtsunreleasereportComponent} from './mts/release/reports/mtsunreleasereport/mtsunreleasereport.component'
import {NBAFdefinedbrokersreportComponent} from './mts/release/reports/nbafdefinedbrokersreport/nbafdefinedbrokersreport.component'
import {PledgebyUINreportComponent} from './mts/release/reports/pledgeby-uinreport/pledgeby-uinreport.component'
import {PledgedreleaserequestreportComponent} from './mts/release/reports/pledgedreleaserequestreport/pledgedreleaserequestreport.component'
import {ProfitlossreportComponent} from './mts/release/reports/profitlossreport/profitlossreport.component'
import {SellstatementreportComponent} from './mts/release/reports/sellstatementreport/sellstatementreport.component'
import {UINnetdemandreportComponent} from './mts/release/reports/uinnetdemandreport/uinnetdemandreport.component'
import {NavBarComponent} from './mts/release/shared/nav-bar/nav-bar.component'
import { DepositerelasescreenComponent } from './mts/release/screens/depositerelasescreen/depositerelasescreen.component'
import {ExposuredemandComponent} from './mts/release/screens/exposuredemand/exposuredemand.component'
import { ConcentrationMarginReportScreenComponent } from './mts/release/screens/concentration-margin-report-screen/concentration-margin-report-screen.component'

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'main', component: MainMenuComponent},
  {path: 'demandofpayment',component:DemandofpaymentComponent},
  {path: 'mts-release-screen', component: MtsReleaseScreenComponent },
  {path: 'buystatementreport', component: BuystatementreportComponent },
  {path: 'cashallocation-balancereport', component: CashallocationBalancereportComponent },
  {path: 'cashreleaserequestreport', component: CashreleaserequestreportComponent },
  {path: 'concentrationmarginfinancierreport', component: ConcentrationmarginfinancierreportComponent },
  {path: 'financeebriefreport', component: FinanceebriefreportComponent },
  {path: 'financierbriefreport', component: FinancierbriefreportComponent },
  {path: 'mtmlossreport', component: MTMlossreportComponent },
  {path: 'mtmprofitreport', component: MTMprofitreportComponent },
  {path: 'mtsreleasereport', component: MtsreleasereportComponent },
  {path: 'mtsunreleasereport', component: MtsunreleasereportComponent },
  {path: 'nbafdefinedbrokersreport', component: NBAFdefinedbrokersreportComponent },
  {path: 'pledgeby-uinreport', component: PledgebyUINreportComponent },
  {path: 'pledgedreleaserequestreport', component: PledgedreleaserequestreportComponent },
  {path: 'profitlossreport', component: ProfitlossreportComponent },
  {path: 'sellstatementreport', component: SellstatementreportComponent },
  {path: 'uinnetdemandreport', component: UINnetdemandreportComponent },
  {path: 'nav-bar', component: NavBarComponent },
  {path: 'deposite-release-screen', component: DepositeReleaseScreenComponent },
  {path: 'depositerelasescreen', component: DepositerelasescreenComponent },
  {path: 'exposuredemand', component: ExposuredemandComponent },
  {path: 'concentration-margin-report-screen', component: ConcentrationMarginReportScreenComponent },



  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
