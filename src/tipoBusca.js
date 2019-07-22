import { crudGetArguivo } from './crudGetArguivo';


export function tipoBusca(){
    let input_value = document.querySelector('.input-busca').value
    let campoTipoArquivo = document.querySelector('.select-opcao').value  

    let Array_termo_tipo = [];

    Array_termo_tipo.push(input_value)
    Array_termo_tipo.push(campoTipoArquivo)

    crudGetArguivo(Array_termo_tipo[0],Array_termo_tipo[1])
 
}