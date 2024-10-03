const readline = require ("node:readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Mitu korda ma sind äratan?", äratamisKordus=> {
    let kord = 1
    while (kord <= äratamisKordus) {
        console.log("Tõuse ja sära!")
        kord++
    }
    rl.close()
     
})