document.addEventListener('DOMContentLoaded', () => {

    let add = document.querySelector('#add i')
    let addTodo = document.querySelector('#add p')
    let liste = document.querySelector('main section ul')
    let deleteTodo, modifyTodo

    let todoList = ["Tache 1", "Tache 2", "Tache 3"]

    add.addEventListener('click', () => {
        todoList.push(addTodo.value)
        console.log(todoList)
    })

    let displayTodoList = () => {
        for (let todo in todoList) {
            
        }
    }


})