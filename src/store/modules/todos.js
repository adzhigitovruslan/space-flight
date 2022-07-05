import firebase from 'firebase/compat/app'
import Task from '@/store/task_help.js'

export default {
  state: {
    filter: 'all',
    todos: [],
  },
  mutations: {
    ADD_TO_DO(state, todo) {
      state.todos.push(todo)
    },
    DELETE_TODO(state, id) {
      const index = state.todos.findIndex((item) => (item.id = id))
      state.todos.splice(index, 1)
    },
    UPDATE_TODO(state, { id, completed, title }) {
      const task = state.todos.find((t) => {
        return t.id == id
      })
      task.completed = completed
      task.title = title
    },
    CLEAR_COMPLETED(state) {
      state.todos = state.todos.filter((todo) => !todo.completed)
    },
    LOAD_TASKS(state, todo) {
      state.todos = todo
    },
    UPDATE_FILTER(state, filter) {
      state.filter = filter
    },
  },
  actions: {
    async addTodo(context, todo) {
      context.commit('CLEAR_ERROR')
      context.commit('SET_LOADING', true)
      try {
        const newTask = new Task(
          todo.title,
          todo.completed,
          todo.editing,
          context.getters.user.id
        )
        const task = await firebase.database().ref('tasks').push(newTask)
        context.commit('ADD_TO_DO', {
          ...newTask,
          id: task.key,
        })

        context.commit('SET_LOADING', false)
      } catch (err) {
        context.commit('SET_LOADING', false)
        context.commit('SET_ERROR', err)
        throw err
      }
    },
    async deleteTodo(context, id) {
      await firebase.database().ref('tasks').child(id).remove()
      context.commit('DELETE_TODO', id)
    },
    async updateTodo(context, { id, completed, title }) {
      await firebase.database().ref('tasks').child(id).update({
        completed,
        title,
      })
      context.commit('UPDATE_TODO', { id, completed, title })
    },
    clearCompleted(context) {
      firebase
        .database()
        .ref('tasks')
        .orderByChild('completed')
        .equalTo(true)
        .on('value', (snapshot) => {
          snapshot.forEach((snap) => {
            snap.ref.remove()
          })
        }),
        (err) => {
          context.commit('SET_ERROR', err)
        }

      context.commit('CLEAR_COMPLETED')
    },
    async loadTasks(context) {
      context.commit('CLEAR_ERROR')
      context.commit('SET_LOADING', true)
      try {
        const task = await firebase.database().ref('tasks').once('value')
        const todoTasks = task.val()
        const arrayOfTasks = []
        Object.keys(todoTasks).forEach((key) => {
          const t = todoTasks[key]
          arrayOfTasks.push(
            new Task(t.title, t.completed, t.editing, t.user, key)
          )
        })
        context.commit('LOAD_TASKS', arrayOfTasks)
        context.commit('SET_LOADING', false)
      } catch (err) {
        context.commit('SET_LOADING', false)
      }
    },
    updateFilter(context, filter) {
      context.commit('UPDATE_FILTER', filter)
    },
  },
  getters: {
    remaining(state, getters) {
      return getters.tasks.filter((todo) => !todo.completed).length
    },
    tasks(state, getters) {
      return state.todos.filter((task) => {
        return task.user === getters.user.id
      })
    },
    taskNotCompleted(state, getters) {
      return getters.tasks.filter((todos) => {
        return !todos.completed
      })
    },
    taskCompleted(state, getters) {
      return getters.tasks.filter((todo) => {
        return todo.completed
      })
    },
    filter: (s) => s.filter
  },
}
