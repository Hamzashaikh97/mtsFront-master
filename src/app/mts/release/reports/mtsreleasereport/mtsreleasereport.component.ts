import { Component, ElementRef, ViewChild } from '@angular/core';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
import * as XLSX from 'xlsx';

import {DecimalPipe} from '@angular/common';
import {QueryList, ViewChildren} from '@angular/core';
import {Observable} from 'rxjs';

import {MTSReleaseReportData} from './types';
import {MemberDataService} from './mtsreleaseReport.service';
import {NgbdSortableHeader, SortEvent} from './sortable.directive';


const htmlToPdfmake = require("html-to-pdfmake");
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-mtsreleasereport',
  templateUrl: './mtsreleasereport.component.html',
  styleUrls: ['./mtsreleasereport.component.scss'],
  providers: [MemberDataService, DecimalPipe]
})
export class MtsreleasereportComponent {

  MTSReleaseReportData$!: Observable<MTSReleaseReportData[]>;
  total$!: Observable<number>;

  @ViewChildren(NgbdSortableHeader)
  headers!: QueryList<NgbdSortableHeader>;

  constructor(public service: MemberDataService) { 
    this.MTSReleaseReportData$ = service.MTSReleaseReportData$;
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
    pdfMake.createPdf(documentDefinition).download();

  }
 



}
