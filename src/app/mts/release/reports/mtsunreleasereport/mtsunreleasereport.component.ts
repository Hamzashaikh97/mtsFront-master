import { Component, ElementRef, ViewChild } from '@angular/core';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
import * as XLSX from 'xlsx';
import {DecimalPipe} from '@angular/common';
import {QueryList, ViewChildren} from '@angular/core';
import {Observable} from 'rxjs';
import {MTSunReleaseReportData} from './types';
import {MemberDataService} from './mtsunreleaseReport.service';
import {NgbdSortableHeader, SortEvent} from './sortable.directive';

// import jsPDF from 'jspdf'
// import autoTable from 'jspdf-autotable'

// const doc = new jsPDF()

const htmlToPdfmake = require("html-to-pdfmake");
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-mtsunreleasereport',
  templateUrl: './mtsunreleasereport.component.html',
  styleUrls: ['./mtsunreleasereport.component.scss'],
  providers: [MemberDataService, DecimalPipe]
})
export class MtsunreleasereportComponent  {
 

  MTSunReleaseReportData$!: Observable<MTSunReleaseReportData[]>;
  total$!: Observable<number>;

  @ViewChildren(NgbdSortableHeader)
  headers!: QueryList<NgbdSortableHeader>;

  constructor(public service: MemberDataService) { 
    this.MTSunReleaseReportData$ = service.MTSunReleaseReportData$;
    this.total$ = service.total$;

  }

  onSort({column, direction}: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }

  fileName = 'ExcelSheet.xlsx';
  exportexcel() {
    /* pass here the table id */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);

  }
  @ViewChild('pdfTable')
  pdfTable!: ElementRef;

  public downloadAsPDF() {
    const pdfTable = this.pdfTable.nativeElement;
    var html = htmlToPdfmake(pdfTable.innerHTML);
    const documentDefinition = { content: html };
    pdfMake.createPdf(documentDefinition).download('MtsUnreleaseReport.pdf');

  }

 
  // pdf(){
        
    
  //   autoTable(doc, { html: 'Table' })
  //         doc.save('products.pdf');
    
  // }

  }
  // Each Column Definition results in one Column.
  // public columnDefs: ColDef[] = [
  //   {
  //     field: 'buyer',
  //     width: 112
  //   },
  //   {
  //     field: 'seller',
  //     width: 112
  //   },
  //   {
  //     field: 'ticket no',
  //     width: 103,
    
  //   },
  //   {
  //     field: 'trade entry date',
  //     width: 135,
      
  //   },
  //   {
  //     field: 'effective date',
  //     width: 120,
     
  //   },
  //   {
  //     field: 'exposure rate',
  //     width: 120,
  //     sortingOrder: ["asc", "desc"]
  //   },
  //   {
  //     field: 'preminum  rate',
  //     width: 125
  //   },
  //   {
  //     field: 'preminum days',
  //     width: 130
  //   },
  //   {
  //     field: 'working days',
  //     width: 120
  //   },
  //   {
  //     field: 'trade QTY',
  //     width: 99
  //   },
  //   {
  //     field: 'KATS ticket no',
  //     width: 125
  //   },
  //   {
  //     field: 'Buy/sell',
  //     width: 115
  //   }
  // ];


  // // DefaultColDef sets props common to all Columns
  // public defaultColDef: ColDef = {
  //   sortable: true,
  //   filter: true,
    

  // };

  // // Data that gets displayed in the grid
  // public rowData$!: Observable<any[]>;

  // // For accessing the Grid's API
  // @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  // constructor(private http: HttpClient) { }

  // // Example load data from sever
  // onGridReady(params: GridReadyEvent) {
  //   this.rowData$ = this.http
  //     .get<any[]>('https://run.mocky.io/v3/1904f300-10e9-4c2b-9e71-f9f2c7df1853');
  // }

  // // Example of consuming Grid Event
  // onCellClicked(e: CellClickedEvent): void {
  //   console.log('cellClicked', e);
  // }

  // // Example using Grid's API
  // clearSelection(): void {
  //   this.agGrid.api.deselectAll();
  // }

