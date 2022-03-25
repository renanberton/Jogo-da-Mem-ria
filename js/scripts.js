/* Seletor da div e img */
let pokemons = document.querySelectorAll('.insideCards > img');
let elementos = document.querySelectorAll('.insideCards');
let botao = document.getElementById('btn');

/* Array com os nomes dos pokemons */
let array = ['bulbasaur', 'charmander', 'pikachu', 'onix', 'snorlax', 'squirtle', 'zapdos', 'gengar', 'bulbasaur', 'charmander', 'pikachu', 'onix', 'snorlax', 'squirtle', 'zapdos', 'gengar', 'blastoise', 'charizard', 'pidgeotto', 'alakazam', 'blastoise', 'charizard', 'pidgeotto', 'alakazam'];

/* Ao window carregar ele transforma a ordem dos pokemons em aleatoria */
window.addEventListener('load', () => {
    array = array.sort((a) => Math.random() - 0.5);
    let cont = 0;
    pokemons.forEach((card) => {
        card.setAttribute('id', array[cont].toString());
        cont = cont + 1;
    })
    });

/* Array que armazenará a posição dos 2 pokémons clicados 
Contador para limitar o número de cliques
*/
let arrayPokemon = [ ];
let contador = 0;

/* Implantar função nivel de dificuldade */

/* Botão que mostra os pokemons e depois esconde os mesmos */
botao.addEventListener('click', () => {    
    array = array.sort((a) => Math.random() - 0.5);
    let cont = 0;
    pokemons.forEach((card) => {
        card.setAttribute('id', array[cont].toString());
        cont = cont + 1;
    })
    pokemons.forEach((card) => {
        card.getAttribute('src');
        card.setAttribute('src', 'imgs/' + card.id.toString() + '.png');
        setTimeout(() => {
            card.setAttribute('src', 'imgs/pokebola-logo.png');                    
        },2000);
    })
    botao.style = "display: none;";
    setTimeout(() => {
    botao.innerHTML = "RECOMEÇAR";
    botao.style = "display: flex;";
    }, 5000);
})

var vencedor = 1;

/* Função que vira as cartas */
pokemons.forEach((card) => {    
    card.addEventListener('click', () => {    
        /* Condicional para garantir que o usuário não clique 2 vezes no mesmo botão, o que atrapalharia a lógica do código
        Se o usuário não tiver clicado ele segue o código
         */
        if(!card.classList.contains('jaClicou')) {
            card.classList.add('jaClicou');
            contador += 1;
            card.getAttribute('id');
            arrayPokemon.push(card);
            let pokemon1 = arrayPokemon[0];
            let pokemon2 = arrayPokemon[1];
            /* Contador para garantir que vire somente 2 cartas por vez */
            if(contador <3) {
            /* Ele vira as 2 cartas e add a img do pokemon */
            pokemon1.setAttribute('src', 'imgs/' + pokemon1.id.toString() + '.png');
            pokemon2.setAttribute('src', 'imgs/' + pokemon2.id.toString() + '.png');
            /* Settimeout de 2 segundos para esperar e verificar se são iguais */
            setTimeout( () => {
                card.getAttribute('src');
                card.setAttribute('src', 'imgs/' + card.id.toString() + '.png');
                /* Se os pokemons clicados tiverem o mesmo id, ele fixa as cartas na tela com a img do pokemon */
                if(pokemon1.id === pokemon2.id) {
                    contador = 0;
                    ++vencedor;
                    pokemon1.setAttribute('src', 'imgs/' + pokemon1.id.toString() + '.png');
                    pokemon2.setAttribute('src', 'imgs/' + pokemon2.id.toString() + '.png');
                    pokemon1.setAttribute('class', 'jaVirou');
                    pokemon2.setAttribute('class', 'jaVirou');
                    arrayPokemon = [ ];
                    /* Caso forem diferentes, ele retorna a img para a img da pokebola e zera o contador */
                } else {
                    contador = 0;
                    arrayPokemon = [ ];
                    pokemon1.setAttribute('src', 'imgs/pokebola-logo.png');
                    pokemon2.setAttribute('src', 'imgs/pokebola-logo.png');
                }
            }, 1500)
            pokemon1.classList.remove('jaClicou');
            pokemon2.classList.remove('jaClicou');
        } else {
            card.classList.remove('jaClicou');
        }
        } 
        /* Condicional para verificar se o usuário ja virou as 12 cartas */
        if(vencedor == 12) {
            vencedor = 0;
            /* Coloquei 2 segundos de settimeout em toda a função para que de tempo da pessoa ver que terminou */
            setTimeout(() => {
                let conteudo = document.querySelector('.box');
                /* Criei uma div no HTML e escondi a mesma com display: none */
                let vencedor = document.querySelector('.vencedor');
                /* Ao vencer, o conteudo do jogo é escondido, e a div 'vencedor' é exibida */
                conteudo.style = "display: none;";
                vencedor.style = "display: block;";
                /* E a div 'vencedor' append o botão de recomeçar */
                vencedor.appendChild(botao);
                /* E ao clicar no botão, o jogo recomeça com a mesma mecânica utilizada 
                O conteúdo volta a aperecer, o botao volta para o conteudo, e o conteudo de vencedor é escondido novamente
                */
                botao.addEventListener('click', () => {
                    let container = document.querySelector('.container');
                    conteudo.style = "display: block;";
                    container.appendChild(botao);
                    vencedor.style = "display: none;";
                })                
            }, 2000);
        }   
        })
    })

