const lista = [30, 34, 36, 40, 57, 106, 107, 112, 119, 136, 141, 145, 149, 154, 157, 160, 162, 165, 196, 201, 204, 207, 208, 209, 210, 490, 498, 502, 541, 566];

// let inpuData = ""
// let page = 1;
const heroDeck = [];
async function getResults(){
    // const inputData = inputEl.value;
    const results = [];
    for(let i=0; i < lista.length;i++){
        const data = await fetch('https://akabab.github.io/superhero-api/api/id/'+lista[i]+'.json', {
            method: "GET"
        }).then(res => res.json());
        
        results.push(await data)   ; 
    }
    results.map((result) => {
        // destructuring
        const name1 = result.name;
        const image1 = result.images.sm;
        const forca1 = result.powerstats.strength;
        const combate1 = result.powerstats.combat;
        const intelig1 = result.powerstats.intelligence;

        const customJsonObject = {
            name : name1,
            image: image1,
            attributes: {
                strenght: forca1,
                combate: combate1,
                inteligencia: intelig1,
            },
            }

            heroDeck.push(customJsonObject);
            
    })

    
    console.log(heroDeck);
}
getResults();