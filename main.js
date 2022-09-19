const iconoMenu = document.querySelector("#icono-menu"),
menu=document.querySelector("#menu")

iconoMenu.addEventListener('click',(e)=>{
    //alternar estilos para el menu y body
    menu.classList.toggle("activo");
    document.body.classList.toggle("opacity");
    
})