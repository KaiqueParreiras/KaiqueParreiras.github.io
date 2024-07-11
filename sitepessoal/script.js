window.onload = function() {
    var imagem_linkedin = document.getElementById("logo_linkedin");
    var imagem_github = document.getElementById("logo_github");
    
    imagem_linkedin.addEventListener("click", abrir_linkedin);
    imagem_github.addEventListener("click", abrir_github);
    
    function abrir_linkedin() {
        window.open("https://www.linkedin.com/in/kaique-parreiras");
    }

    function abrir_github() {
        window.open("https://github.com/KaiqueParreiras");
    }
};
