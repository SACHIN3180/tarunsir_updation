let numElem = document.querySelectorAll('.num')
let inputElem = document.querySelector(".inputEle");



numElem.forEach((num) => {

    num.addEventListener('click',()=>{
        inputElem.innerHTML = num.innerHTML
    })
})
