import { Component, ElementRef, ViewChild  } from '@angular/core';
import { Router } from '@angular/router';

declare var require: any;

import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
const htmlToPdfmake = require("html-to-pdfmake");
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-frontend';



  

  
      dynamicDownload: any;
   
  constructor(private route:Router) { }

  ngOnInit(): void {
    
  }
  @ViewChild('pdfTable')
  pdfTable!: ElementRef;
  
  public downloadAsPDF() {
    this.dynamicDownload= HTMLElement;
    const pdfTable = this.pdfTable.nativeElement;
    var html = htmlToPdfmake(pdfTable.innerHTML);
    const documentDefinition = { content: html };
    pdfMake.createPdf(documentDefinition).download(); 
    this.dynamicDownload({
      fileName: 'My Report',
      text: JSON.stringify(documentDefinition)
    });
     
  }

}

