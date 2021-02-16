import { types, getParent } from 'mobx-state-tree'

const Todo = types
// descreva o que a gente considera um TODO
  .model({
    key: types.identifier,
    value: '',
    done: false
  })
  .views(self => ({

  }))
  .actions(self => ({
    toggle () {
      self.done = !self.done
    },
    rename (nextValue) {
      self.value = nextValue
    },
    remove () {
      getParent(self, 2).removeTodo(self)
    }
  }))

export default Todo
