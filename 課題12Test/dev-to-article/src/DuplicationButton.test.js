import puppeteer from 'puppeteer';

describe('<DuplicationButton />', () => {
  let page;

  beforeAll(async () => {
    // init puppeteer page
    let browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  it('should duplicate content after clicking', async () => {
    // navigate to fullscreen story
    await page.goto('http://localhost:6006/iframe.html?id=duplicationbutton--good');

    // click on the button
    await page.click('button');

    // take screenshot and compare
    const screenshot = await page.screenshot();
    expect(screenshot).toMatchImageSnapshot();
  });
});
