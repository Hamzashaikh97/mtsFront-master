import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pledgeby-uinreport',
  templateUrl: './pledgeby-uinreport.component.html',
  styleUrls: ['./pledgeby-uinreport.component.scss']
})
export class PledgebyUINreportComponent  {


  // Each Column Definition results in one Column.
  public columnDefs: ColDef[] = [
    {field:'UIN'},
    {field:'Sub Acc',
  width:150},
    {field:'Symbol Code & Name'},
    {field:'Actual Qty',
    width:150},
    {field:'Actual Val',
    width:150},
    {field:'Accpt Qty',
    width:150},
    {field:'Accpt Val',
    width:150}
    
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
      .get<any[]>('https://run.mocky.io/v3/73f967b7-c747-4422-963e-649ad1af3623');
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
