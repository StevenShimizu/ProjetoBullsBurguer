/* 
  O que precisamos fazer? - quando clicar no botão do personagem na lista temos que 
marcar o botão como selecionado e mostrar o personagem correspondente

    OBJETIVO 1 - quando clicar no botão do personagem na lista, marcar o botao como selecionado 
        passo 1 - pegar os botões no JS pra poder verificar quando o usuário clicar em cima de um deles
        passo 2 - adicionar a classe "selecionado" no botão que o usuário clicou
        passo 3 - verificar se já existe um botão selecionado, se sim, devemos remover 
a seleção dele 

    OBJETIVO 2 - quando clicar no botão do personagem mostrar as informações do personagem
        passo 1 - pegar os personagens no JS pra poder mostrar ou esconder ele
        passo 2 - adicionar a classe "selecionado" no personagem que o usuário selecionou
        passo 3 - verificar se já exista um personagem selecionado, se sim, devemos remover 
a seleção dele 
*/

// OBJETIVO 1 - quando clicar no botão do personagem na lista, marcar o botao como selecionado 
//passo 1 - pegar os botões no JS pra poder verificar quando o usuário clicar em cima de um deles 

const imagemFundo = document.getElementById('imagem_fundo')

const chopper = document.getElementById('chopper');
chopper.addEventListener("click", function(){
  console.log("iClickonchopper")

  imagemFundo.setAttribute('src', '/src/Imagens/Cardapio.png')
});

const zoro = document.getElementById('zoro');
zoro.addEventListener('click', function() {
  console.log('I click on zoro')

  imagemFundo.setAttribute('src', '/src/Imagens/tripulacao-tony-chopp   er.png')
});

const luffy = document.getElementById('luffy');
luff.addEventListener('click', function(){
  console.log('I click on luffy')

  imagemFundo.setAttribute('src', '/src/Imagens/tripulacao-monkey-d-luffy.png')
});




