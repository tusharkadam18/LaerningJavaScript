const listOfBooks = [];
function addBook() {
  const bookname = document.getElementById("book").value;
  listOfBooks.push(bookname);
  alert("Book added sucessfully.");
}
function displayBooks() {
  //   const lable = document.createElement("label");
  //   lable.textContent = "<br><br>The List OF book As follows:";
  //   document.getElementById("lable").innerHTML = lable.textContent;
  document.getElementById("lable").innerHTML =
    "<br><br>The List OF books As follows:";
  const ul = document.querySelector("ul");
  ul.innerHTML = "";
  for (const book of listOfBooks) {
    const li = document.createElement("li");
    li.textContent = book;
    ul.append(li);
  }
}
