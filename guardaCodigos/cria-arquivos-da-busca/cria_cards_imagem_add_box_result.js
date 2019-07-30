export function cria_cards_imagem_add_box_result(array_urls){

    let box_resultado = document.querySelector('.box-resltado-busca');
    // // console.log(box_reultado);
    

    array_urls.forEach(element => {
        
        let card = document.createElement('div');
        card.className = 'card-imagem-busca-retornada'
        card.style.backgroundImage = 'url('+ element +')';

        box_resultado.appendChild(card)
    });

}