const list = document.createElement('ul');

function generateList(array) {
    const listItems = array.map(function (content ) {
        const item = `<li>${content}</li>`;
        return item;
    });
    console.log(listItems.join(''));
    list.innerHTML = listItems.join('');
    document.body.appendChild(list);
}

generateList(['hello', 'world', 'Kiev', 'Kharkiv', 'Odessa', 'Lviv']);


