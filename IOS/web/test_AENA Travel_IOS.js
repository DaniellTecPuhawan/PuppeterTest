const puppeteer = require('puppeteer');
const { KnownDevices } = puppeteer;
const iPhoneDevice = KnownDevices['iPhone 12']; // Emula un iPhone 12

(async () => {
  // Lanzar Puppeteer en modo visible (headless: false)
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.emulate(iPhoneDevice); // Emula un dispositivo iPhone 12

  // Navegar a la página y capturar la respuesta
  const response = await page.goto('https://aenatravel.aena.es/es/');

  // Comprobar si el status es 200
  if (response.status() === 200) {
    console.log('✅ Respuesta exitosa (200 OK)');
  } else {
    console.log(`⚠️ Error: Código de estado ${response.status()}`);
  }

  // Mantener el navegador abierto indefinidamente con un bucle
  console.log('🌐 Navegador se queda abierto. Cierra manualmente cuando desees.');
  
  // Bucle infinito para mantener el proceso activo y el navegador abierto
  await new Promise(() => {}); // Esto asegura que el proceso no termine

})();
