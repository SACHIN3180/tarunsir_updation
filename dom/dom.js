let inputElement = document.getElementById("inpass")
let btnElement = document.getElementById("btn")

function showHidePass() {
    if (btnElement.innerHTML == "Show") {
        btnElement.innerHTML = 'Hide'
        inputElement.type = 'text'
    } else {
        btnElement.innerHTML = 'Show'
        inputElement.type = 'password'
    }
}