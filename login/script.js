

logar = function(){
    let email = document.querySelector("#email").value;
    let senha = document.querySelector("#senha").value;
    let url = "http://localhost:8080/api/security/login";
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
     
            let usuario = xhr.responseText;

            if(usuario == null || usuario == ""){
                alert("Usuario ou usenha incorretos");
            }
            else{
               
                localStorage.setItem ('usuario', usuario);
                window.location.href= "../index.html"
                console.log("Logado");
            }
        }


    }
    
    xhr.open('POST',url, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("email=" + email + "&senha=" + senha);
}
