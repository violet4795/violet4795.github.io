(() => {
  class Library {}

  window.Library = Library;
})();

const stocks = [
  ["먼나라 이웃나라", true, 0],
  ["먼나라 이웃나라", true, 1],
  ["먼나라 이웃나라", false, 2],
  ["세계로 뻗어가는 한국", true, 3],
  ["세계로 뻗어가는 한국", false, 4],
  ["세계로 뻗어가는 한국", false, 5],
  ["동물농장", true, 6],
  ["동물농장", false, 7],
];

const library = new Library(stocks);

function createStock() {
  const inputText = document.getElementsByName("bookTitle")[0];
  const title = inputText.value;
  const reserveFlag = false;
  const id = stocks.length;
  inputText.value = "";
  return [title, reserveFlag, id];
}

function addRow(stock) {
  const tbody = document.getElementById("tbody");

  const title = stock[0];
  const checkout = stock[1];
  const id = stock[2];

  const tr = document.createElement("tr");
  tr.id = id;

  const td1 = document.createElement("td");
  td1.innerText = title;

  const td2 = document.createElement("td");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = checkout;
  checkbox.addEventListener("click", (e) => {
    const targetId = e.target.parentElement.parentElement.id;
    const stock = stocks.filter((e) => e[2] == targetId)[0];
    stock[1] = e.target.checked;
  });
  td2.appendChild(checkbox);

  const td3 = document.createElement("td");
  const delButton = document.createElement("button");
  delButton.innerText = "제거";
  delButton.addEventListener("click", (e) =>
    removeStock(e.target.parentElement.parentElement.id, tbody)
  );

  td3.appendChild(delButton);

  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tbody.appendChild(tr);
}

function addStock(stock) {
  stocks.push(stock);

  return stock;
}

function removeStock(id, target) {
  let index;
  stocks.every((e, i) => {
    if (e[2] == id) {
      index = i;
      return false;
    } else return true;
  });
  stocks.splice(index, 1);
  target.removeChild(target.children.namedItem(id));
}

function filter(status) {
  /*
    css로 관리할지,
    데이터로 관리할지.
     */
  const tbody = document.getElementById("tbody");
  while (tbody.firstChild) tbody.removeChild(tbody.firstChild);

  let targetStock;

  switch (status) {
    case "":
      targetStock = Object.assign([], stocks);
      break;
    default:
      targetStock = stocks.filter((stock) => String(stock[1]) === status);
      break;
  }

  targetStock.forEach((stock) => addRow(stock));
}

function init() {
  stocks.forEach((e) => addRow(e));
}

init();
