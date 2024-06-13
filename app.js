<script>

    function mudarPosicao() {
    // Obtendo uma referência ao botão
    var botao = document.getElementById('nao');
    
    // Obtendo as dimensões da janela do navegador
    var larguraJanela = window.innerWidth;
    var alturaJanela = window.innerHeight;
    
    // Gerando uma posição aleatória dentro da janela
    var novaPosicaoX = Math.random() * (larguraJanela - botao.offsetWidth);
    var novaPosicaoY = Math.random() * (alturaJanela - botao.offsetHeight);
    
    // Definindo a nova posição do botão
    botao.style.position = 'absolute';
    botao.style.left = novaPosicaoX + 'px';
    botao.style.top = novaPosicaoY + 'px';
}


    </script>