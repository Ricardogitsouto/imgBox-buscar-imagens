import { criaModalImage } from './criaModalImage'

export function criaContainnerImagens(dados){
    console.log(dados);
    
    let arrayUrls = []//Arrey que vai quardar as urls

    //extraindo as urls e quardando no array----------------
    for (let index = 0; index < dados.hits.length; index++) {
         arrayUrls.push(dados.hits[index].webformatURL);
    }

    //-----------------------------------------------------------
    //Pegar section que vai guardar o containner de imagens
    let secao_recebe_imagens= document.querySelector('.secao-recebe-imagens')
    let box_resultado_busca = document.querySelector('.box-resultado-busca')
    box_resultado_busca.classList.remove("box-resultado-vidoes-busca")

    box_resultado_busca.innerHTML = `
        <h2 class = 'titulo-resultado' >Resultados para ${dados.hits[0].tags}</h2>
        <div class="linha-grid-a">
            <img src="${arrayUrls[0]}" class="img-grid" alt = "Imagem ${dados.hits[0].tags}"></img>
            <img src="${arrayUrls[1]}" class="img-grid" alt = "Imagem ${dados.hits[0].tags}"></img>
            <img src="${arrayUrls[2]}" class="img-grid" alt = "Imagem ${dados.hits[0].tags}"></img>
        </div>
        <div class="linha-grid-b">
            <img src="${arrayUrls[2]}" class="img-grid" alt = "Imagem ${dados.hits[0].tags}"></img>
            <img src="${arrayUrls[4]}" class="img-grid" alt = "Imagem ${dados.hits[0].tags}"></img>
            <img src="${arrayUrls[5]}" class="img-grid" alt = "Imagem ${dados.hits[0].tags}"></img>
        </div>
        <div class="linha-grid-c">
            <img src="${arrayUrls[6]}" class="img-grid" alt = "Imagem ${dados.hits[0].tags}"></img>
            <img src="${arrayUrls[7]}" class="img-grid" alt = "Imagem ${dados.hits[0].tags}"></img>
            <img src="${arrayUrls[8]}" class="img-grid" alt = "Imagem ${dados.hits[0].tags}"></img>
        </div>
        <div class="linha-grid-d">
            <img src="${arrayUrls[9]}" class="img-grid" alt = "Imagem ${dados.hits[0].tags}"></img>
            <img src="${arrayUrls[10]}" class="img-grid" alt = "Imagem ${dados.hits[0].tags}"></img>
            <img src="${arrayUrls[11]}" class="img-grid" alt = "Imagem ${dados.hits[0].tags}"></img>
        </div>
        <div class="linha-grid-e">
            <img src="${arrayUrls[12]}" class="img-grid" alt = "Imagem ${dados.hits[0].tags}"></img>
            <img src="${arrayUrls[13]}" class="img-grid" alt = "Imagem ${dados.hits[0].tags}"></img>
            <img src="${arrayUrls[14]}" class="img-grid" alt = "Imagem ${dados.hits[0].tags}"></img>
        </div>
        <div class="linha-grid-f">
            <img src="${arrayUrls[15]}" class="img-grid" alt = "Imagem ${dados.hits[0].tags}"></img>
            <img src="${arrayUrls[16]}" class="img-grid" alt = "Imagem ${dados.hits[0].tags}"></img>
        </div>
            <div class="linha-grid-g">
            <img src="${arrayUrls[17]}" class="img-grid" alt = "Imagem ${dados.hits[0].tags}"></img>
            <img src="${arrayUrls[18]}" class="img-grid" alt = "Imagem ${dados.hits[0].tags}"></img>
            <img src="${arrayUrls[19]}" class="img-grid" alt = "Imagem ${dados.hits[0].tags}"></img>
        </div>
        <div class="linha-grid-h">
            <img src="${arrayUrls[20]}" class="img-grid" alt = "Imagem ${dados.hits[0].tags}"></img>
            <img src="${arrayUrls[21]}" class="img-grid" alt = "Imagem ${dados.hits[0].tags}"></img>
            <img src="${arrayUrls[22]}" class="img-grid" alt = "Imagem ${dados.hits[0].tags}"></img>
        </div>
        <div class="linha-grid-i">
            <img src="${arrayUrls[23]}" class="img-grid" alt = "Imagem ${dados.hits[0].tags}"></img>
            <img src="${arrayUrls[24]}" class="img-grid" alt = "Imagem ${dados.hits[0].tags}"></img>
            <img src="${arrayUrls[25]}" class="img-grid" alt = "Imagem ${dados.hits[0].tags}"></img>
        </div>
    `
    // console.log(box_resultado_busca);
    criaModalImage()
    
}