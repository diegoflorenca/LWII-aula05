// Gera um número aleatório entre 1 e 9
let numeroAleatorio = Math.floor(Math.random() * 9 + 1);

// armazena o número de possíveis tentativas
let tentativas = 3;

// Função que é chamada toda vez que um botão é pressionado
const verifica = (evento) => {
  // adiciona a classe 'clicado' no botão que foi clicado mudando sua cor
  evento.currentTarget.classList.add('clicado');

  const numero = evento.currentTarget.innerText;

  // subtrai um tentatira
  tentativas--;

  // Verifica se o número selecionado pelo usuário é igual ao número aleatório
  if (numero == numeroAleatorio) {
    // Mostra uma mensagem no navegador indicando que o usuário acertou o número
    window.alert('Parabéns, você acertou!');

    // recarrega a página, o 'return' faz com que o código desta função pare de ser executado
    return location.reload();
  }

  // Verifica se acabaram as tentativas
  if (tentativas == 0) {
    // se o número de tentativas é igual a zero o usuário perdeu
    // mostra a mensagem de fim de jogo e o número que foi sorteado
    window.alert(
      'Suas tentativas acabaram. O número certo era ' + numeroAleatorio
    );

    // recarrega a página para iniciar o jogo novamente
    return location.reload();
  }

  // seleciona o h2 que possui o texto com o número de tentativas
  let textoTentativas = document.querySelector('h2');

  if (tentativas == 2) {
    // se o número de tentativas é igual a 2 muda o texto do h2
    textoTentativas.innerText =
      'Tente novamente, você possui mais 2 tentativas!';
  } else if (tentativas == 1) {
    // se o número de tentativas é igual a 1 muda novamente o texto do h2
    textoTentativas.innerText = 'Ultima chance!';
    // adiciona a classe ultimaChance ao h2 para mudar sua cor
    textoTentativas.classList.add('ultimaChance');
  }
};
