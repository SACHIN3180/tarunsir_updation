let inputElemt = document.querySelector('#input')
let butnElemnt = document.querySelector('#btn')


console.log(butnElemnt)
console.log(inputElemt)

function valueEle() {
    if (butnElemnt.innerHTML === 'Show') {
        butnElemnt.innerHTML = 'Hide'
        inputElemt.type = 'text'
    } else {
        butnElemnt.innerHTML = 'Show'
        inputElemt.type = 'password'
    }
}



















