document.addEventListener('DOMContentLoaded', () => {

    let addIcon = document.querySelector('#add i')
    let newTodoTitle = document.querySelector('#add input')
    let todoListSection = document.querySelector('main section ul')
    let todoInList = document.getElementsByTagName('li')

    let deleteTodo = document.getElementsByClassName('.fa-trsah')
    let modifyTodo


    let todoArray = []

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
    let displayTodoList = () => {
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

    //** AJOUTER */
    let addNewTodo = () => {
        let newTodo = new Todo(`${newTodoTitle.value}`, "todo", todoArray[-1])
        todoArray.push(newTodo)
        console.table(todoArray)
        displayTodoList()
        newTodoTitle.value = ""
    }

    addIcon.addEventListener('click', () => {
        newTodoTitle.value != "" ? addNewTodo() : false
    })

    //* CHECK UNCHECK
    let checkUncheck = () => {
        for (let i = 0; i < todoInList.length; i++) {
            if (todoArray[i].status == "todo") {
                todoArray[i].status = "done"
            } else if (todoArray[i].status == "done") {
                todoArray[i].status = "todo"
            }
            displayTodoList()
            console.table(todoArray)
        }
    }

    for (key in todoInList)
        todoInList[key].addEventListener('click', () => {
            console.log(todoInList[key])
        })


    //* REMOVE 


})