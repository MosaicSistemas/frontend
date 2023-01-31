var modal = document.getElementById('modal')
modal.addEventListener('show.bs.modal', function (event) {
// Button that triggered the modal
var button = event.relatedTarget
// Extract info from data-bs-* attributes
var produto = button.parentElement
var nome = produto.querySelector('.nome').textContent
var img = produto.querySelector('.img').src
var desc = produto.querySelector('.desc').textContent
var valor = produto.querySelector('.valor').textContent.split('/')[0]
var pedido_minimo = produto.querySelector('.valor').textContent.split('/')[1].slice(0, -5)
// Update the modal's content.
var nome_produto = modal.querySelector('#nome_produto')
var img_produto = modal.querySelector('#img_produto')
var valor_produto = modal.querySelector('#valor_produto')
var desc_produto = modal.querySelector('#desc_produto')

nome_produto.textContent = nome
img_produto.src = img
valor_produto.textContent = valor
desc_produto.textContent = desc

var input_quantidade = modal.querySelector('#quantidade')
input_quantidade.min = pedido_minimo
input_quantidade.value = pedido_minimo
input_quantidade.step = pedido_minimo
})