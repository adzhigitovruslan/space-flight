<template>
  <transition
    name="fade"
    enter-active-class="animated fadeInUp"
    leave-active-class="animated fadeOutDown"
  >
    <li class="todo__item">
      <div class="todo__item-left">
        <input
          type="checkbox"
          v-model="completed"
          @change="doneEdit"
          class="todo__checkbox"
          :id="todo.id"
        />
        <label
          :for="todo.id"
          class="todo__input-label"
          :class="{ completed: completed }"
        >
        </label>
        <label
          :for="todo.id"
          v-if="!editing"
          @dblclick="editTodo"
          class="todo__input-item"
          :class="{ completed: completed }"
        >
          {{ title }}
        </label>

        <input
          v-else
          class="todo__item-edit"
          type="text"
          v-model="title"
          @blur="doneEdit"
          @keyup.enter="doneEdit"
          @keyup.esc="cancelEdit"
          v-focus
        />
      </div>
      <button class="todo__close" @click="removeTodo(id)">
        <i class="fa-solid fa-circle-xmark"></i>
      </button>
    </li>
  </transition>
</template>

<script>
export default {
  name: 'todo-item',
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      id: this.todo.id,
      title: this.todo.title,
      completed: this.todo.completed,
      timestamp: this.todo.timestamp,
      editing: this.todo.editing,
      user: this.$store.getters.user.id,
      beforeEditCache: '',
    }
  },
  directives: {
    focus: {
      inserted: function (el) {
        el.focus()
      },
    },
  },

  methods: {
    removeTodo(id) {
      this.$store.dispatch('deleteTodo', id)
    },
    editTodo() {
      this.beforeEditCache = this.title
      this.editing = true
    },
    doneEdit() {
      if (this.title.trim() == 0) {
        this.title = this.beforeEditCache
      }
      this.editing = false

      this.$store.dispatch('updateTodo', {
        id: this.id,
        title: this.title,
        completed: this.completed,
      })
    },
    cancelEdit() {
      this.title = this.beforeEditCache
      this.editing = false
    },
  },
}
</script>

<style lang="scss" scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css');

.todo {
  &__input-item {
    @media (max-width: 1440px) {
      font-size: calc(14px + (20 - 14) * ((100vw - 320px) / (1440 - 320)));
    }
    font-size: 22px;
    width: 80%;
    cursor: pointer;
  }
  &__checkbox {
    position: absolute;
    z-index: -1;
    opacity: 0;
    transition: all 0.1s linear;
  }

  &__checkbox:checked ~ label.todo__list-item {
    text-decoration: line-through;
    transition: all 0.1s linear;
  }

  &__checkbox + label.todo__input-label {
    position: relative;
    display: inline-flex;
    user-select: none;

    border-radius: 50%;
    align-items: center;
    background: #393a4b;

    width: calc(20px + (24 - 20) * ((100vw - 320px) / (1440 - 320)));
    height: calc(20px + (24 - 20) * ((100vw - 320px) / (1440 - 320)));

    margin-right: calc(12px + (24 - 12) * ((100vw - 320px) / (1440 - 320)));

    cursor: pointer;

    transition: all 0.1s linear;

    &:hover {
      transition: all 0.1s linear;

      background: linear-gradient(135deg, #55ddff 0%, #c058f3 100%);
    }
  }

  &__checkbox + label.todo__input-label::before {
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
  &__checkbox:checked ~ label.todo__input-item {
    text-decoration: line-through;
    transition: all 0.1s linear;
    opacity: 0.7;
  }
  &__checkbox:checked + label.todo__input-label::before {
    content: '\f00c';
    display: block;
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
    color: #ffffff;
    font-size: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #55ddff 0%, #c058f3 100%);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: all 0.1s linear;
  }
  &__item {
    display: flex;
    align-items: center;
    justify-content: space-between;

    background: #25273d;

    padding: 0 calc(20px + (24 - 20) * ((100vw - 320px) / (1440 - 320)));
    height: calc(52px + (64 - 52) * ((100vw - 320px) / (1440 - 320)));

    transition: all 0.1s linear;

    cursor: pointer;

    animation-duration: 0.3s;

    &-left {
      display: flex;
      align-items: center;
      width: 100%;
    }
    &-label {
      color: #ffffff;
    }

    &-edit {
      color: #ffffff;
      width: 85%;
      border-bottom: 1px solid #ffffff;

      background: transparent;
    }
  }
  &__item:hover {
    .todo__close {
      opacity: 1;
    }
  }

  &__item:not(:last-child) {
    border-bottom: 1px solid #393a4b;
  }
  &__close {
    background: none;
    opacity: 0;
    transition: 0.2s ease;
    color: #ffffff;
    @media (max-width: 450px) {
      opacity: 1;
    }
  }
}
</style>
