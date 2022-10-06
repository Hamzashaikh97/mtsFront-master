import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-sellstatementreport',
  templateUrl: './sellstatementreport.component.html',
  styleUrls: ['./sellstatementreport.component.scss']
})
export class SellstatementreportComponent  {

  
  // Each Column Definition results in one Column.
  public columnDefs: ColDef[] = [
    {
      field: 'buyer',
      width: 112
    },
    {
      field: 'seller',
      width: 112
    },
    {
      field: 'ticket no',
      width: 103,
    
    },
    {
      field: 'trade entry date',
      width: 135,
      
    },
    {
      field: 'effective date',
      width: 120,
     
    },
    {
      field: 'exposure rate',
      width: 120,
      sortingOrder: ["asc", "desc"]
    },
    {
      field: 'preminum  rate',
      width: 125
    },
    {
      field: 'preminum days',
      width: 130
    },
    {
      field: 'working days',
      width: 120
    },
    {
      field: 'trade QTY',
      width: 99
    },
    {
      field: 'KATS ticket no',
      width: 125
    },
    {
      field: 'Buy/sell',
      width: 115
    }
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
      .get<any[]>('https://run.mocky.io/v3/1904f300-10e9-4c2b-9e71-f9f2c7df1853');
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
