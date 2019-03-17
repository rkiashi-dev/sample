import * as puppeteer from 'puppeteer';

describe('workspace-project App', () => {
  it('Test Puppeteer screenshot', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.tracing.start({ screenshots: true, path: "trace.json" });

    await page.goto('http://localhost:4200');
    await page.screenshot({ path: 'example.png' });

    await page.tracing.stop();

    await browser.close();
  });
});
