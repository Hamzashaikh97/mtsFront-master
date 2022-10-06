import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-cashallocation-balancereport',
  templateUrl: './cashallocation-balancereport.component.html',
  styleUrls: ['./cashallocation-balancereport.component.scss']
})
export class CashallocationBalancereportComponent {

  // Each Column Definition results in one Column.
  public columnDefs: ColDef[] = [
    {field: 'serial no',
    width:200,
  sortingOrder:['asc','desc']},
{field: 'Mem code',
width:400},
{field: 'UIN number',
width:400},
{field: 'cash allocation',
width:400}
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
      .get<any[]>('https://run.mocky.io/v3/94c79066-9a08-4ef6-8be4-1f70d56c64ea');
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
