class Trello {
    render() {
        const container = document.createElement('div');
        container.classList.add('container');
        const title = document.createElement('h1');
        title.innerText = 'To do : ';
        title.classList.add('title');
        const filter = document.createElement('a');
        filter.innerText = 'Filter card';
        filter.classList.add('filter-btn');
        const header = document.createElement('div');
        header.classList.add('header');
        const wrapper = document.createElement('div');
        wrapper.classList.add('wrapper');
        const button = document.createElement('a');
        button.classList.add('add-btn');
        button.innerText = 'Add card';
        button.id = 'myBtn';
        const modalBtns = document.getElementsByClassName('choose-task')[0];
        modalBtns.addEventListener('click', (e) => {
            console.log(e.target.id);
            let newCard = new Card('PISYA', 'BolSHAYA', e.target.id);
            newCard.render();
        });
        const addColumn = document.createElement('a');
        addColumn.classList.add('add-column');
        addColumn.innerText = 'Add Column';
        addColumn.addEventListener('click', () => {
            let tasks = document.createElement('div');
            tasks.classList.add('wrapper-tasks');
            wrapper.appendChild(tasks);
        });
        const column = document.createElement('div');
        column.classList.add('wrapper-tasks');
        wrapper.appendChild(column);
        header.append(title, filter, addColumn);
        container.append(header, wrapper, button);
        document.getElementsByTagName("script")[0].before(container)
    }
}

const trello = new Trello();
trello.render();

class Card {
    constructor(header, text, className) {
        this._header = header;
        this._text = text;
        this._className = className;
    }

    render() {
        const card = document.createElement('div');
        card.classList.add('card-body');
        const cardTitle = document.createElement('h5');
        cardTitle.classList.add('card-title');
        cardTitle.innerText = this._header;
        const cardText = document.createElement('p');
        cardText.classList.add('card-text');
        cardText.innerText = this._text;
        const cardLabel = document.createElement('span');
        cardLabel.classList.add('card-label');
        cardLabel.style.backgroundColor = Card.COLORS[this._className];
        const cardBtn = document.createElement('button');
        cardBtn.classList.add('card-btn');
        cardBtn.innerText = 'CLOSE';
        card.append(cardLabel, cardTitle, cardText,cardBtn);
        const col = document.getElementsByClassName('wrapper-tasks')[0];
        console.log(col);
        col.appendChild(card);
    }
}

Card.COLORS = {
    general: 'lightgreen',
    optional: 'deepskyblue',
    deadline: 'crimson',
};


let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
    modal.classList.add('bg-active')
};
span.onclick = function () {
    modal.classList.remove('bg-active')
};
window.onmousedown = function (e) {
    if (e.target == modal) {
        modal.classList.remove('bg-active')
    }
};