
(() => {
  class Library {}

  window.Library = Library;
})();

const stocks = [
  ['먼나라 이웃나라', 'checkout', 0],
  ['먼나라 이웃나라', 'checkout', 1],
  ['먼나라 이웃나라', '', 2],
  ['세계로 뻗어가는 한국', 'checkout', 3],
  ['세계로 뻗어가는 한국', '', 4],
  ['세계로 뻗어가는 한국', '', 5],
  ['동물농장', 'checkout', 6],
  ['동물농장', '', 7]
];

const library = new Library(stocks);

document.getElementById('app');

stocks.forEach(e=>addStock(e, document.getElementById('tbody')))

function addStock(stock, tbody) {
    const title = stock[0];
    const checkout = stock[1];
    const id = stock[2];

    const tr = document.createElement('tr') ;
    tr.id = id;

    const td1 = document.createElement('td');
    td1.innerText = title;

    const td2 = document.createElement('td');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.value = checkout == 'checkbox' ? true : false
    checkbox.addEventListener('click', e => {
        const targetId = e.target.parentElement.parentElement.id
        const stock = stocks.filter(e => e[2] == targetId)[0]
        stock[1] = e.target.value ? 'checkout' : ''
    })
    td2.appendChild(checkbox);

    const td3 = document.createElement('td');
    const delButton = document.createElement('button');
    delButton.innerText = '제거'
    delButton.addEventListener('click', e => removeStock(e.target.parentElement.parentElement.id, document.getElementById('tbody')));

    td3.appendChild(delButton);

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tbody.appendChild(tr);
}

function removeStock(id, target){
    let index;
    stocks.every((e, i) => {
        if(e[2] == id) {
            index = i;
            return false;
        }else return true;
    })
    stocks.splice(index, 1);
    target.removeChild(target.children.namedItem(id));
}