// Local Storage
class Storage {
  static addToStorage(todoArr) {
    let storage = localStorage.setItem("todo", JSON.stringify(todoArr))
    return storage
  }

  static getStorage() {
    let storage = localStorage.getItem("todo") === null
      ? []
      : JSON.parse(localStorage.getItem("todo"))
      return storage
  }
}

export default Storage