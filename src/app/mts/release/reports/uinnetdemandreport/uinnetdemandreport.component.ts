import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-uinnetdemandreport',
  templateUrl: './uinnetdemandreport.component.html',
  styleUrls: ['./uinnetdemandreport.component.scss']
})
export class UINnetdemandreportComponent {


  // Each Column Definition results in one Column.
  public columnDefs: ColDef[] = [
    {

      field: 'membercode',
      width: 120,
    },
    {
      field: 'memebername',
      width: 130
    },
    {
      field: 'Uin',
      width: 110
    },
    {
      field: 'Exposure',
      width: 90
    },
    {
      field: 'Loss',
      width: 65
    },
    {
      field: 'Deposite cash',
      width: 120
    },
    {
      field: 'Deposite securities',
      width: 130
    },
    {
      field: 'Cash against loss',
      width: 145
    },
    {
      field: 'Exposur demand',
      width: 140
    },
    {
      field: 'Loss Demand',
      width: 115
    },
    {
      field: 'Cash Demand',
      width: 120
    },
    {
      field: 'Net Cash Demand',
      width: 140
    },
    {
      field: 'Net Sec Demand',
      width: 135
    },
    {
      field: 'Net Loss Dmd Fcier',
      width: 148
    },
    {
      field: 'Net Loss Dmd Fcee',
      width: 148
    },
    { field: 'Net Demand' }

  ];


  // DefaultColDef sets props common to all Columns
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,


  };

  // Data that gets displayed in the grid
  public rowData$!: Observable<any[]>;

  // For accessing the Grid's API
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;


  constructor(private http: HttpClient) { }

  // Example load data from sever
  onGridReady(params: GridReadyEvent) {
    this.rowData$ = this.http
      .get<any[]>('https://run.mocky.io/v3/b7039680-1f7a-406a-837e-6de830c67bbb');
  }

  // Example of consuming Grid Event
  onCellClicked(e: CellClickedEvent): void {
    console.log('cellClicked', e);
  }

  // Example using Grid's API
  clearSelection(): void {
    this.agGrid.api.deselectAll();
  }

}
