<template>
  <main class="page">
    <vue-particles
      color="#dedede"
      :particleOpacity="0.7"
      :particlesNumber="100"
      shapeType="circle"
      :particleSize="4"
      linesColor="#dedede"
      :linesWidth="0.8"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="100"
      :moveSpeed="1"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    >
    </vue-particles>
    <div class="page__background"></div>
    <div class="page__container _container">
      <div class="page__todo todo">
        <div class="todo__header">
          <h1 class="todo__header-text">TODO</h1>
          <div class="todo__icon">
            <i class="fa-solid fa-list-check"></i>
          </div>
        </div>
        <div class="todo__form">
          <form @submit.prevent>
            <input
              type="text"
              class="todo__input"
              placeholder="What should be done ?"
              v-model="newTodo"
              @keyup.enter="addTodo"
            />
            <button
              @click="addTodo"
              id="add-button"
              class="todo__button"
              type="submit"
            ></button>
          </form>
        </div>
        <div class="todo__container">
          <ul class="todo__list">
            <loader v-if="$store.getters.loading"></loader>
            <todo-item
              v-for="todo in todosFiltered"
              :key="todo.id"
              :todo="todo"
              v-else
            >
            </todo-item>
          </ul>
          <ul class="todo__footer">
            <todo-items-remaining></todo-items-remaining>
            <todo-filtered></todo-filtered>
            <todo-clear-completed></todo-clear-completed>
          </ul>
        </div>
        <div class="todo__footer mobile">
          <todo-filtered-mobile :filter="filter"></todo-filtered-mobile>
        </div>
      </div>
    </div>
    <div class="page__footer">
      <p>Double click to edit a todo</p>
      <p>Write down things to do before your flight begin</p>
    </div>
  </main>
</template>

<script>
import TodoItem from '@/components/todo-comp/TodoItem.vue'
import TodoItemsRemaining from '@/components/todo-comp/TodoItemsRemaining.vue'
import TodoFiltered from '@/components/todo-comp/TodoFiltered.vue'
import TodoFilteredMobile from '@/components/todo-comp/TodoFilteredMobile.vue'
import TodoClearCompleted from '@/components/todo-comp/TodoClearCompleted.vue'
import Loader from '@/components/Loader.vue'

export default {
  name: 'todo-list',
  data() {
    return {
      newTodo: '',
      idForTodo: 3,
      filter: 'all',
      beforeEditCache: '',
    }
  },
  components: {
    TodoItem,
    TodoItemsRemaining,
    TodoFiltered,
    TodoFilteredMobile,
    TodoClearCompleted,
    Loader,
  },
  computed: {
    todosFiltered() {
      if (this.$store.getters.filter === 'active') {
        return this.$store.getters.taskNotCompleted
      } else if (this.$store.getters.filter === 'completed') {
        return this.$store.getters.taskCompleted
      } else if (this.$store.getters.filter === 'all') {
        return this.$store.getters.tasks
      }
      return this.$store.getters.tasks
    },
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim().length == 0) {
        return
      } else {
        const task = {
          title: this.newTodo,
          completed: false,
          editing: false,
        }
        this.$store.dispatch('addTodo', task)
        this.newTodo = ''
      }
    },
  },
  created() {
    this.$store.dispatch('loadTasks')
  },
  mounted() {},
}
</script>

<style lang="scss" scoped>
#particles-js {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
}
._container {
  max-width: 570px;
  padding: 0 15px;
  margin: 0 auto;
}
.wrapper {
  min-height: 100%;
  overflow: hidden;
}

.page {
  padding: 15px;
  &__container {
    z-index: 1;
    position: relative;
    margin-top: calc(-160px + (-210 + 160) * ((100vw - 320px) / (1440 - 320)));
  }

  &__background {
    position: relative;
    width: 100%;
    height: calc(200px + (300 - 200) * ((100vw - 320px) / (1440 - 320)));
    overflow: hidden;
  }

  &__footer {
    color: #9495a5;

    font-size: 14px;
    text-align: left;

    margin-top: calc(40px + (49 - 40) * ((100vw - 320px) / (1440 - 320)));

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    p {
      width: 220px;
    }
    p:not(:last-child) {
      margin-bottom: 10px;
    }
  }
}
.todo {
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    // margin-top: calc(48px + (70 - 48) * ((100vw - 320px) / (1440 - 320)));
    margin-bottom: calc(40px + (48 - 40) * ((100vw - 320px) / (1440 - 320)));
  }

  &__header-text {
    color: #ffffff;
    font-weight: 700;
    font-size: calc(20px + (40 - 20) * ((100vw - 320px) / (1440 - 320)));
    letter-spacing: 15px;
  }

  &__icon {
    font-size: calc(20px + (26 - 20) * ((100vw - 320px) / (1440 - 320)));
    color: #ffffff;
    background: none;
  }

  @keyframes show {
    0% {
      transform: rotate(0deg);
      opacity: 0;
    }
    100% {
      transform: rotate(-360deg);
      opacity: 1;
    }
  }

  &__form {
    position: relative;
    margin-bottom: calc(16px + (24 - 16) * ((100vw - 320px) / (1440 - 320)));
    & .todo__button {
      position: absolute;
      left: calc(20px + 4 * (100vw - 320px) / 1120);
      top: 50%;
      transform: translateY(-50%);
    }
  }

  &__input {
    width: 100%;
    height: calc(48px + (64 - 48) * ((100vw - 320px) / (1440 - 320)));

    font-size: calc(12px + (18 - 12) * ((100vw - 320px) / (1440 - 320)));
    background: #25273d;
    box-shadow: 0px 35px 50px -15px rgba(0, 0, 0, 0.5);
    color: #c8cbe7;

    border-radius: 5px;

    padding-left: calc(52px + (72 - 52) * ((100vw - 320px) / (1440 - 320)));

    transition: all 0.1s linear;
  }

  &__input::-webkit-input-placeholder {
    color: #c8cbe7;

    font-size: calc(12px + (18 - 12) * ((100vw - 320px) / (1440 - 320)));
  }

  &__button {
    position: relative;

    width: calc(20px + (24 - 20) * ((100vw - 320px) / (1440 - 320)));
    height: calc(20px + (24 - 20) * ((100vw - 320px) / (1440 - 320)));

    border-radius: 50%;
    background: #393a4b;

    cursor: pointer;

    margin-right: calc(12px + (24 - 12) * ((100vw - 320px) / (1440 - 320)));

    transition: all 0.1s linear;

    &::after {
      content: '';
      position: absolute;
      top: 1px;
      left: 1px;
      right: 1px;
      bottom: 1px;
      background: #25273d;

      border-radius: 50%;
      transition: all 0.1s linear;
    }

    &:hover {
      background: linear-gradient(135deg, #55ddff 0%, #c058f3 100%);
      transition: all 0.1s linear;
    }
    &._icon-check {
      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 8px;
      color: #ffffff;

      background: linear-gradient(135deg, #55ddff 0%, #c058f3 100%);

      transition: all 0.1s linear;
      &::after {
        background: transparent;
        transition: all 0.1s linear;
      }
    }
  }

  &__footer {
    border-top: 1px solid #393a4b;
    box-shadow: 0 35px 50px -15px rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: space-between;

    background: #25273d;
    color: #5b5e7e;
    font-size: 14px;

    height: 50px;
    padding: 0 calc(20px + (24 - 20) * ((100vw - 320px) / (1440 - 320)));

    transition: all 0.1s linear;
  }

  &__footer.mobile {
    justify-content: center;
    margin-top: 16px;
    border-radius: 5px;
    border-top: none !important;
    @media (min-width: 450px) {
      display: none;
    }
  }

  &__list-item {
    color: #c8cbe7;
    font-size: calc(12px + 6 * (100vw - 320px) / 1120);

    cursor: pointer;

    flex: 1;
    transition: all 0.5s ease;
    &.completed {
      text-decoration: line-through;
      color: #4d5067;
    }
  }

  &__container {
    background: #25273d;
    box-shadow: 0px 35px 50px -15px rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    overflow: hidden;
  }
}
._icon-close {
  color: #979797;
  font-size: calc(11px + (17 - 11) * ((100vw - 320px) / (1440 - 320)));
  pointer-events: none;
  display: block;
}
</style>
