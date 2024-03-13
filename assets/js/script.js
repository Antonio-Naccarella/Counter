
const title = document.createTextNode('Contatore');
document.body.appendChild(title);
const display = document.createElement('span');
display.classList.add('display');
document.body.appendChild(display);

const container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);

const plusBtn = document.createElement('button');
plusBtn.classList.add('btn');
plusBtn.textContent = 'Aumenta';
container.appendChild(plusBtn);

const minusBtn = document.createElement('button');
minusBtn.classList.add('btn');
minusBtn.textContent = 'Diminuisci';
container.appendChild(minusBtn);

const resetBtn = document.createElement('button');
resetBtn.classList.add('btn', 'reset');
resetBtn.textContent = 'Resetta';
container.appendChild(resetBtn);

class Counter {
    constructor(display){
        this.display = display;
        this.count = 0;
        this.display.textContent = this.count;
    }

    addOne() {
         this.count++;
    }
    minusOne() {
         this.count--;
    }
    reset() {
         this.count = 0;
    }
    updateDisplay() {
        this.display.innerText = this.count;
    }
}
const counter = new Counter(display);

plusBtn.addEventListener('click', () => {
    counter.addOne()
    counter.updateDisplay()
})
minusBtn.addEventListener('click', () => {
    counter.minusOne()
    counter.updateDisplay()
})
resetBtn.addEventListener('click', () => {
    counter.reset()
    counter.updateDisplay()
})
