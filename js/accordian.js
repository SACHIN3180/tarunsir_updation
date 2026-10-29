let allQuestions = document.querySelectorAll('.card h2')


allQuestions.forEach((quest, index) => {
    quest.addEventListener('click', () => {

        allQuestions.forEach((q,i)=>{
            if(i!=index){
                q.lastElementChild.innerHTML ="+"
                q.nextElementSibling.classList.remove('show')
            }
        })

        quest.nextElementSibling.classList.toggle('show')
        if (quest.lastElementChild.innerHTML == '+') {
            quest.lastElementChild.innerHTML = '-'
        } else {
            quest.lastElementChild.innerHTML = '+'
        }

    })
})