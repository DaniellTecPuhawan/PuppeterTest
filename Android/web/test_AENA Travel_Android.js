const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false, // Asegura que el navegador se vea
  });

  const page = await browser.newPage();

  // Navega a la página de Google
  await page.goto('https://usuarios.aena.es/?gig_ssoToken=eu1_tk1.7aWGPJKGdFLZA9_XEda5fu1mnbpTKpN7p9mK8i2DXIU&gig_originSite=travel');

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
  await page.type('#gigya-login-form > .gigya-layout-row > .gigya-layout-cell > .gigya-composite-control > .gigya-input-text', 'daniell.tec@entelgy.com', { timeout: 5000 });
  console.log('✉️ Correo ingresado');

  await page.waitForSelector('#gigya-login-form > .gigya-layout-row > .gigya-layout-cell > .gigya-composite-control > .gigya-input-password');
  await page.type('#gigya-login-form > .gigya-layout-row > .gigya-layout-cell > .gigya-composite-control > .gigya-input-password', 'Arbust0@EN@1', { timeout: 5000 });
  console.log('🔑 Contraseña ingresada');

  // Espera a que el botón de submit esté disponible y haz clic
  try {
    await page.waitForSelector('#gigya-login-form > .gigya-layout-row > .gigya-layout-cell > .gigya-composite-control > .gigya-input-submit', { timeout: 5000 });
    const submitButton = await page.$('#gigya-login-form > .gigya-layout-row > .gigya-layout-cell > .gigya-composite-control > .gigya-input-submit');

    // Verificar si el botón está habilitado
    const isDisabled = await submitButton.evaluate(button => button.disabled);
    if (!isDisabled) {
      await submitButton.click();
      console.log('✅ Formulario de login enviado');
    } else {
      console.log('⚠️ El botón de submit está deshabilitado.');
    }
  } catch (e) {
    console.log('⚠️ No se encontró el botón de submit.');
  }

  // Espera indefinidamente para que el navegador se quede abierto
  await new Promise(() => {}); 
})();
