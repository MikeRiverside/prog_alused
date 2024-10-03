const readline = require ("node:readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Mitu täringut veeretan?", täringuArv=> {
    for (let kord = 1; kord <= täringuArv; kord++){
        console.log(Math.ceil(Math.random()*6));
    
    
    }
    rl.close()
})