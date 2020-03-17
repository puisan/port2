const aboutElement = document.getElementById("about");
aboutElement.classList.add("about")

const ulElement = document.getElementById("history");
const liElement = document.createElement("li");
const liElement2 = document.createElement("li");
const liElement3 = document.createElement("li");
liElement.textContent = "webエンジニア、webデザイナー"
liElement2.textContent = " 経歴: ネットワークエンジニアとして勤めていた会社を退職。独学やスクールでHTML,CSS,Javascriptなどを学び、その後東京を拠点にフリーランスとして活動を始める。他にも音楽活動やイラスト作成などアーティストとしても活動中。"
liElement3.textContent = ""

ulElement.appendChild(liElement);
ulElement.appendChild(liElement2);
// ulElement.appendChild(liElement3);


const element1 = document.getElementById("main-phrase");
element1.innerHTML = "人類がAIに勝る想像力は、芸術分野いおいて大切な能力です。なのでAIの進化による人類の価値を追求するとなると、芸術の分野は無視できないように思います。しかしAIも音楽を作ったり絵を描いたり、芸術分野にも参入してきています。人類はAIから想像力を守れるのか、それともAIを味方につけて利用していくのか、AIに負けてしまうのか、それをAI、アーティスト両側面からその真実を確かめていく。";
console.log(element1.innerHTML);