const apiKeyInput = document.getElementById('apiKey')
const gameSelect = document.getElementById('gameSelect')
const questionInput= documentgetElementById('questionInput')
const askButton = document.getElementById('askButton')
const form = document.getElementById('form')
const aiResponse = document.getElementById('aiResponse')

const enviarFormulario = (event) => {
    event.preventDefault()
}
form.addEventListener('submit', enviarFormulario)