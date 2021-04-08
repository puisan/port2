const aboutElement = document.getElementById("about");
aboutElement.classList.add("about")
const ulElement = document.getElementById("history");
const liElement = document.createElement("li");
const liElement2 = document.createElement("li");
const liElement3 = document.createElement("li");
liElement.textContent = "NFTアート"
liElement2.textContent = "テキスト"
liElement3.textContent = ""

ulElement.appendChild(liElement);
ulElement.appendChild(liElement2);
// ulElement.appendChild(liElement3);


const element1 = document.getElementById("main-phrase");
element1.innerHTML = "ここにテキストが入ります。";
console.log(element1.innerHTML);
