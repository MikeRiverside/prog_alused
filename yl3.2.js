const readline = require ("node:readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Sisestage ringide arv: ", ringid=> {
    for (let porgand = 0; kord <= äratamisKordus; kord++){
        console.log(porgand)
    }
   
    rl.close()
    
}) 