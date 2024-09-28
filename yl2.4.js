const readline = require ("node:readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let istekoht

rl.question("Kas soovite valida istekohta ise (vasta: ise) või soovite, et istekoht loositakse (vasta: loos)?", ise=> {
    if (ise  == "ise"||ise == "Ise"||ise =="ISE")
        rl.question("Kas soovite istuda akna ääres (vasta: aken) või mitte (vasta: muu)?", aken=>{
            if (aken  == "aken"||aken == "Aken"||aken =="AKEN"){
                console.log("Valisite ise. Aknakoht")
            } else {
                console.log("Valisite ise. Vahekäigukoht.")
            } 
            rl.close(console.log("Ilusat reisi!"))
        })
        else if (ise == "loos"||ise == "Loos"||ise =="LOOS"){
            let loos = Math.random().toFixed(2)
                if (loos <= 1/3){
                   //testimise eesmärgiks kuvan math.round funktiooni tulemuse.
                    console.log("See on aknakoha number", loos)
                    console.log("Istekoht loositi. Aknakoht.")
                } else {
                    console.log("See on vahekäigukoha number", loos)
                    console.log("Istekoht loositi. Vahekäigukoht.")
                }
                rl.close(console.log("Ilusat reisi!"))
            }
            
    })
