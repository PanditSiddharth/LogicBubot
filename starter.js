const { exec, spawn } = require('child_process');


process.on('uncaughtException', function(err) {
  console.log('Caught exception: ' + err);
});
// return spawn(`./node_modules/.bin/pm2`, ['list', '|', 'grep', "-c", `"online"`], {stdio: 'inherit'})
const child = spawn('./node_modules/.bin/pm2 list | grep -c "online"', {
  // stdio: 'inherit',
  shell: true
});

child.stdout.on("data", (out) => {
  out = out.toString();
  console.log(out)

  if (out == 1)
    console.log("Userbot already running.. try *ping command")
  else if (out == 0) {
    exec('./node_modules/.bin/pm2 start index.ts --instances 1 --interpreter ./node_modules/.bin/ts-node', (error, stdout, std) => {
      if (error)
        return console.log(error)
      if (stdout)
        return console.log(std)
      console.log(stdout)
      console.log("Userbot started try *ping command..")
    })
  }

  else {
    exec('./node_modules/.bin/pm2 delete all && ./node_modules/.bin/pm2 start index.ts --instances 1 --interpreter ./node_modules/.bin/ts-node', (error, stdout, std) => {
      if (error)
        return console.log(error)
      if (stdout)
        return console.log(std)
      console.log(stdout)
      console.log("Userbot started try *ping command..")
    })
  }

})

// 