const readline = require ("node:readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Mitu korda ma sind äratan?", äratamisKordus=> {
    for (let kord = 1; kord <= äratamisKordus; kord++){
        console.log(kord)
    }
   
    rl.close(console.log("Tõuse ja sära!"))
    
}) 
