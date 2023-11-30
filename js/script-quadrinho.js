const comic = [107628, 105868, 73554, 107702, 112185, 114587, 109751, 107812, 109698, 107813, 78377, 114322];
api_key = '702d811c59eb340082acbd81a7ccc2ff';
// link = "https://gateway.marvel.com:443/v1/public/comics/${comic[i]}?apikey=702d811c59eb340082acbd81a7ccc2ff"
const searchResultados = document.querySelector(".search-resultados");
let date = new Date();
console.log(date.getTime());
async function getResultados(){
    
    const resultados = [];
    for(let i=0; i < comic.length;i++){
        const data1 = await fetch('https://gateway.marvel.com:443/v1/public/comics/'+comic[i]+'?ts=1701219239033&apikey=702d811c59eb340082acbd81a7ccc2ff&hash=f99bffc91b7a245094a0f1d864dca0b9', {
            method: "GET"
        }).then(res => res.json());
        
        resultados.push(await data1)  ; 
    }
   
    resultados.map((result) => {
        const imageWraper = document.createElement('div');
        imageWraper.classList.add("search-resultado");
        const image = document.createElement('img');
        image.src = result.data["results"]["0"]["thumbnail"]["path"]+"."+result.data["results"]["0"]["thumbnail"]["extension"];
        console.log(result.data["results"]);
        image.alt = result.data["results"]["0"]["title"];
        const imageName = document.createElement('a');
        imageName.textContent = result.data["results"]["0"]["title"] + ' | ' + 'US$ '+ result.data["results"]["0"]["prices"]["0"]["price"] + ' | '+ result.data["results"]["0"]["pageCount"] + " páginas" +' | Criador: ' + result.data["results"]["0"]["creators"]["items"]["0"]["name"];
        imageName.classList.add("cor-texto");
        const divBotao = document.createElement('div');
        divBotao.classList.add("botaoDiv");
        const addCart = document.createElement('button');
        addCart.classList.add("add-to-cart-btn")
        const botao = document.createElement('i');
        botao.classList.add("fas");
        botao.classList.add("fa-shopping-cart");
        botao.classList.add("cart-icon");
        botao.textContent = "Add to Cart"

        imageWraper.appendChild(image);
        imageWraper.appendChild(imageName);
        imageWraper.appendChild(addCart);
        imageWraper.appendChild(divBotao);
        addCart.appendChild(botao);
        divBotao.appendChild(addCart);
        searchResultados.appendChild(imageWraper)
    })
    
    
}

getResultados();    