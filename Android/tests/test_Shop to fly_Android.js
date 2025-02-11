const puppeteer = require('puppeteer'); //Library

const { KnownDevices } = puppeteer; //Library

const androidDevice = KnownDevices['Galaxy S5']; // // Device model
(async () => {

  const browser = await puppeteer.launch(); // Open browser

  const page = await browser.newPage(); // New page

  await page.emulate(androidDevice);

  // Navegar a la página y capturar la respuesta
  const response = await page.goto('https://shoptofly.aena.es/shop/es/'); // Visit URL

  // Checks 200 response
  if (response.status() === 200) {

    console.log('✅ Respuesta exitosa (200 OK)');

  } else {

    console.log(`⚠️ Error: Código de estado ${response.status()}`);

  }

  await browser.close();

})();
