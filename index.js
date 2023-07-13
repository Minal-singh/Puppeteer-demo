import puppeteer from "puppeteer";
import { setTimeout } from "timers/promises"; // To wait for the page to load

(async () => {
  // Launch the browser in headful mode, open the page, navigate to the url, and set the viewport
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("http://swap.defillama.com/");
  await page.setViewport({ width: 1366, height: 768 });

  // Type in select input field and select the first option
  await page.type("#react-select-2-input", "Arbitrum One");
  await page.click("#react-select-2-listbox > div:nth-child(1)");

  // focus on the input field, delete the text, and type in the new text
  await page.click(
    "#__next > div > div > div.sc-889ee977-0.gCbopq > main > div.sc-55ee4011-1.cZHlms > div.sc-55ee4011-3.dlZmAt > div.sc-55ee4011-0.iXoIVV > div.css-1urcov8 > div:nth-child(1) > div.css-1k491an > div > input"
  );
  for (let i = 0; i < 2; i++) {
    await page.keyboard.press("Backspace");
  }
  await page.type(
    "#__next > div > div > div.sc-889ee977-0.gCbopq > main > div.sc-55ee4011-1.cZHlms > div.sc-55ee4011-3.dlZmAt > div.sc-55ee4011-0.iXoIVV > div.css-1urcov8 > div:nth-child(1) > div.css-1k491an > div > input",
    "12"
  );

  // Click on the dropdown button and type in the input field
  await page.click(
    "#__next > div > div > div.sc-889ee977-0.gCbopq > main > div.sc-55ee4011-1.cZHlms > div.sc-55ee4011-3.dlZmAt > div.sc-55ee4011-0.iXoIVV > div.css-1urcov8 > div:nth-child(1) > div.css-1k491an > button > svg"
  );
  await page.type(".chakra-modal__content > div:nth-child(2) > input", "WBTC");

  // Wait for the dropdown to load and click on the first option
  await setTimeout(1000);
  await page.click(
    ".chakra-modal__content > div.List > div:nth-child(1) > div"
  );

  // Click on the dropdown button and type in the input field
  await page.click(
    "#__next > div > div > div.sc-889ee977-0.gCbopq > main > div.sc-55ee4011-1.cZHlms > div.sc-55ee4011-3.dlZmAt > div.sc-55ee4011-0.iXoIVV > div.css-1urcov8 > div:nth-child(3) > div.css-1k491an > button > svg"
  );
  await page.type(".chakra-modal__content > div:nth-child(2) > input", "USDC");

  // Wait for the dropdown to load and click on the second option
  await setTimeout(1000);
  await page.click(
    ".chakra-modal__content > div.List > div:nth-child(1) > div:nth-child(2)"
  );

  // Wait for the routes to load and click on the second route
  await setTimeout(10000);
  await page.click(
    "#__next > div > div > div.sc-889ee977-0.gCbopq > main > div.sc-55ee4011-1.cZHlms > div.sc-55ee4011-3.dlZmAt > div.sc-55ee4011-2.fcGAPg > div:nth-child(5)"
  );

  // Leave window open
})();
