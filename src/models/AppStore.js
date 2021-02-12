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
      self.todos.push({
        key: slugify(value),
        value: value,
        done: false
      })
    },
    removeTodo (todo) {
      destroy(todo)
    }
  }))

export default AppStore
