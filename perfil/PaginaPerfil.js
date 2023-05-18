const  mostraUsuario = function(){
    let usuarioString = localStorage.getItem('usuario'); 
    if(usuarioString == undefined || usuarioString == 'undefined'){
        
        document.getElementById('userName').innerHTML=` undefined
        `;
    }else{
        let usuario = JSON.parse(usuarioString);
        if(usuario != null && usuario != "" ){
            document.getElementById('userName').innerHTML= `Usuario : ` + usuario.usuario;
            ;
        }      
    }
}
