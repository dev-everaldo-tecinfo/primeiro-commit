var banners = ["os melhores do brasil", "qualidade e preço baixo"];
var banerAtal = 0;

function trocarBANNER() {
    banerAtal = (banerAtal +1) % 2;
    document.querySelector('h2#mensagem').textContent = banners[banerAtal];
}
setInterval(trocarBANNER, 2000);