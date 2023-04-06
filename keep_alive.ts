const express = require('express');
const puppeteer = require('puppeteer-core');
import axios from "axios"
const jju = require('jju');
let {sleep} = require("./strt")

const keep_alive = () =>{
const app = express();
const port = 3000;
(async ()=> {
  
})();
  process.setMaxListeners(30);

app.get('/', (req: any, res: any)=>{
   res.status(200).send("bot running..")
//    res.sendStatus(200)
})

setInterval(async ()=> {
  try {

  const browser = await puppeteer.launch({ 
    headless: true, 
    slowMo: 10,
    executablePath: '/nix/store/x205pbkd5xh5g4iv0g58xjla55has3cx-chromium-108.0.5359.94/bin/chromium-browser',
    // executablePath: 'chromium-browser',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

let page = await browser.newPage();
    await page.goto('https://tgubot.iscteam.repl.co/')
    
await page.screenshot({ path: 'exam2.png' });
    await sleep(150000)
   await browser.close()
      } catch (error) {
    console.log(error)
  }
}, 200000);
  
  
app.listen(port, () => console.log(`Bot running on http://localhost:${port}`));
}
export default keep_alive