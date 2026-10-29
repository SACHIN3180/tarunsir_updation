let btn1Element = document.querySelector("#btn1")
let btn2Element = document.querySelector('#btn2')
let btn3Element = document.querySelector('#btn3')
let paraElement = document.querySelector('#mainDiv')

btn1Element.addEventListener("click", () => {
    paraElement.classList.add("active")
    btn1Element.classList.add("active")
})

btn2Element.addEventListener("click", () => {
    paraElement.classList.remove("active")
    btn1Element.classList.remove("active")
})

btn3Element.addEventListener("click", () => {
    paraElement.classList.toggle("active")
})

let btn4Elem = document.querySelector('#btn4')
let bodyElm = document.querySelector('body')

btn4Elem.addEventListener('click', () => {
    let rElem = Math.floor(Math.random() * 255)
    let gElem = Math.floor(Math.random() * 255)
    let bElem = Math.floor(Math.random() * 255)

    bodyElm.style.background = `rgb(${rElem},${gElem},${bElem})`
    console.log("object",rElem,gElem,bElem)
})

 