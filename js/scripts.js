/* Seletores */
let bulbasauroCard = document.getElementById('bulbasaur');
let charmanderCard = document.getElementById('charmander');
let pikachuCard = document.getElementById('pikachu');
let onixCard = document.getElementById('onix');
let snorlaxCard = document.getElementById('snorlax');
let squirtleCard = document.getElementById('squirtle');
let zapdosCard = document.getElementById('zapdos');
let gengarCard = document.getElementById('gengar');
let bulbasauroCard1 = document.getElementById('bulbasaur1');
let charmanderCard1 = document.getElementById('charmander1');
let pikachuCard1 = document.getElementById('pikachu1');
let onixCard1 = document.getElementById('onix1');
let snorlaxCard1 = document.getElementById('snorlax1');
let squirtleCard1 = document.getElementById('squirtle1');
let zapdosCard1 = document.getElementById('zapdos1');
let gengarCard1 = document.getElementById('gengar1');



/* Função que verifica se os cards são iguais */
function verificaCard(card1, card2, classe) {
    if (card1.classList.contains(classe) && card2.classList.contains(classe)) {
        card1.classList.add(classe);
        card2.classList.add(classe);
    } else {
        card1.classList.toggle(classe);
    }
}

/* Eventos */
bulbasauroCard.addEventListener('click', (e) => {
    verificaCard(bulbasauroCard, bulbasauroCard1, 'bulba');
});

bulbasauroCard1.addEventListener('click', (e) => {
    verificaCard(bulbasauroCard1, bulbasauroCard, 'bulba');
});

charmanderCard.addEventListener('click', (e) => {
    verificaCard(charmanderCard, charmanderCard1, 'charmander');
});


charmanderCard1.addEventListener('click', (e) => {
    verificaCard(charmanderCard1, charmanderCard, 'charmander');
});

pikachuCard.addEventListener('click', (e) => {
    verificaCard(pikachuCard, pikachuCard1, 'pikachu');
});

pikachuCard1.addEventListener('click', (e) => {
    verificaCard(pikachuCard1, pikachuCard, 'pikachu');
});

onixCard.addEventListener('click', (e) => {
    verificaCard(onixCard, onixCard1, 'onix');
});

onixCard1.addEventListener('click', (e) => {
    verificaCard(onixCard1, onixCard, 'onix');
})

snorlaxCard.addEventListener('click', (e) => {
    verificaCard(snorlaxCard, snorlaxCard1, 'snorlax');
})


snorlaxCard1.addEventListener('click', (e) => {
    verificaCard(snorlaxCard1, snorlaxCard, 'snorlax');
})

squirtleCard.addEventListener('click', (e) => {
    verificaCard(squirtleCard, squirtleCard1, 'squirtle');
})

squirtleCard1.addEventListener('click', (e) => {
    verificaCard(squirtleCard1, squirtleCard, 'squirtle');
})


zapdosCard.addEventListener('click', (e) => {
    verificaCard(zapdosCard, zapdosCard1, 'zapdos');
})

zapdosCard1.addEventListener('click', (e) => {
    verificaCard(zapdosCard1, zapdosCard, 'zapdos');
})

gengarCard.addEventListener('click', (e) => {
    verificaCard(gengarCard, gengarCard1, 'gengar');
})

gengarCard1.addEventListener('click', (e) => {
    verificaCard(gengarCard1, gengarCard, 'gengar');
})














