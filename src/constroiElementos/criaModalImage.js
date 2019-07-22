export function criaModalImage(){
    let imgs_results = document.querySelectorAll('.img-grid');
    let bannerImgage = document.querySelector('.bannerImgage');
    

   imgs_results.forEach(function(e){

        e.addEventListener('click',function(){
            bannerImgage.style.display = 'block';
            criaImagem_do_banner(e.src,e.alt)   
            let icon_close = document.querySelector('.icon')
            icon_close.addEventListener('click',function(){
                bannerImgage.style.display = "none";
            })
            
        })
   })


   function criaImagem_do_banner(url,alt){
        bannerImgage.innerHTML = `
            <span class = "glyphicon glyphicon-remove icon"></span>
            <img src="${ url }" alt="${ alt }" class="img-banner">
          `
   }
    
}