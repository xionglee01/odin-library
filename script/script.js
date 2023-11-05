const myLibrary = [];
const modal = document.querySelector("#modal");
const cardContainer = document.querySelector(".cardContainer");


function Book(index, title, author, page, read)
{    // constructor
    this.index = index;
    this.title = title;
    this.author = author;
    this.page = page;
    this.read = read;
}

function addtoLibrary()
{
    const book = document.querySelectorAll("input");
    let new_book = new Book(myLibrary.length, book[0].value, book[1].value, book[2].value, book[3].checked);
    myLibrary.push(new_book);
    //addtoTable(new_book);
    console.log(myLibrary);
    createCard(new_book);
}


//MAKE A CREATE CARD FUNCTION
function createCard(book)
{
    const container = document.createElement("div");
    container.className = "con";
    container.id = book.index;
    const closed = document.createElement("button");
    closed.innerText = "X";
    closed.classList.add("close", "non-visible");
    closed.addEventListener("click", remove);
    container.appendChild(closed);

    let size = Object.keys(book).length;

    for(let i = 1; i < size; i++)
    {
        const header = document.createElement("h4");
        if(i < size - 1)
        {
            header.innerText = Object.keys(book)[i].toUpperCase() + ": " + Object.values(book)[i];
        }
        else
        {
            header.innerText = Object.keys(book)[i].toUpperCase() + ": ";
            const button = document.createElement("button");
            button.addEventListener('click', changeRead);
            button.id = "readButton";
            if(book.read === true)
            {
                button.className = "read";
                button.innerText = "YES";
            }
            else
            {
                button.className = "notread";
                button.innerText = "NO";
            }
            header.appendChild(button);
        }
        container.appendChild(header);
    }

    container.addEventListener("mouseover", showClose);
    container.addEventListener("mouseout", showClose);

    cardContainer.appendChild(container);
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

function changeRead()
{
    if(this.className === "read")
    {
        this.className = "notread";
        this.innerHTML = "NO";
    }
    else
    {
        this.className = "read";
        this.innerHTML = "YES";
    }
}


function showClose()
{
    const button = this.firstElementChild;
    if(button.classList.contains("non-visible"))
    {
        button.classList.replace("non-visible", "visible");
    }
    else 
    {
        button.classList.replace("visible", "non-visible");
    }
}

function remove()
{
    const parent = this.parentNode;
    let book = null;
    myLibrary.forEach(element => {
        if(element.index === Number(parent.id))
        {
            book = element;
        }   
    });
    let index = myLibrary.indexOf(book);
    myLibrary.splice(index, 1);
    console.log(myLibrary);
    parent.remove();
}