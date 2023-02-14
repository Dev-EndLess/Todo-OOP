import Storage from "./storage.js";

const lists = document.querySelector("[data-lists]");
const input = document.querySelector("[data-input]");

// Empty Array
let todoArray = Storage.getStorage()

// Display the todo in the DOM
class UI {
  static displayData() {
    let displayData = todoArray.map((item) => {
      return `
        <div class="todo">
        <p>${item.todo}</p>
        <span class="remove" data-id = ${item.id}>🗑️</span>
        </div>
      `
    });
    lists.innerHTML = (displayData).join(" ")
  }
  static clearInput() {
    input.value = ""
  }
  static removeTodo() {
    lists.addEventListener("click", (e) => {
      if (e.target.classList.contains("remove")) {
        e.target.parentElement.remove()
      }
      let btnId = e.target.dataset.id;
      // Remove from array.
      UI.removeArrayTodo(btnId)
    });
  }
  static removeArrayTodo(id) {
    todoArray = todoArray.filter((item) => item.id !== +id);
    Storage.addToStorage(todoArray);
  }
}

export default UI