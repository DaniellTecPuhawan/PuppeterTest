const puppeteer = require('puppeteer');
const { KnownDevices } = puppeteer;
const iPhone = KnownDevices['iPhone 12']; // Emula un iPhone 12

(async () => {
  // Lanzar el navegador en modo visible (no headless)
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.emulate(iPhone);

  // Navegar a la página y capturar la respuesta
  const response = await page.goto('https://foodtofly.aena.es/es/');

  // Comprobar si el estado es 200
  if (response.status() === 200) {
    console.log('✅ Respuesta exitosa (200 OK)');
  } else {
    console.log(`⚠️ Error: Código de estado ${response.status()}`);
  }

  await browser.close();
})();
