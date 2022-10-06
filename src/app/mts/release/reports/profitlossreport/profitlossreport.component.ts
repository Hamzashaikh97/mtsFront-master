import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profitlossreport',
  templateUrl: './profitlossreport.component.html',
  styleUrls: ['./profitlossreport.component.scss']
})
export class ProfitlossreportComponent  {




  // Each Column Definition results in one Column.
  public columnDefs: ColDef[] = [


    { field: 'Member Code',
  width:180 },

    { field: 'Member Name' ,
    width:200},

    { field: 'Symbol Code',
    width:150},

    { field: 'Rate',
    width:100 },

    { field: 'Amount Recievable From Clearing House',
    width:350 },

    { field: 'Amount Payable To Clearing House',
    width:350 },
  ]


  // DefaultColDef sets props common to all Columns
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,


  };
  public autoGroupColumnDef: ColDef = {
    minWidth: 200,
  };

  // Data that gets displayed in the grid
  public rowData$!: Observable<any[]>;

  // For accessing the Grid's API
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  constructor(private http: HttpClient) { }

  // Example load data from sever
  onGridReady(params: GridReadyEvent) {
    this.rowData$ = this.http
      .get<any[]>('https://run.mocky.io/v3/efb5e400-ade1-4173-814e-dbe016f0a0ec');
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
