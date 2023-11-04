const myLibrary = [];

function Book(title, author, page, read)
{    // constructor
    this.title = title;
    this.author = author;
    this.page = page;
    this.read = read;
}

//DONT REALLY NEED THIS, JUST HERE FOR TESTING
function addBookToLibrary(book)
{
    myLibrary.push(book);
    addtoTable(book);
}

function addtoLibrary()
{
    const book = document.querySelectorAll("input");
    let new_book = new Book(book[0].value, book[1].value, book[2].value, book[3].value);
    myLibrary.push(new_book);
    addtoTable(new_book);
}


function addtoTable(book)
{
    const table = document.querySelector("table");
    let tr = document.createElement("tr");
    for(let i = 0; i < Object.keys(book).length; i++)
    {
        let td = document.createElement("td");
        td.innerText = Object.values(book)[i];
        tr.appendChild(td);
    }
    table.appendChild(tr);
}

function newBookForm()
{
    const modal = document.querySelector("#modal");
    if(modal.className === "non-visible")
        modal.className = "visible";
    else
        modal.className = "non-visible";
}

const book1 = new Book("test", "test", "240", "yes");
const book2 = new Book("Harry Potter", "test", "300", "yes");

addBookToLibrary(book1);
addBookToLibrary(book2);

console.log(myLibrary);