// Procurar o botão
document.querySelector("#add-time")

// Quando clicar no botão
.addEventListener('click', cloneField)

// Executar uma ação
function cloneField() {
    // Duplicar os campos
    const newField = document.querySelector('.schedule-item').cloneNode(true)

    // Pegar os campos
    const fields = newField.querySelectorAll('input')
    
    // Para cada campo, limpar
    fields.forEach(function(field) {
        // Pegar o field atual e limpar
        field.value = ""
    })

    // Colocar na página
    document.querySelector('#schedule-items').appendChild(newField)
}