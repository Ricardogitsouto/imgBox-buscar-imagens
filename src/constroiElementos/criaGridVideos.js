export function criaGridVideos(data){

    
    let arrayUrlsVideos = []//Arrey que vai quardar as urls

    // extraindo as urls e quardando no array----------------

    for (let index = 0; index < data.hits.length; index++) {
        arrayUrlsVideos.push(data.hits[index].videos);
    }
    
 //-----------------------------------------------------------
    // Pegar section que vai guardar o containner de imagens
    let secao_recebe_imagens= document.querySelector('.secao-recebe-imagens')
    let box_resultado_busca = document.querySelector('.box-resultado-busca')

    box_resultado_busca.classList.add("box-resultado-vidoes-busca");

    box_resultado_busca.innerHTML = '';

    arrayUrlsVideos.forEach(function(x){

        box_resultado_busca.innerHTML += `

            <video id="myVideo" width="100%" height="250" controls>
                <source src="${ x.tiny.url }" type="video/mp4">
                <video src="${ x.tiny.url }" type="video/webm">
                <video src="${ x.tiny.url }" type="video/ogg">
                Your browser does not support HTML5 video.
            </video>
        `
    })
}