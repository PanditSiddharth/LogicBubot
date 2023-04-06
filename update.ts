const { Telegraf } = require('telegraf');
const { exec } = require('child_process');
let update = (bot: any, client: any) => {
  
  bot.command('update', (ctx: any) => {
    ctx.reply('Updating GitHub repository...');
    exec("cd ./ && git fetch --all && git reset --hard origin/main", async (error: any, stdout: any, stderr: any) => {
      if (error) {
        ctx.reply(`Error GitHub repository: ${error.message} \nPlease try one time more`);
        return;
      }
      if (stderr) {
        ctx.reply(`STDError updating GitHub repository: ${stderr} \nPlease try one time more`);
        return;
      }
      ctx.reply('GitHub repository updated successfully!');
      client.stop()
      bot.stop('SIGINT')
      bot.stop('SIGTERM')
      
      await sleep(15000)
      exec('./node_modules/.bin/ts-node index', (error: any, stdout: any, stderr: any) => {
        if (error) {
          ctx.reply(`Error restarting Replit instance: ${error.message}`);
          return;
        }
        if (stderr) {
          ctx.reply(`Error restarting Replit instance: ${stderr}`);
          return;
        }
        ctx.reply('Replit instance restarted successfully!');
      });
    });
  });
}
function sleep(ms: any) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default update