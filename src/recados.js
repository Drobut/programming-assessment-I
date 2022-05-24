
const usersJson = localStorage.getItem("users")
const indexUser = localStorage.getItem('indexUserLogged')
var users = JSON.parse(usersJson);
console.log("jsonusers", usersJson)

var cards = users[indexUser].cards
renderCards();

var sejabemvindo = document.getElementById('pageNome').innerHTML = "<b>Seja bem vindo, </b>" + users[indexUser].nomeSobrenome;

document.getElementById('sairbutton').onclick = function sair() {
  window.location.href = "http://127.0.0.1:5501/index.html"
}

function aparecerTexto() {
  document.getElementById("pageSair").innerHTML = "Sair";
}
function reset() {
  document.getElementById("pageSair").innerHTML = "";
}

document.getElementById('addButton').onclick = () => {

  const card = {
    id: null,
    title: "",
    description: "",
  }

  cards.push(card)
  renderCards()
}

function editCards(index) {

  var titleAuto = document.getElementById('titulo_' + index).value;
  var anotacaoAuto = document.getElementById('anotacao_' + index).value;

  cards[index].title = titleAuto
  cards[index].description = anotacaoAuto

  renderCards()
  salvarCard()
}


function deleteCards(index) {
  cards.splice(index, 1)
  salvarCard();
  renderCards();
}

function salvarCard() {
  users[indexUser].cards = cards
  localStorage.setItem("users", JSON.stringify(users))
}

function renderCards() {
  var cardsEle = document.querySelector('#cards')
  cardsEle.innerHTML = ''
  cards.map((card, index) => {
    card.id = index;
    let cardEle = document.createElement('div')
    cardEle.classList.add("card")
    cardEle.innerHTML = '<textarea type="textarea" onblur="editCards(' + index + ')" class="titulo" id="titulo_' + index + '" placeholder="Titulo" style="resize: none;" size="18" maxlength="18">' + card.title + '</textarea>' +
      '<textarea type="textarea" onblur="editCards(' + index + ')" class="anotacao" id="anotacao_' + index + '" placeholder="Escreva sua anotação aqui" style="resize: none;">' + card.description + '</textarea>' +
      '<div class="editaButtons">' +
      '<button id="excluirBtn" class="excluirButton" onClick="deleteCards(' + index + ')"></button>' +
      '</div>';
    cardsEle.append(cardEle)
  })
}
