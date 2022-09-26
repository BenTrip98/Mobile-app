let iconoBoleano=false;
const iconoUsuario = document.querySelector("#icono-usuario"),
menu=document.querySelector("#menu")

//cambia el icono de menu de usuario al clikearlo y desliza el login
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

//funcion que marque la caja al estar en su respectiva pagina
