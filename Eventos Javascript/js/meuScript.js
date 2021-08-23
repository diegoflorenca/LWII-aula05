/* 
Eventos DOM
    Evento é tudo o que pode acontecer com os elementos da página.

    Por exemplo, eventos de mouse:
        mouseenter -> Quando o cursor do mouse fica sobre o elemento;
        mousemove -> Quando o cursor do mouse se move sobre o elemento;
        mousedown -> Quando clicou e segurou o botão;
        mouseup -> Quando soltou o botão depois de clicar;
        mouseout -> Quando o cursor saiu de cima do elemento.
        
        entro outros: https://developer.mozilla.org/pt-BR/docs/Web/Events

*/

// Seleciona a Div do DOM para que ela seja manupilada pelo JavaScript
const divPrincipal = document.querySelector('#principal');

// Cria uma função que modifica a divPrincipal
const muda = () => {
  // Muda a cor de fundo da div para vermelho
  divPrincipal.style.background = 'tomato';
  // Adiciona uma classe a div
  divPrincipal.classList.add('altera');
};

divPrincipal.addEventListener('mouseenter', muda);

// Cria outra função que modifica a divPrincipal
const volta = () => {
  // Muda a cor de fundo da div para verde
  divPrincipal.style.background = '#2a8b2a';
  // Remove a classe adicionada anteriormente
  divPrincipal.classList.remove('altera');
};

divPrincipal.addEventListener('mouseout', volta);

// Chama a funções muda a cada 1 segundos
// setInterval(muda, 1000);
// Chama a funções volta a cada 2 segundos
// setInterval(volta, 2000);
