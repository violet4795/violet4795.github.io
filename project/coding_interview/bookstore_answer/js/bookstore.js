var bookStore = [
    ["book1", false],
    ["book2", false],
    ["book3", false],
    ["book4", false]
];

var reserveBook = function (e){
    let bookList = document.getElementById("bookList");
    let reserveBook = e.target.parentElement.parentElement;
    let seleteBookIndex = -1;
    let values = bookList.childNodes.values();
    let next = null;
    let i=-1;
    while(!(book = values.next()).done){
        i++;
        if(book.value === reserveBook){
            seleteBookIndex = i;
            break;
        }
    }

    if(seleteBookIndex >= 0){
        bookStore[seleteBookIndex][1] = e.target.checked;
    }

    filter();
}

var deleteBook = function (e){
    let bookList = document.getElementById("bookList");
    let deleteBook = e.target.parentElement.parentElement;
    let seleteBookIndex = -1;
    let values = bookList.childNodes.values();
    let next = null;
    let i=-1;
    while(!(book = values.next()).done){
        i++;
        if(book.value === deleteBook){
            seleteBookIndex = i;
            break;
        }
    }

    if(seleteBookIndex >= 0){
        bookStore.splice(seleteBookIndex, 1);
        bookList.removeChild(bookList.childNodes.item(seleteBookIndex));
    }
    
}

function filter(){
    let filterSelection = document.getElementById("filterSelection");
    let collection = filterSelection.selectedOptions[0];
    
    let bookList = document.getElementById("bookList");

    switch(collection.value){
        case "0":
            bookStore.forEach((book, index)=>{
                let bookDom = bookList.children.item(index);
                if(book[1]){
                    bookDom.setAttribute("style", "display:none");
                }else{
                    bookDom.setAttribute("style", "");
                }
            });
            break;
        case "1":
            bookStore.forEach((book, index)=>{
                let bookDom = bookList.children.item(index);
                if(!book[1]){
                    bookDom.setAttribute("style", "display:none");
                }else{
                    bookDom.setAttribute("style", "");
                }
            });
            break;
        default:
            bookStore.forEach((book, index)=>{
                let bookDom = bookList.children.item(index);
                bookDom.setAttribute("style", "");
            });
            break;
    }
}

function init(){
    let bookList = document.getElementById("bookList");

    bookStore.forEach((newBook, index) =>{
        let tr = document.createElement("tr");
    
        let tdBookName = document.createElement("td");
        let tdReservation = document.createElement("td");
        let tdDelete = document.createElement("td");
        tr.appendChild(tdBookName);
        tr.appendChild(tdReservation);
        tr.appendChild(tdDelete);
      
        tdBookName.textContent = newBook[0];
        let checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.onclick = reserveBook;
        tdReservation.appendChild(checkBox);
        let deleteBtn = document.createElement("input");
        deleteBtn.type="button";
        deleteBtn.value = "삭제";
        deleteBtn.onclick = deleteBook;
        tdDelete.appendChild(deleteBtn);
    
        bookList.appendChild(tr);
    });
}

function addBook(){
    
    let bookList = document.getElementById("bookList");
    
    let bookname = document.getElementById("bookname").value;
    if(bookname == undefined || bookname == null || bookname == ""){
        return;
    }

    let newBook = [bookname, false];
    bookStore.push(newBook);

    let tr = document.createElement("tr");
    
    let tdBookName = document.createElement("td");
    let tdReservation = document.createElement("td");
    let tdDelete = document.createElement("td");
    tr.appendChild(tdBookName);
    tr.appendChild(tdReservation);
    tr.appendChild(tdDelete);
  
    tdBookName.textContent = newBook[0];
    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.onclick = reserveBook;
    tdReservation.appendChild(checkBox);
    let deleteBtn = document.createElement("input");
    deleteBtn.type="button";
    deleteBtn.value = "삭제";
    deleteBtn.onclick = deleteBook;
    tdDelete.appendChild(deleteBtn);

    bookList.appendChild(tr);
}

init();