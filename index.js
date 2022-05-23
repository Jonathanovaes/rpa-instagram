const fs = require('fs').promises;
const playwright = require('playwright');

async function listarArquivosDoDiretorio(diretorio, arquivos) {

    if(!arquivos)
        arquivos = [];

    let listaDeArquivos = await fs.readdir(diretorio);
    for(let k in listaDeArquivos) {
        let stat = await fs.stat(diretorio + '/' + listaDeArquivos[k]);
        if(stat.isDirectory())
            await listarArquivosDoDiretorio(diretorio + '/' + listaDeArquivos[k], arquivos);
        else
            arquivos.push(listaDeArquivos[k]);
    }

    return arquivos;

}

async function test() {
    let arquivos = await listarArquivosDoDiretorio('C:/Users/Lia/Documents/imagens an'); // coloque o caminho do seu diretorio
    console.log(arquivos);
    var palavra = arquivos[2];
    var total = palavra.length;
    console.log(palavra.substring(0,total-4))
    const browser = await playwright['chromium'].launch({
    headless: false
  });
    const context = await browser.newContext();
    // Create a new page inside context.
    const page = await context.newPage();
    await page.goto(`https://www.instagram.com/`);
    await page.pause();
    await page.close();
    await context.close();
    await browser.close();
    return arquivos;
}

test();