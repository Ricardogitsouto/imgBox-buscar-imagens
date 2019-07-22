import { cria_cards_imagem_add_box_result } from './cria-arquivos-da-busca/cria_cards_imagem_add_box_result'

export function crudGetUrls(termo_digitado,tipo){
let termo = termo_digitado; 
let tipo_escolhido = tipo;

var API_KEY = '12790737-480e38f5bf86dcc371e0ad7e3';
var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent(termo);


    $.getJSON(URL, function(data){
        let arrayUrls = [];
        
        if (parseInt(data.totalHits) > 0){
            
            data.hits.forEach(element => {
                arrayUrls.push(element.largeImageURL);  
                // console.log(element);
            });
            cria_cards_imagem_add_box_result(arrayUrls)

        }else {
           console.log('Não teve retorno, pesquise outra coisa');
        }

    });


}