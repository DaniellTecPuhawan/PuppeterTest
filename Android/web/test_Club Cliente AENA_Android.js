const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false, // Asegura que el navegador se vea
  });

  const page = await browser.newPage();

  // Navega a la página de Google
  await page.goto('https://usuarios.aena.es/?gig_ssoToken=eu1_tk1.Yv4weENV7BvBRILT7Vz2qlB9oMiyshdoEqFXX-u1SN4&gig_originSite=clubCliente');

  // Espera a que aparezca el banner de cookies y haz clic en el botón de aceptación
  try {
    await page.waitForSelector('button#cookie-accept', { timeout: 5000 }); // Selector del botón de "Aceptar" (ajusta el selector según sea necesario)
    await page.click('button#cookie-accept'); // Clic en "Aceptar"
    console.log('🍪 Cookies aceptadas');
  } catch (e) {
    console.log('⚠️ No se encontró el banner de cookies.');
  }

  // Realizar el login (ajustando los selectores y pasos de interacción con los campos de login)
  await page.waitForSelector('#gigya-login-form > .gigya-layout-row > .gigya-layout-cell > .gigya-composite-control > .gigya-input-text');
  await page.type('#gigya-login-form > .gigya-layout-row > .gigya-layout-cell > .gigya-composite-control > .gigya-input-text', 'daniell.tec@entelgy.com');
  console.log('✉️ Correo ingresado');

  await page.waitForSelector('#gigya-login-form > .gigya-layout-row > .gigya-layout-cell > .gigya-composite-control > .gigya-input-password');
  await page.type('#gigya-login-form > .gigya-layout-row > .gigya-layout-cell > .gigya-composite-control > .gigya-input-password', 'Arbust0@EN@1');
  console.log('🔑 Contraseña ingresada');

  await page.waitForSelector('#gigya-login-form > .gigya-layout-row > .gigya-layout-cell > .gigya-composite-control > .gigya-input-submit');
  await page.click('#gigya-login-form > .gigya-layout-row > .gigya-layout-cell > .gigya-composite-control > .gigya-input-submit');
  console.log('✅ Enviado formulario de login');

  // Espera indefinidamente para que el navegador se quede abierto
  await new Promise(() => {}); 
})();
