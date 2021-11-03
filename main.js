// Importing library
import { create, log, select, is_url } from "./MyLibrary.js";
// --------------------------------------------------------------- //

const bookContainer = select(".book-shelf");

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

class Book {
  constructor(title, author, image) {
    this.title = title;
    this.author = author;
    this.image = image;
  }
}

// rendering books to the DOM
for (let i = 0; i < books.length; i++) {
  const book = new Book(books[i].title, books[i].author, books[i].image);

  let bookEl = create("div", `book`);
  let titleEl = create("span", "title");
  let authorEl = create("span", "author");
  let imgEl = create("img");

  titleEl.append(book["title"]);
  authorEl.append(book["author"]);
  imgEl.append(book["image"]);
  imgEl.setAttribute("src", books[i]["image"]);

  bookEl.append(imgEl, titleEl, authorEl);
  bookContainer.append(bookEl);
  document.body.append(bookContainer);
}

// -------------------------------------------------------------------------------------------------- //

// add window popup Section
const errorMsg = select(".error");
const successMsg = select(".success");
const uploadBtn = select("button");
const form = select("form");
const titleInput = select('input[name="title"]');
const authorInput = select('input[name="author"]');
const urlInput = select('input[name="url"]');
const addButton = select('input[type="submit"]');

// preventing form from submitting
form.onsubmit = (e) => e.preventDefault();

// toggle form
uploadBtn.onclick = () => form.classList.toggle("active");

// close form window
document.onkeydown = (e) => {
  if (e.key === "Escape") form.classList.remove("active");
};

// display success Msg
const success = () => (successMsg.style.display = "block");
// display error Msg
const error = () => (errorMsg.style.display = "block");

// render new book to the DOM
addButton.onclick = () => {
  if (
    titleInput.value !== "" &&
    authorInput.value !== "" &&
    is_url(urlInput.value)
  ) {
    // grab inputField values
    let titleText = titleInput.value;
    let authorText = authorInput.value;
    let urlText = urlInput.value;

    // push the new book to the books Array
    books.push({
      title: titleText,
      author: authorText,
      image: urlText,
    });

    // create components
    let bookEl = create("div", `book`);
    let titleEl = create("span", "title");
    let authorEl = create("span", "author");
    let imgEl = create("img");

    // grab new book
    const newBook = books[books.length - 1];

    //  append newBook properties to components
    titleEl.append(newBook.title);
    authorEl.append(newBook.author);
    imgEl.append(newBook.image);
    imgEl.setAttribute("src", newBook.image);

    // appending components
    bookEl.append(imgEl, titleEl, authorEl);
    bookContainer.append(bookEl);
    document.body.append(bookContainer);

    success();
    errorMsg.style.display = "none";
  } else {
    error();
    successMsg.style.display = "none";
  }

  // clearing InputFields
  titleInput.value = "";
  authorInput.value = "";
  urlInput.value = "";
};
