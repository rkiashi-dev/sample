import * as puppeteer from 'puppeteer';
  
describe('workspace-project App', () => {
  it('Test Puppeteer screenshot', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.tracing.start({ screenshots: true, path: "trace.json" });

    await page.goto('http://localhost:4200');

    await page.waitForSelector('#btn') ;
    await page.click('#btn') ;
    await page.waitFor(1000) 


    await page.evaluate( ()=> {
//       GC.Spread.Sheets.findControl( document.getElementById('btn') )
       	window.spread.getActiveSheet().setValue(1,0,"12233");
       	window.spread.commandManager().execute( { cmd: "navigationDown", sheetName: "Sheet1" } );
    }) ;

    await page.screenshot({ path: 'example.png' });

    await page.tracing.stop();

    await browser.close();
  });
});
