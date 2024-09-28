const readline = require ("node:readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question("Sisestage kirja teema pealkiri: ", pealkiri =>{
    rl.question("Sisestage kirja suurus (MB): ", suurus =>{
        rl.question("Kas kirjaga on kaasas fail(jah/ei)?:", manus =>{
            //let
            //let 
            //let 

            if (pealkiri == 0 || suurus > 1 || manus == "jah" || manus == "Jah" || manus == "JAH"){
                console.log("See kiri on spämm!!!")
            } else {
                console.log("See kiri ei ole spämm")
            } 
rl.close()
        })
    })
})    