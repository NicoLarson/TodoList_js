document.addEventListener('DOMContentLoaded', () => {

    const dateElement = document.querySelector('section section:first-child p')
    const list = document.querySelector('section section:last-child ul')
    const input = document.querySelector('section section:last-child section input')

    const reset = document.querySelector('section section:first-child i')

    // Variable
    let LIST = [],
        id = 0


    // Date
    const options = { weekday: 'long', day: 'numeric', month: 'long' }
    const today = new Date()

    dateElement.innerHTML = today.toLocaleDateString('fr-FR', options)


    // Ajouter une tâche
    const CHECK = "fa-check-circle"
    const UNCHECK = "fa-circle"
    const LINE_THROUGH = "lineThroug"

    let addToDo = (toDo, id, done) => {
        const DONE = done ? CHECK : UNCHECK
        const LINE = done ? LINE_THROUGH : ""
        const item = `<li>
                        <i class="far ${DONE}" id="${id}"></i>
                        <p class="text ${LINE}">${toDo}</p>
                        <i class="far fa-trash-alt" id="${id}"></i>
                    </li>`

        const position = 'beforeend'
        list.insertAdjacentHTML(position, item)
    }

    input.addEventListener('keyup', (e) => {

        if (e.keyCode == 13) {
            const toDo = input.value
            if (toDo) {
                addToDo(toDo, id, false)
                LIST.push({
                    name: toDo,
                    id: id,
                    done: false,
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

    list.addEventListener('click', (event) => {
        const element = event.target
        const elementClass = element.attributes.class.value

        if (elementClass == "far fa-check-circle" || elementClass == "far fa-circle") {
            completeToDo(element)
        } else if (elementClass == "far fa-trash-alt") {
            removeTodo(element)
        }
    })


    reset.addEventListener('click',()=>{
        LIST = []
        id = 0
        list.innerHTML = ""
    })
    


})