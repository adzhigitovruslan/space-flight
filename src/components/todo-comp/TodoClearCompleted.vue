<template>
  <button class="todo__clear" @click="clearCompleted">Clear Completed</button>
</template>

<script>
export default {
  name: 'todo-clear-completed',
  methods: {
    clearCompleted() {
      this.$store.dispatch('clearCompleted')
    },
  },
}
</script>

<style lang="scss" scoped>
.todo {
  &__clear {
    background: none;
    color: #5b5e7e;
    transition: all 0.5s ease;

    &:hover {
      color: #e3e4f1;
    }
  }
}
</style>
