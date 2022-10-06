import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nbafdefinedbrokersreport',
  templateUrl: './nbafdefinedbrokersreport.component.html',
  styleUrls: ['./nbafdefinedbrokersreport.component.scss']
})
export class NBAFdefinedbrokersreportComponent {

   // Each Column Definition results in one Column.
   public columnDefs: ColDef[] = [
    {field: 'ExchangeId'},
{field: 'Participant Code & Name'},
{field: 'NBAF'},
{field: 'MTSID'}
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
      .get<any[]>('https://run.mocky.io/v3/c9951e64-8502-4c8a-b10c-95a245770f78');
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
