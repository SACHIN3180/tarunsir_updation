let mainBt = document.querySelector('#inputClr')
let bodyMain =document.body

// mainBt.addEventListener(
//     'beforChange', () => {
//         let rCode = Math.floor(Math.random() * 255)
//         let gCode = Math.floor(Math.random() * 255)
//         let bCode = Math.floor(Math.random() * 255)

//         bodyMain.style.background = mainBt.value
//         // bodyMain.style.background = `rgb(${rCode},${gCode},${bCode})`
        
//     }
// )

mainBt.addEventListener(
    'input',()=>{
        bodyMain.style.background = mainBt.value
    }
)