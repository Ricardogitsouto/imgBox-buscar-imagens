import { tipoBusca } from './tipoBusca'
import { transformaCafecario } from './constroiElementos/transformaCabecario'
import { destroiMain } from './destroiElements/destroiMain'

export function eventosBusca() {

    let botao_de_busca =  document.querySelector('.btn-busca');
    let input_de_busca = document.querySelector('.input-busca');


    botao_de_busca.addEventListener('click',(evt)=>{
        evt.preventDefault()
        transformaCafecario()
        destroiMain()
        tipoBusca()
    })

    input_de_busca.addEventListener('keydown',(evt)=>{
        let campo_busca = document.querySelector('.fomulario-busca')
        if(evt.code === 'Enter'){ 

            evt.preventDefault() // Evita o comportamento padrão
            transformaCafecario()
            destroiMain()
            tipoBusca()
            
        }
    })

}