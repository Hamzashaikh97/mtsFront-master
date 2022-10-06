import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-mtmlossreport',
  templateUrl: './mtmlossreport.component.html',
  styleUrls: ['./mtmlossreport.component.scss']
})
export class MTMlossreportComponent  {

  

  // Each Column Definition results in one Column.
  public columnDefs: ColDef[] = [
    {field:'Exch Id',
  width:130},
    {field:'Tkt No',
    width:130},
    {field:'Symbol',
    width:130},
    {field:'Fcee Code',
    width:130},
    {field:'Fcier Code',
    width:130},
    {field:'Fcee CM ID',
    width:130},
    {field:'Fcier CM ID',
    width:130},
    {field:'Bank Code',
    width:130},
    {field:'Loss',
    width:100}

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
      .get<any[]>('https://run.mocky.io/v3/7d7aa7a4-6388-4a0d-878d-f003a4273795');
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
