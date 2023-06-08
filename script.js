const author = document.querySelector(".author");
const title = document.querySelector(".title");
const pages = document.querySelector(".pages");

const popUp = document.querySelector(".popUp");
const closeButton = document.querySelector(".closeButton");
const openButton = document.querySelector(".openButton");
const saveButton = document.querySelector(".saveButton");

const content = document.querySelector(".content");

openButton.addEventListener("click", () => {
  popUp.showModal();
});

closeButton.addEventListener("click", () => {
  popUp.close();
});

function Book(a, b, c) {
  this.a = a;
  this.b = b;
  this.c = c;
}

let myLibrary = [];

function act() {
  saveButton.click();
}

saveButton.addEventListener("click", () => {
  let book = new Book(title.value, author.value, pages.value);
  myLibrary.push(book);
  console.log(myLibrary);
  content.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    //container
    const bookContainer = document.createElement("div");
    bookContainer.classList.add("bookContainer");

    //firstRow
    const firstRow = document.createElement("div");
    firstRow.classList.add("firstRow");
    const xButton = document.createElement("button");
    xButton.classList.add("xButton");
    xButton.textContent = "x";
    xButton.addEventListener("click", () => {
      myLibrary.splice(i, 1);
      console.log(myLibrary);
      alert("This book will be deleted after adding another");
    });
    firstRow.appendChild(xButton);

    //titleRow
    const titleRow = document.createElement("div");
    firstRow.classList.add("titleRow");

    //authorRow
    const authorRow = document.createElement("div");
    firstRow.classList.add("authorRow");

    //pagesRow
    const pagesRow = document.createElement("div");
    firstRow.classList.add("pagesRow");

    //lastRow
    const lastRow = document.createElement("div");
    lastRow.classList.add("lastRow");

    const lastRowText = document.createElement("div");
    lastRowText.classList.add("lastRowText");
    lastRowText.textContent = "Marks as read";

    const lastButtDiv = document.createElement("div");
    lastButtDiv.classList.add("lastButtDiv");
    const lastButton = document.createElement("button");
    lastButton.classList.add("lastButton");
    lastButton.textContent = "✓";
    lastButton.addEventListener("click", () => {
      lastButton.classList.add("lastButtonNew");
    });
    lastButtDiv.appendChild(lastButton);
    lastRow.append(lastRowText, lastButtDiv);

    titleRow.textContent = `Title: ${myLibrary[i].a}`;
    authorRow.textContent = `Author: ${myLibrary[i].b}`;
    pagesRow.textContent = `Pages: ${myLibrary[i].c}`;

    bookContainer.append(firstRow, titleRow, authorRow, pagesRow, lastRow);
    content.appendChild(bookContainer);
  }
});
