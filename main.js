let iconoBoleano=false;
const iconoUsuario = document.querySelector("#icono-usuario"),
menu=document.querySelector("#menu")

iconoUsuario.addEventListener('click',(e)=>{
    //alternar estilos para el menu y body
    menu.classList.toggle("activo");
    document.body.classList.toggle("opacity");
    iconoBoleano=!iconoBoleano
    if(iconoBoleano===true){
        iconoUsuario.className="fas fa-x";
    }else{
        iconoUsuario.className="fas fa-user";
    }
    
    console.log(iconoBoleano)
    
})

//scroll evento header
/*window.addEventListener("scroll",function(){
    var header= this.document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY>0)
})*/

//scroll evento header hide and show
var lastScrollTop=0;
var header= this.document.querySelector("header");
window.addEventListener("scroll",function(){
    var scrollTop=this.window.pageYOffset||this.document.documentElement.scrollTop;
    if (scrollTop>lastScrollTop){
        header.style.top="-100px" //buscar medida 
    }else{
        header.style.top="0"
    }
    lastScrollTop=scrollTop
})

//scroll evento footer
/*window.addEventListener("click",function(){
    var footer=this.document.querySelector("footer");
    footer.classList.toggle("sticky",this.window.scroll<0)
})*/