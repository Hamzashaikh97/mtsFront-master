import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-financierbriefreport',
  templateUrl: './financierbriefreport.component.html',
  styleUrls: ['./financierbriefreport.component.scss']
})
export class FinancierbriefreportComponent  {


  // Each Column Definition results in one Column.
  public columnDefs: ColDef[] = [
    {field: 'Symbol',
  width:85},
    {field: 'Exposue Date',
    width:115},
    {field: 'Client',
    width:85},
    {field: 'Buy Qty',
    width:85},
    {field: 'Buy Amt',
    width:90},
    {field: 'Sell Qty',
    width:90},
    {field: 'Sell Amt',
    width:90},
    {field: 'Loss',
    width:65},
    {field: 'Profit',
    width:75},
    {field: 'Exposure',
    width:90},
    {field: 'Special Margin',
    width:125},
    {field: 'Exposure Demanmd',
    width:150},
    {field: 'Cash Demand',
    width:125},
    {field: 'Security Demand',
    width:135},
    {field: 'Additional cash Demand',
    width:180}
  ]

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
      .get<any[]>('https://run.mocky.io/v3/d01b38aa-9b13-4efc-8252-62c30bde52af');
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