const puppeteer = require('puppeteer'); //Library

const { KnownDevices } = puppeteer; //Library

const androidDevice = KnownDevices['Galaxy S5']; // Device model

(async () => {

  const browser = await puppeteer.launch(); // Open browser

  const page = await browser.newPage(); // New page

  await page.emulate(androidDevice);

  const response = await page.goto('https://aenatravel.aena.es/es/'); // Visit URL

  // Checks 200 response
  if (response.status() === 200) {

    console.log('✅ Response 200');

  } else {

    console.log(`⚠️ Error: Código de estado ${response.status()}`);

  }

  await browser.close();

})();
