import { Component } from '@angular/core';
import * as GC from "@grapecity/spread-sheets";

declare global {
    interface Window { spread: any; }
}
export function setSpread( spread: any ) {
	if(typeof window !== "undefined")  {
		window.spread = spread ;
	}
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'spreadjs';
  spread ;

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

  onclick() {
    GC.Spread.Common.CultureManager.culture( "ja-jp" ) ;
    console.log( GC.Spread.Common.CultureManager.culture() ) ;

this.spread = new GC.Spread.Sheets.Workbook(document.getElementById("aa"), {
                sheetCount: 1
            });
	setSpread( this.spread ) ;

  }

}
