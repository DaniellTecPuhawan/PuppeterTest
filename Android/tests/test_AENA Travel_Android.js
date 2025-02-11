const puppeteer = require('puppeteer');
const { KnownDevices } = puppeteer;
const androidDevice = KnownDevices['Galaxy S5']; // Emula un Galaxy S5

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.emulate(androidDevice);

  // Navegar a la página y capturar la respuesta
  const response = await page.goto('https://aenatravel.aena.es/es/');

  // Comprobar si el status es 200
  if (response.status() === 200) {
    console.log('✅ Respuesta exitosa (200 OK)');
  } else {
    console.log(`⚠️ Error: Código de estado ${response.status()}`);
  }

  await browser.close();
})();
