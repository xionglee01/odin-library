const myLibrary = [];
const modal = document.querySelector("#modal");


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


//MAKE A CREATE CARD FUNCTION


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
    if(modal.className === "non-visible")
        modal.className = "visible";
    else
        modal.className = "non-visible";
}

window.onclick = function(e)
{
    const container = document.querySelector(".container");
    if(e.target === container)
    {
        modal.className = "non-visible";
    }
}
console.log(myLibrary);