/* Seletor da div e img */
let pokemons = document.querySelectorAll('.insideCards > img');
let elementos = document.querySelectorAll('.insideCards');
let botao = document.getElementById('btn');

let array = ['bulbasaur', 'charmander', 'pikachu', 'onix', 'snorlax', 'squirtle', 'zapdos', 'gengar', 'bulbasaur', 'charmander', 'pikachu', 'onix', 'snorlax', 'squirtle', 'zapdos', 'gengar'];


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



botao.addEventListener('click', () => {    
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


pokemons.forEach((card) => {    
    card.addEventListener('click', () => {        
        contador += 1;
        card.getAttribute('id');
        arrayPokemon.push(card);
        let pokemon1 = arrayPokemon[0];
        let pokemon2 = arrayPokemon[1];
        if(contador <3) {
            pokemon1.setAttribute('src', 'imgs/' + pokemon1.id.toString() + '.png');
            pokemon2.setAttribute('src', 'imgs/' + pokemon2.id.toString() + '.png');
            setTimeout( () => {
                card.getAttribute('src');
                card.setAttribute('src', 'imgs/' + card.id.toString() + '.png');
                if(pokemon1.id === pokemon2.id) {
                    contador = 0;
                    pokemon1.setAttribute('src', 'imgs/' + pokemon1.id.toString() + '.png');
                    pokemon2.setAttribute('src', 'imgs/' + pokemon2.id.toString() + '.png');
                    arrayPokemon = [ ];
                } else {
                    contador = 0;
                    arrayPokemon = [ ];
                    setTimeout(() => {
                        pokemon1.setAttribute('src', 'imgs/pokebola-logo.png');
                        pokemon2.setAttribute('src', 'imgs/pokebola-logo.png');
                    }, 500);
                }
            }, 1500)
        } 
    })
})


// /* Seletores */
// let bulbasauroCard = document.getElementById('bulbasaur');
// let charmanderCard = document.getElementById('charmander');
// let pikachuCard = document.getElementById('pikachu');
// let onixCard = document.getElementById('onix');
// let snorlaxCard = document.getElementById('snorlax');
// let squirtleCard = document.getElementById('squirtle');
// let zapdosCard = document.getElementById('zapdos');
// let gengarCard = document.getElementById('gengar');
// let bulbasauroCard1 = document.getElementById('bulbasaur1');
// let charmanderCard1 = document.getElementById('charmander1');
// let pikachuCard1 = document.getElementById('pikachu1');
// let onixCard1 = document.getElementById('onix1');
// let snorlaxCard1 = document.getElementById('snorlax1');
// let squirtleCard1 = document.getElementById('squirtle1');
// let zapdosCard1 = document.getElementById('zapdos1');
// let gengarCard1 = document.getElementById('gengar1');



// /* Função que verifica se os cards são iguais */
// function verificaCard(card1, card2, classe) {
//     if (card1.classList.contains(classe) && card2.classList.contains(classe)) {
//         card1.classList.add(classe);
//         card2.classList.add(classe);
//     } else {
//         card1.classList.toggle(classe);
//     }
// }

// /* Eventos */
// bulbasauroCard.addEventListener('click', (e) => {
//     verificaCard(bulbasauroCard, bulbasauroCard1, 'bulba');
// });

// bulbasauroCard1.addEventListener('click', (e) => {
//     verificaCard(bulbasauroCard1, bulbasauroCard, 'bulba');
// });

// charmanderCard.addEventListener('click', (e) => {
//     verificaCard(charmanderCard, charmanderCard1, 'charmander');
// });


// charmanderCard1.addEventListener('click', (e) => {
//     verificaCard(charmanderCard1, charmanderCard, 'charmander');
// });

// pikachuCard.addEventListener('click', (e) => {
//     verificaCard(pikachuCard, pikachuCard1, 'pikachu');
// });

// pikachuCard1.addEventListener('click', (e) => {
//     verificaCard(pikachuCard1, pikachuCard, 'pikachu');
// });

// onixCard.addEventListener('click', (e) => {
//     verificaCard(onixCard, onixCard1, 'onix');
// });

// onixCard1.addEventListener('click', (e) => {
//     verificaCard(onixCard1, onixCard, 'onix');
// })

// snorlaxCard.addEventListener('click', (e) => {
//     verificaCard(snorlaxCard, snorlaxCard1, 'snorlax');
// })


// snorlaxCard1.addEventListener('click', (e) => {
//     verificaCard(snorlaxCard1, snorlaxCard, 'snorlax');
// })

// squirtleCard.addEventListener('click', (e) => {
//     verificaCard(squirtleCard, squirtleCard1, 'squirtle');
// })

// squirtleCard1.addEventListener('click', (e) => {
//     verificaCard(squirtleCard1, squirtleCard, 'squirtle');
// })


// zapdosCard.addEventListener('click', (e) => {
//     verificaCard(zapdosCard, zapdosCard1, 'zapdos');
// })

// zapdosCard1.addEventListener('click', (e) => {
//     verificaCard(zapdosCard1, zapdosCard, 'zapdos');
// })

// gengarCard.addEventListener('click', (e) => {
//     verificaCard(gengarCard, gengarCard1, 'gengar');
// })

// gengarCard1.addEventListener('click', (e) => {
//     verificaCard(gengarCard1, gengarCard, 'gengar');
// })














