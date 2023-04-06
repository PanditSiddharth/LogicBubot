const { Telegraf } = require('telegraf');
const { exec } = require('child_process');
import Chk from "./helpers/chk"
import {closeServer} from "./keep_alive"

let update = async (bot: any, client: any, e: any) => {
let y: any = new Chk(client, e)
  
   let idd = await y.edit('Importing GitHub repository...', {d: false});
    exec("cd ./ && git fetch --all && git reset --hard origin/main", async (error: any, stdout: any, stderr: any) => {
      if (error) {
        y.edit(`Error GitHub repository: ${error.message} \nPlease try one time more`, {id: idd.id});
        return;
      }
      if (stderr) {
        await y.edit(`Wait while importing new code...`, {d: false, id: idd.id});
        return await exec("cd ./ && git fetch --all && git reset --hard origin/main", async (er: any, sout: any, sr: any) => {
        if(er)
          return y.edit("unable to import git try one time more");
         else {
             await sleep(5000)
             await y.edit('Imported new updates Successfully\n\nNow restarting server please wait...', {d: false, id: idd.id});
             
           
         exec('./node_modules/.bin/pm2 restart 0', (r: any, ut: any, st: any) => {
        if (r) 
          return y.edit(`Error restarting Replit instance: ${r.message}`, {id: idd.id});
        
        if (st) 
          return y.edit(`Error restarting Replit instance: ${st}`, {id: idd.id});
        
        y.edit('Successfully updated: Restarted bot', {id: idd.id});
      })
           
         }
          
        })
        
      }
      y.edit('Imported new updates Successfully\nNow restarting server please wait...', {d: false, id: idd.id});
      // await client.destroy();
      // await sleep(60000)
      
      // exec('kill $(lsof -t -i :3000)', (error: any, stdout: any, stderr: any) => {})
      // closeServer()
      // bot.stop('SIGINT')
      // bot.stop('SIGTERM')
      
      await sleep(5000)
      console.log("yes")
      exec('./node_modules/.bin/pm2 restart 0', (error: any, stdout: any, stderr: any) => {
        if (error) 
          return y.edit(`Error restarting Replit instance: ${error.message}`, {id: idd.id});
        
        if (stderr) 
          return y.edit(`Error restarting Replit instance: ${stderr}`);
        
        y.edit('Successfully updated: Restarted bot');
      })
    });
}

async function sleep(ms: any) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default update
