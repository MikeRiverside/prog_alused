const readline = require ("node:readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Mitu korda ma sind äratan?", äratamisKordus=> {
    console.log(äratamisKordus)
    rl.close()
    
}) 
