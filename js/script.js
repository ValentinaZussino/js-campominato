// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// Bonus
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// - con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// - con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;



// prendo btn play
const btnPlay = document.getElementById('play');

// on click
btnPlay.addEventListener('click', function(){
    // prendo container grid e lo pulisco
    const gridContainer = document.getElementById('grid-container');
    gridContainer.innerHTML = '';
    // creo variabile per numero quadrati --> dipende dal livello selezionato quindi faccio subito
    let numSquares;
    const levelSelect = document.getElementById('level');
    const level = levelSelect.value;
    switch(level){
        case 'easy':
            default: numSquares = 100;
            break;
        case 'hard':
            numSquares = 81;
            break;
        case 'crazy': 
            numSquares = 49;
            break;
    }
    console.log(level);
    console.log(numSquares);
    // creo var per numero bombe e array vuoto
    const numBombs = 16;
    const bombsArray = [];
    while(bombsArray.length < numBombs){
        let bombPosition = randomNumber(1, numSquares);
        if(!bombsArray.includes(bombPosition)){
            bombsArray.push(bombPosition);
        }
    }
    console.log(bombsArray);
    // provato prima per tre ore con do while ma nada de nada de nada......
    //funzione per generare quadrato
    function createSquare(num){
            const square = document.createElement('div');
            square.classList.add('square');
            const square4Side = Math.sqrt(numSquares);
            square.style.width = `calc(100% / ${square4Side})`;
            square.style.height = `calc(100% / ${square4Side})`;
            square.innerHTML = `
            <span>${num}</span>
            `;
            square.addEventListener('click', function(){
                    if(bombsArray.includes(num)){
                        const squares = document.querySelectorAll('.square');
                        for(let i = 0; i < squares.length; i++){
                            if(bombsArray.includes(i+1)){
                                squares[i].classList.add('bomb');
                            }
                        }
                    } else {
                        square.classList.add('safe');
                    }
            })
            return square;
    } 

    //funzione per generare griglia
    function createGrid(){
        const grid = document.createElement('div');
        grid.classList.add('container-grid');
        for(let i = 1; i <= numSquares; i++){
            const square = createSquare(i);
            grid.appendChild(square);
        }
        gridContainer.appendChild(grid);
    }
    
    // chiamo funzione griglia
    createGrid();
})
