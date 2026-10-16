let inputElem = document.querySelector('input')
let boxElem = document.querySelector('.main')
let btnElem = document.querySelector('#btn')

// function copyCat(){

//   boxElem.innerHTML  =inputElem.value

// }

btnElem.addEventListener('click', () => {

 boxElem.innerHTML =  inputElem.value

})


