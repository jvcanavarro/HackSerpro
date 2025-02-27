let listaContainer = document.getElementById("lista")
var imoveis = []


let cifras = document.getElementById('cifras')

for (let i = 0; i < 5; i++) {
    
    let cifra = document.createElement('span')
    cifra.innerHTML = "$"
    cifra.className = 'cifra off'

    cifra.onclick = () => {

        for (let j = 0; j < 5; j++) {
            
            cifras.children[j].className = i >= j ?  'cifra on' : 'cifra off'
            
        }

        let l = []

        console.log(imoveis);
        

        for(let imovel of imoveis){
            

            if(imovel.normal_value_construcao >= i*.2) l.push(imovel)

        }

        render(l)
        

    }

    cifras.appendChild(cifra)

    
}

cifras.childNodes[0].className = 'cifra on'

function render(ims){

    listaContainer.innerHTML = ''

    for(let imovel of ims){

        let itemContainer = document.createElement('div')
        itemContainer.className = 'imovel'

        itemContainer.onclick = (event) => window.location.href = base + 'sample/' + imovel.index

        let log = document.createElement('i')
        log.className ="far fa-building casinha"

        let tit = document.createElement('h2')
        tit.innerHTML = imovel.bairro

        let end = document.createElement('h3')
        end.innerHTML = imovel.endereco

        let blocks = [log, tit, end]

        for(i of blocks) itemContainer.appendChild(i)

        listaContainer.appendChild(itemContainer)

    }        

}



function lista(bairro){

    console.log(decodeURI(bairro));
    

    $.ajax({

    url : `http://localhost:5000/bairro/${bairro}`,
    crossDomain: true,
    type: 'get',

    erro : (xhr, status, error) => console.log(error),

    success : (result) => {

        result.sort((a, b) => a.normal_value_construcao - b.normal_value_construcao)

        imoveis = result
        
        render(imoveis)
        
        
    }

})}