import { Component } from '@angular/core';
import * as GCX from "@grapecity/spread-sheets";

declare namespace GC.Spread {
  namespace Common.CultureManager {
    function culture( s: string ) ;
    function culture() ;
  }
  namespace Sheets {
   class Workbook {
    constructor( a: object, b: object ) ;
   }
  }
} ;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'spreadjs-js';

  onclick() {

    GCX.Spread.Common.CultureManager.culture( "ja-jp" ) ;
    console.log( GCX.Spread.Common.CultureManager.culture() ) ;

 new GCX.Spread.Sheets.Workbook(document.getElementById("aa"), {
                sheetCount: 1
            });

  }
}
