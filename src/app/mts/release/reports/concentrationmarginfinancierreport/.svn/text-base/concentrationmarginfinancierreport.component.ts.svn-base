import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-concentrationmarginfinancierreport',
  templateUrl: './concentrationmarginfinancierreport.component.html',
  styleUrls: ['./concentrationmarginfinancierreport.component.scss']
})
export class ConcentrationmarginfinancierreportComponent {

 // Each Column Definition results in one Column.
 public columnDefs: ColDef[] = [

  
  {field:'Member Code',
  width:170,
  
  },
  
  {field:'Member Name',
  width:250,
  },
  
  {field:'UIN Margin',
  width:140},
  
  {field:'Market Margin',
  width:170},
  
  {field:'Member Margin',
  width:180},
  
  {field:'UIN Margin',
  width:170},
  
  {field:'Total Margin'}
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
        .get<any[]>('https://run.mocky.io/v3/549ba78a-3d3c-4540-ae04-9b5cbf4747c2');
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
