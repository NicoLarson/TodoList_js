document.addEventListener('DOMContentLoaded', () => {

    const clear = document.querySelector('section section:first-child i')
    const dateElement = document.querySelector('section section:first-child p')
    const list = document.querySelector('section section:last-child ul')
    const input = document.querySelector('section section:last-child section input')

    const CHECK = "fa-check-circle"
    const UNCHECK = "fa-circle"
    const LINE_THROUGH = "lineThroug"

    // Variable
    let LIST = [],
        id = 0



    const options = { weekday: 'long', day: 'numeric', month: 'long' }
    const today = new Date()

    dateElement.innerHTML = today.toLocaleDateString('fr-FR', options)

    let addToDo = (toDo, id, done, trash) => {
        if (trash) {
            return
        }
        const DONE = done ? CHECK : UNCHECK
        const LINE = done ? LINE_THROUGH : ""
        const item = `<li>
                        <i class="far ${DONE}" job="complete" id="${id}"></i>
                        <p class="text ${LINE}">${toDo}</p>
                        <i class="far fa-trash-alt" job="delete" id="${id}"></i>
                    </li>`

        const position = 'beforeend'
        list.insertAdjacentHTML(position, item)
    }

    input.addEventListener('keyup', (e) => {

        if (e.keyCode == 13) {
            const toDo = input.value
            if (toDo) {
                addToDo(toDo, id, false, false)
                LIST.push({
                    name: toDo,
                    id: id,
                    done: false,
                    trash: false
                })
            }
            input.value = ""
            id++
        }

    })

    let completeToDo = (e) => {
        e.classList.toggle(CHECK)
        e.classList.toggle(UNCHECK)
        e.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH)
        LIST[e.id].done = LIST[e.id].done ? false : true;

    }

    let removeTodo = (e) => {
        e.parentNode.parentNode.removeChild(e.parentNode)
        LIST[e.id].trash = true;
    }
    list.addEventListener('click',(event)=>{
        const element = event.target
        const elementJob = element.attributes.job.value

        if(elementJob == "complete"){
            completeToDo(element)
        }else if(elementJob == "delete"){
            removeTodo(element)
        }
    })




})