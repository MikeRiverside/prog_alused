const readline = require ("node:readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question("Mitu pöialpoissi tahab õunu? " , pöialpoisid=> {
    let ounad = 14
    for (let poiss = 1; poiss <= pöialpoisid; poiss++){
         let ounadPoisile =Math.ceil(Math.random()*2);
        console.log(ounadPoisile)
        ounad = ounad - ounadPoisile
    
    
    }
    console.log("Lumivalgele jääb " + ounad + " õuna.")
    rl.close()
})