let changeMainboxElem = document.querySelectorAll('#changeMainbox')
let number = []
// console.log(mainElem)

changeMainboxElem.forEach((box) => {
    console.log(box)

    box.addEventListener('mouseenter', () => {
        if (number.length < 9) {
            box.style.background = 'red'
        }
        if(!number.includes(box.innerHTML)){
            number.push(box.innerHTML)
            console.log(number)
        }
    })

    box.addEventListener('mouseleave', () => {
        box.style.background = 'dimgray'
    })



})      