import { criaContainnerImagens } from './constroiElementos/criaContainnerImagens'
import { criaGridVideos } from './constroiElementos/criaGridVideos'


export function crudGetArguivo(param_termo,paramTipo_arquivo){
// console.log(param_termo,paramTipo_arquivo);
if(paramTipo_arquivo == 'Imagens')paramTipo_arquivo='all'
if(paramTipo_arquivo == 'Fotos')paramTipo_arquivo='photo'
if(paramTipo_arquivo == 'Vetores')paramTipo_arquivo='vector'
if(paramTipo_arquivo == 'Ilustrações')paramTipo_arquivo='illustration'

// console.log(paramTipo_arquivo);


    if (paramTipo_arquivo == 'all'|| paramTipo_arquivo == 'photo'|| paramTipo_arquivo == 'vector'||paramTipo_arquivo == 'illustration') {
        var API_KEY = '12790737-480e38f5bf86dcc371e0ad7e3';
        var orientacao = 'horizonta'
        var per_page = 100;
        var lang = 'pt';
        var safesearch = false
        var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent(param_termo)+"&per_page="+per_page+"&lang="+lang+"&safesearch="+safesearch+"&orientation="+orientacao+"&image_type="+paramTipo_arquivo;

        $.getJSON(URL, function(data){
            let arrayUrls = [];
            
            if (parseInt(data.totalHits) > 0){
                criaContainnerImagens(data);

            }else {
            console.log('Não teve retorno, pesquise outra coisa');
            }
        });
    }
    else if (paramTipo_arquivo == 'Vídeos') {
                var API_KEY = '12790737-480e38f5bf86dcc371e0ad7e3';
                var idioma = "pt"
                var URL = "https://pixabay.com/api/videos/?key="+API_KEY+"&lang="+idioma+"&q="+encodeURIComponent(param_termo);
                
                $.getJSON(URL, function(data){
                    if (parseInt(data.totalHits) > 0){
                        criaGridVideos(data)
                    }else{
                        console.log('No hits');
                    } 
                });
    }

}