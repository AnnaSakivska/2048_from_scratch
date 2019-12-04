// 'use strict';

export class GameCell {
    constructor(fieldElement) {

        this.element = document.createElement('div');
        this.element.classList.add('game__cell');

        if (Math.random() > 0.8) {
            this.value = Math.random() > `0.5` ? `4` : `2`;
        }

        fieldElement.appendChild( this.element);

        this.element.onclick = this.merge.bind(this);
    }
    get value() {
        return this._value;
    }
    set value(value) {
        this._value = value;
        this.element.innerHTML = value;
    }

    clear() {
        this.value = '';
    }

    merge() {
        this.value *= 2;
    }
}


