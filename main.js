import Storage from "./storage.js"
import UI from "./ui.js"

const form = document.querySelector("[data-form]")
const input = document.querySelector("[data-input]")

// Make Object Instance
class Todo {
  constructor(id, todo) {
    this.id = id
    this.todo = todo
  }
}

// Empty Array
let todoArray = Storage.getStorage()

// Submit to localeStorage
form.addEventListener("submit", (e) => {
  // e.preventDefault();
  let id = Math.random() * 1000000
  const todo = new Todo(id, input.value)
  todoArray = [...todoArray, todo]
  UI.displayData()
  UI.clearInput()
  // Submit to localeStorage
  Storage.addToStorage(todoArray)
});

// Once the browser is loaded
window.addEventListener("DOMContentLoaded", () => {
  UI.displayData()
  // Remove from the dom
  UI.removeTodo()
});

