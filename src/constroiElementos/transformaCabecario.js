export  function transformaCafecario(){
    let cabecario = document.querySelector('.cabecario')
    let form_busca = document.querySelector('.fomulario-busca')

    // console.log(cabecario,form_busca);
    
    cabecario.style.height = '24%'
    form_busca.style.width = '100%'
    form_busca.style.padding = '2px'
    form_busca.style.margin = '0'

    document.querySelector('.tarja-footer').style.display = 'none';
}