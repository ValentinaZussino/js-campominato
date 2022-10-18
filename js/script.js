// Consegna
// Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
// L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// I numeri nella lista delle bombe non possono essere duplicati.
// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
// BONUS:
// 1- quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle
// 2- quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste

"use strict";
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
    // creo var per numero bombe e array vuoto che riepmio
    const numBombs = 16;
    const bombsArray = [];
    while(bombsArray.length < numBombs){
        let bombPosition = randomNumber(1, numSquares);
        if(!bombsArray.includes(bombPosition)){
            bombsArray.push(bombPosition);
        }
    }
    console.log(bombsArray);
    // provato prima per tre ore con do while (per creaz quadrati e grigli insieme) ma nada de nada de nada......
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
