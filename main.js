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