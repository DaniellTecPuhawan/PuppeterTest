const puppeteer = require('puppeteer');

const { KnownDevices } = puppeteer;

const iPhoneDevice = KnownDevices['iPhone 12']; 

(async () => {
 
  const browser = await puppeteer.launch({ headless: false });

  const page = await browser.newPage();

  await page.emulate(iPhoneDevice); 

  
  const response = await page.goto('https://aenatravel.aena.es/es/');

  if (response.status() === 200) {

    console.log('✅ Response 200');

  } else {

    console.log(`⚠️ Error: Código de estado ${response.status()}`);

  }

 
  console.log('🌐 Navegador se queda abierto. Cierra manualmente cuando desees.');
  
 
  await new Promise(() => {}); 

})();
