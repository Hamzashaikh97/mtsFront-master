import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild , OnInit} from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';

declare var require: any;

import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
const htmlToPdfmake = require("html-to-pdfmake");
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-demandofpayment',
  templateUrl: './demandofpayment.component.html',
  styleUrls: ['./demandofpayment.component.scss']
})
export class DemandofpaymentComponent {

  userTable:any= ElementRef;
  // Each Column Definition results in one Column.
  public columnDefs: ColDef[] = [

    {field: 'Sr no',
    width:90
   },
   {field: 'Description',
   width:600},
    {field: 'Financier',
},
{field: 'Financee',
},
{field: 'Total',
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
      .get<any[]>('https://run.mocky.io/v3/c3e9980c-db23-457d-8023-4757290a3d6a');
  }

  @ViewChild('pdfTable')
  pdfTable!: ElementRef;
  // Example of consuming Grid Event
  onCellClicked(e: CellClickedEvent): void {
    console.log('cellClicked', e);
  }

  // Example using Grid's API
  clearSelection(): void {
    this.agGrid.api.deselectAll();
  }


  public downloadAsPDF() {
    const pdfTable = this.pdfTable.nativeElement;
    var html = htmlToPdfmake(pdfTable.innerHTML);
    const documentDefinition = { content: html };
    pdfMake.createPdf(documentDefinition).download(); 
     
  }

}
