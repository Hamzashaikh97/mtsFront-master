import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cashreleaserequestreport',
  templateUrl: './cashreleaserequestreport.component.html',
  styleUrls: ['./cashreleaserequestreport.component.scss']
})
export class CashreleaserequestreportComponent  {

 // Each Column Definition results in one Column.
 public columnDefs: ColDef[] = [
  {field: 'member code & Name',
},
  {field: 'bank code & Name',
  },
  {field: 'cash amount',
 },
  {field: 'request date',
  },
  {field: 'request time',
  },
  {field: 'affirmed date',
  width:140},
  {field: 'affirmed time',
  }
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
    .get<any[]>('https://run.mocky.io/v3/4633fc02-a391-4981-af62-cad825ef3c06');
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
