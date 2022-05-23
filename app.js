const playwright = require('playwright');
function auto(){
 (async () => {
   var cont = 1
  const browser = await playwright['chromium'].launch({
    headless: false
  });
  const context = await browser.newContext();
  // Create a new page inside context.
    const page = await context.newPage();
    await page.goto(`https://almeidaenogueira.novajus.com.br/TimeSheet/HorasTrabalhadas/EditHoraTrabalhada/67570`);
    await page.pause();
    await page.close();
    await context.close();
    await browser.close();
  
})();
}

auto();
//module.exports = auto;