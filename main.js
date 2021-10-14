// Importing library
import { select, create } from "./MyLibrary.js";
// --------------------------------------------------------------- //

/* start
 **************************************** */
let main = select("main");
let bookContainer = create("div", "bookContainer");

let books = [
  {
    title: "Beginning JavaScript",
    author: "Paul Wilton",
    image: "./Images/book1.jpg",
  },
  {
    title: "learn JavaScript WithEase",
    author: "Stephen blumenthal",
    image: "./Images/book2.jpg",
  },
  {
    title: "Jumping into C++",
    author: "alex allain",
    image: "./Images/book3.jpg",
  },
  {
    title: "the complete software developers career guide",
    author: "john sonmez",
    image: "./Images/book4.jpg",
  },
  {
    title: "Learning python",
    author: "Mark lits",
    image: "./Images/book5.jpg",
  },
  {
    title: "python programming",
    author: "Adam stewart",
    image: "./Images/book6.jpg",
  },
  {
    title: "learn to program with c",
    author: "noel kalicharan",
    image: "./Images/book7.jpg",
  },
  {
    title: "healing your emotional self",
    author: "beverly engel",
    image: "./Images/book8.jpg",
  },
  {
    title: "Easy java programming for beginners",
    author: "felix alvaro",
    image: "./Images/book9.jpg",
  },
  {
    title: "cnc programming tutorials examples",
    author: "I wrote it",
    image: "./Images/book10.jpg",
  },
];

/* rendering books
 **************************************** */
for (let b of books) {
  let book = create("div", `book`);
  let img = create("img");
  let title = create("span", "title");
  let author = create("span", "author");

  title.append(b.title);
  author.append(b.author);
  img.setAttribute("src", b.image);

  book.append(img, title, author);
  bookContainer.append(book);
  main.append(bookContainer);
}

/* adding new books
 **************************************** */
const window = select(".window");
const author = select("#author");
const title = select("#title");
const link = select("#link");
const btn = select("button");
const addBtn = select('input[value="Add Book"]');
const close = select(".close");
const error = select(".error");

function showWindow() {
  window.classList.add("active");
  bookContainer.classList.add("active");
}

function closeWindow() {
  window.classList.remove("active");
  bookContainer.classList.remove("active");
}

// adding new book function
function addBook(e) {
  e.preventDefault();
  if (title.value === "" || author.value === "" || link.value === "") {
    error.style.display = "block";
  } else {
    let newBook = {
      title: title.value,
      author: author.value,
      image: link.value,
    };

    books.push(newBook); // pushing the new book info into the array

    for (let i = 0; i < 1; i++) {
      let book = create("div", `book`);
      let img = create("img");
      let title = create("span", "title");
      let author = create("span", "author");

      img.setAttribute("src", newBook.image);
      title.append(newBook.title);
      author.append(newBook.author);

      book.append(img, title, author);
      bookContainer.append(book);
      main.append(bookContainer);
    }
  }
}

btn.addEventListener("click", showWindow);
close.addEventListener("click", closeWindow);
addBtn.addEventListener("click", addBook);
