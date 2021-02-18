import { types, destroy } from 'mobx-state-tree'

import Todo from './Todo'

function slugify (x) {
  return encodeURIComponent(x.toLowerCase().replace(/\s+/gim, '-'))
}

const AppStore = types
  .model({
    todos: types.array(Todo)
  })
  .views(self => ({
    get itemsLeft () {
      return self.todos.filter(todo => !todo.done).length
    }
  }))
  .actions(self => ({
    addTodo (value) {
      if (!self.hasTodo(value)) {
        self.todos.push({
          key: value.key || slugify(value),
          value: value.value || value,
          done: value.done || false
        })
      }
    },
    removeTodo (todo) {
      destroy(todo)
    },
    hasTodo (todo) {
      return self.todos.find(t => t.value === todo)
    },
    getFilteredTodos (filter = 'ALL') {
      const states = {
        ALL: self.todos,
        ACTIVE: self.todos.filter(todo => !todo.done),
        COMPLETED: self.todos.filter(todo => todo.done)
      }
      return states[filter]
    },
    clearCompleted () {
      self.todos = self.todos.filter(todo => !todo.done)
    },
    setAll (done) {
      self.todos.forEach(todo => { todo.done = done })
    }
  }))

export default AppStore
