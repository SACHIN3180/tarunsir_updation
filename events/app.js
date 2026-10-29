let btn1Element = document.querySelector('#btn1')
console.log(btn1Element)

let btn2Element = document.querySelector('#btn2')
console.log(btn2Element)

let paraElement = document.querySelector('.para')

btn1Element.addEventListener('click', () => {

})

btn2Element.addEventListener('input',
    ()=>{
            paraElement.style.background = 'yellow'
            paraElement.style.color = 'red'
    }
)








