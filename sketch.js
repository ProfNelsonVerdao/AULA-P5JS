function setup() {
    createCanvas(600, 400); // cria a tela e define tamanho (x,y)(larguara/altura)
  }
  
  function draw() {
    background("#F5E7BD"); // cor de fundo da tela
    fill("black");  // cor da caneta / letra
    textSize(64);    // tamanho da fonte
    textAlign(CENTER, CENTER)    // alinhamento do texto 
    
    let maximo = width; // cria a variavel maximo e define o valor com a largura da tela
    let minimo = 0;     // cria a variavel minimo e define o valor como 0
    let palavra = "Caminhante"; // cria a variavel palavra e define o valor como Caminhante
    let quantidade = map(mouseX, 0, width, 0, palavra.length); // cria a variavel quantidade
          // map: Remapeia um número de um intervalo para outro. onde:
          // o 1º valor é o valor a ser remapeado. (mouseX = posição x do mouse)
          // o 2º valor é o limite inferior do intervalo atual do valor. (0)
          // o 3º valor é o limite superior do intervalo atual do valor.(width - largura da tela)
          // o 4º valor é o limite inferior do intervalo alvo do valor.(1)
          // o 5º valor é o limite superior do intervalo de destino do valor. (tamanho da palavra)
          // o 6º valor é opcional e restrinja o valor ao intervalo recém-mapeado. (true / false)
    
    
    let parcial = palavra.substring(0,quantidade);  //cria a variavel parcial
                  // O método substring irá capturar a letra por letra da palavra, 
                  //  nesse caso de 0 até a quantidade total.
    
    text(parcial,300,200);  // a função text() insere a variável (parcial) na posição X e Y:
    
  
  }
  