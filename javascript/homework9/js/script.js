let ul = document.querySelector('.tabs');
ul.addEventListener('click', function (ev) {
    console.log(ev.target.dataset.type);
    let data = ev.target.dataset.type;
    console.log(document.querySelector('.active-p'));
    document.querySelector('.active-p').classList.remove('active-p');
    console.log(document.querySelector('.active-tab'));
    document.querySelector('.active-tab').classList.remove('active-tab');
    console.log(document.querySelector(`[data-li = ${data}]`));
    document.querySelector(`[data-li = ${data}]`).classList.add('active-p');
    ev.target.classList.add('active-tab')
});


