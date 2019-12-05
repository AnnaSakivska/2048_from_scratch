import {GameCell} from './gameCell.js';

'use strict';

// let createAndAppend = function ({className, parent}, tag = 'div', value) {
//   let element = document.createElement(tag);
//     element.classList.add(className);
//     if (value) {
//         element.innerHTML = value;
//     }
//     parent.appendChild(element);
// };

let Game = class {
    constructor(parentElement, size) {
        this.parentElement = parentElement;
        this.size = size;

      // let  gameFieldElement = createAndAppend({
      //       className: 'game',
      //       parent: this.parentElement
      //   });
        let gameFieldElement = document.createElement('div');
        gameFieldElement.classList.add('game');
        this.parentElement.appendChild(gameFieldElement);

       // let headerElement = createAndAppend({
       //      className: 'game__header',
       //      parent: gameFieldElement
       //  });
        let headerElement = document.createElement('div');
        headerElement.classList.add('game__header');
        gameFieldElement.appendChild(headerElement);

        this.rating = 0;

        headerElement.innerHTML = `Rating:` + this.rating;


        // let fieldElement = createAndAppend({
        //     className: 'game__field',
        //     parent: gameFieldElement
        // });
        let fieldElement = document.createElement('div');
        fieldElement.classList.add('game__field');
        gameFieldElement.appendChild(fieldElement);

        for (let i = 0; i < this.size; i++) {
            for (let k = 0; k < this.size; k++) {
               new GameCell(fieldElement);
                 // let cellElement = createAndAppend({
                 //     className: 'game__cell',
                 //     parent: fieldElement
                 // });
                 let cellElement = document.createElement('div');
                 cellElement.classList.add('game__cell');
                
                 if (Math.random() > 0.8) {
                     cellElement.innerHTML = Math.random() > `0.5` ? `4` : `2`;
                 }
                
                 fieldElement.appendChild(cellElement);
            }
        }
    }
};

let game = new Game(document.body, 4);
