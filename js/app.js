document.addEventListener('DOMContentLoaded', () => {

    let addIcon = document.querySelector('#add i')
    let newTodoTitle = document.querySelector('#add input')
    let todoListSection = document.querySelector('main section ul')
    let todoInList = document.getElementsByTagName('li')

    let deleteTodo = document.getElementsByClassName('.fa-trsah')
    let modifyTodo


    let todoArray = []
    let displayArray = () => {
        for (key in todoArray)
            todoListSection.innerHTML += `<li class="todo">${todoArray[key].title} <i class="far fa-square"></i></li>`
        switch (todoArray[key].status) {
            case ("todo"):
                todoInList[key].className = 'todo'
                break;
            case ("done"):
                todoInList[key].className = 'todo'
                break;
            case ("modif"):
                todoInList[key].className = 'todo'
                break;
            default:
                console.log("Default")
        }
    }

    let Todo = function (title, status, position) {
        this.title = title
        this.status = status
        this.position = position
    }

    //** TEST Status

    let sportTodo = new Todo("sport", "todo")
    let menageTodo = new Todo("ménage", "done")
    let marcherTodo = new Todo("marcher", "todo")
    let lingeTodo = new Todo("linge", "modif")

    todoArray.push(sportTodo, menageTodo, marcherTodo, lingeTodo)
    console.table(todoArray)



    //** AFFICHER
    /*     let displayTodoList = () => {
            todoListSection.innerHTML = ""
            for (key in todoArray)
                switch (todoArray[key].status) {
                    case ("todo"):
                        todoListSection.innerHTML += `<li class="todo">${todoArray[key].title} <i class="far fa-square"></i></li>`
                        break;
                    case ("done"):
                        todoListSection.innerHTML += `<li class="done">${todoArray[key].title} <i class="far fa-check-square"></i></li>`
                        break;
                    case ("modif"):
                        todoListSection.innerHTML += `<li><input type="text" placeholder="${todoArray[key].title}"><i class="fas fa-edit"></i><i class="far fa-trash-alt">
                    </i></li>`
                        break;
                    default:
                        console.log("Default")
                }
        }
        displayTodoList()
     */
    //** AJOUTER */
/*     let addNewTodo = () => {
        let newTodo = new Todo(`${newTodoTitle.value}`, "todo", todoArray[-1])
        todoArray.push(newTodo)
        console.table(todoArray)
        displayTodoList()
        newTodoTitle.value = ""
    }

    addIcon.addEventListener('click', () => {
        newTodoTitle.value != "" ? addNewTodo() : false
    })
 */
    //* CHECK UNCHECK
  /*   let checkUncheck = (i) => {
        switch (todoArray[i].status) {
            case "todo":
                todoArray[i].status = "done"
                break;
            case "done":
                todoArray[i].status = "todo"
                break
            default:
                false
        }
        console.table(todoArray)
        displayTodoList()
    }

    todoInList[0].addEventListener('click', () => {
        checkUncheck(0)
    })
    todoInList[1].addEventListener('click', () => {
        checkUncheck(1)
    })
    todoInList[2].addEventListener('click', () => {
        checkUncheck(2)
    })
 */
    //* REMOVE 


})