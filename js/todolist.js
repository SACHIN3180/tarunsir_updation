let inputElem = document.querySelector('#inputEnter')
let addBtnElem = document.querySelector('#addBtn')
let contentElem = document.querySelector('#ulList')


addBtnElem.addEventListener('click', () => {
    // console.log(inputElem.value)
    if (inputElem.value != '') {

        contentElem.innerHTML += `
        
                    <li class='libtn'>
                        <button class="btnComplete">Complete</button>
                        <p class="pSample">${inputElem.value}</p>
                        <button id='delTodo' class="btnDelete">Delete</button>
                    </li>
        `
        inputElem.value = ''

        let delBtn = document.querySelectorAll('#delTodo')


        delBtn.forEach((els) => {
            els.addEventListener('click', () => {

                els.parentElement.remove()

            })
        }
        )

        let completeBtnElem = document.querySelectorAll('.btnComplete')

        completeBtnElem.forEach((comple, index) => {

            comple.addEventListener('click', () => {
                console.log(comple,index)
                let paraElem = document.querySelector('p')
                paraElem.style.textDecoration = 'line-through'
            })
        })

    }
    else {
        alert('Enter todo')
    }


}
)






