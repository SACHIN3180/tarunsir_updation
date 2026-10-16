let boxElem = document.querySelectorAll('.box')
let   numbers =[]      

boxElem.forEach((boxs) => {
    console.log(boxs)

    boxs.addEventListener('mouseenter', () => {
        if(numbers.length < 9 ){
            boxs.style.background = 'red'

        }

    })
    // boxs.addEventListener('click', () => {
    //     boxs.style.background = 'yellow'
    // })
    boxs.addEventListener('mouseleave', () => {
        boxs.style.background = 'dimgray'
    })
})