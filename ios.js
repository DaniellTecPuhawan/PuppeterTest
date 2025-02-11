const puppeteer = require('puppeteer');
const { KnownDevices } = puppeteer;
const iPhone = KnownDevices['iPhone 12']; // Emula un iPhone 12

(async () => {
  const browser = await puppeteer.launch({ headless: false }); // Mostrar navegador
  const page = await browser.newPage();
  await page.emulate(iPhone); // Aplicar emulación de iPhone
  
  // 1. Navegar a Google
  const response = await page.goto('https://www.google.com');
  console.log(`🔍 Estado de Google: ${response.status()}`);



  // 6. Esperar a que cargue la página del primer resultado
  await page.waitForNavigation();

  console.log('✅ Se hizo clic en el primer resultado.');

  // 7. Cerrar el navegador
  await browser.close();
})();
