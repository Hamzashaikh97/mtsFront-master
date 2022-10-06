import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pledgedreleaserequestreport',
  templateUrl: './pledgedreleaserequestreport.component.html',
  styleUrls: ['./pledgedreleaserequestreport.component.scss']
})
export class PledgedreleaserequestreportComponent  {


  // Each Column Definition results in one Column.
  public columnDefs: ColDef[] = [
    {field:'Transac ID',
  width:100},
{field:'UIN',
width:120},
{field:'Symbol Code & Name',
width:170},
{field:'Quantity',
width:130},
{field:'Entry Time',
width:130},
{field:'Posted Time',
width:150},
{field:'Sub Account',
width:150},
{field:'CM ID',
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
      .get<any[]>('https://run.mocky.io/v3/ca206ede-e709-4b16-a13c-46ba668d2be6');
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
