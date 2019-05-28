import { Component } from '@angular/core';
import * as GC from "@grapecity/spread-sheets";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'spreadjs';

  spreadBackColor = 'aliceblue';
  sheetName = 'Goods List';
  hostStyle = {
    width: '800px',
    height: '600px'
  };
  data = [
    { Name: 'Apple', Category: 'Fruit', Price: 1, 'Shopping Place': 'Wal-Mart' },
    { Name: 'Potato', Category: 'Fruit', Price: 2.01, 'Shopping Place': 'Other' },
    { Name: 'Tomato', Category: 'Vegetable', Price: 3.21, 'Shopping Place': 'Other' },
    { Name: 'Sandwich', Category: 'Food', Price: 2, 'Shopping Place': 'Wal-Mart' },
    { Name: 'Hamburger', Category: 'Food', Price: 2, 'Shopping Place': 'Wal-Mart' },
    { Name: 'Grape', Category: 'Fruit', Price: 4, 'Shopping Place': 'Sun Store' }
  ];
  columnWidth = 100;

  spread:GC.Spread.Sheets.Workbook ;
  

  workbookInit(args){
    this.spread = args.spread;
    // GC.Spread.Sheets.Culture("ja-jp");
    // console.log( GC.Spread.Common.CultureManager.getCultureInfo("zh-cn") ) ;
    // console.log( GC.Spread.Common.CultureManager.getCultureInfo("z1jp") ) ;
    let sheet = this.spread.getActiveSheet();
    sheet.getCell(0,0).text("My SpreadJS Angular Project").foreColor("blue");
    console.log( GC.Spread.Common.CultureManager.culture() ) ;
    GC.Spread.Common.CultureManager.culture( "ja-jp" ) ;
    console.log( GC.Spread.Common.CultureManager.culture() ) ;

    sheet.setActiveCell( 3, 3 ) ;

  }

  onclick() {
    GC.Spread.Common.CultureManager.culture( "ja-jp" ) ;
    console.log( GC.Spread.Common.CultureManager.culture() ) ;
//    GC.Spread.Common.CultureManager.culture( "zh-cn" ) ;

    let sheet = this.spread.getActiveSheet();
    sheet.clearSelection() ;
    sheet.addSelection(3, -1, 1, -1);

    setTimeout( ()=> { alert("test."); }, 1000 ) ;

  }

}
