    //Impoerte da função quer destrói elemento
    import { destroiElementos } from './destroiElementos'
    import { crudGetUrls } from './crudGetUrls'




    export function getValueBuscaTermoTipo(){
        let valor_digitado_input = document.querySelector('.input-busca').value
       let categoria = document.querySelector('.tipo-arquivo').textContent
    
       let texto_tipo_arquivo = []
       texto_tipo_arquivo.push(valor_digitado_input)
       texto_tipo_arquivo.push(categoria)
    
        return texto_tipo_arquivo
    }


    export function mudaTipo(){
        let categoria = document.querySelector('.tipo-arquivo')
        let opcao_categoria = document.querySelectorAll('.sub-menu-busca li')
        
        opcao_categoria.forEach(function(e){
            e.addEventListener('click',function(){
                categoria.textContent = e.childNodes[0].textContent
                
            })
        })
    }

    export function clickLupa(){
        let lupa = document.querySelector('.lupa')
        lupa.addEventListener('click',function(){
            trocaConteudo() 
        })
    }

    export function enterInput(){
        let input_busca = document.querySelector('.input-busca') 
        input_busca.addEventListener('keydown',function(evt){//Evendo ao dar enter no input
          
            if(evt.code === 'Enter'){ 
                evt.preventDefault() // Evita o comportamento padrão
                trocaConteudo()
                
            }
            
        }) 
    }

    export function tranformaInputPositionFixed(){
        let tela = document.querySelector('html');//Pega o elemento html
        let campo_busca = document.querySelector('.campo-busca')// Pega o emelento com class campo-busca
        let setTop_campo_busca = campo_busca.offsetTop// pega a distância do elemnto do topo da tela

            window.onscroll = function(){

                if (tela.scrollTop >= setTop_campo_busca) {

                    campo_busca.style.width = '100%'
                    campo_busca.style.margin = '0'
                    campo_busca.style.position = 'fixed'
                    campo_busca.style.top = '0'
                }else{
                    campo_busca.style.width = '70%'
                    campo_busca.style.margin = '0 15%'
                    campo_busca.style.position = 'absolut'
                    campo_busca.style.top = '40%'
                }
                
            }
        
    }

  function trocaConteudo(){
        document.querySelector('.box-resltado-busca').innerHTML =''
        document.querySelector('.cabecario').style.heigth = '0'
        let parametros_de_busca = getValueBuscaTermoTipo()
        document.querySelector('.cabecario').style.display = 'none'//Some com o header
        document.querySelector('.secao-recebe-imagens').style.display = 'block'
        destroiElementos('.cabecario')
        destroiElementos('.box-conteudo')

        crudGetUrls(parametros_de_busca[0],parametros_de_busca[1])
         
  }