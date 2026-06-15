
function abrirScripts() {
    document.getElementById("homePage").style.display = "none";
    document.getElementById("scriptsPage").style.display = "block";
    window.scrollTo(0, 0);
}

const mensagem = document.getElementById("boasVindas");

if(localStorage.getItem("antstyle_visitou")){
    mensagem.innerText = "👋 Bem-vindo de volta à ANT STYLE!";
}else{
    mensagem.innerText = "🔥 Bem-vindo à ANT STYLE!";
    localStorage.setItem("antstyle_visitou", "true");
}

function voltarHome() {
    document.getElementById("scriptsPage").style.display = "none";
    document.getElementById("homePage").style.display = "block";
    window.scrollTo(0, 0);
}

function copiar(id) {

    let texto =
        document.getElementById(id).innerText;

    navigator.clipboard.writeText(texto);

    const btn = event.target;

btn.innerText = "✅ Copiado!";

setTimeout(() => {
    btn.innerText = "Copiar";
}, 2000);
}


