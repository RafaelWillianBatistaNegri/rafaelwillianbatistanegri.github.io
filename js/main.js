
// Acessibilidade
const fontSizes = ["100%", "120%", "140%", "160%"];
let currentSizeIndex = 0;

function mudarFonte() {
currentSizeIndex = (currentSizeIndex + 1) % fontSizes.length;
document.documentElement.style.fontSize = fontSizes[currentSizeIndex];
}


// Tema Claro e Escuro
function addLightTheme() {
    document.body.classList.add("light-theme");

    document.getElementById("dark").style.display = "none";
    document.getElementById("light").style.display = "inline";
}

function removeLightTheme() {
    document.body.classList.remove("light-theme");

    document.getElementById("dark").style.display = "inline";
    document.getElementById("light").style.display = "none";
}

// Alert do Formulário
function alerta() {
    alert("⚠️ Página em construção. Por favor, volte em breve!");
  }