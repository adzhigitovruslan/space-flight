<template>
  <div class="todo__view-options mobile">
    <button
      class="todo__options-text mobile"
      :class="{ active: filter == 'all' }"
      @click="changeFilter('all')"
    >
      All
    </button>
    <button
      class="todo__options-text mobile"
      :class="{ active: filter == 'active' }"
      @click="changeFilter('active')"
    >
      Active
    </button>
    <button
      class="todo__options-text mobile"
      :class="{ active: filter == 'completed' }"
      @click="changeFilter('completed')"
    >
      Completed
    </button>
  </div>
</template>

<script>
export default {
  name: 'todo-filtered-mobile',
  computed: {
    filter() {
      return this.$store.getters.filter
    },
  },
  methods: {
    changeFilter(filter) {
      this.$store.dispatch('updateFilter', filter)
    },
  },
}
</script>

<style lang="scss" scoped>
.todo {
  &__view-options.mobile {
    display: flex;
    @media (min-width: 450px) {
      display: none;
    }
  }
  &__options-text {
    transition: all 0.5s ease;
    background: none;

    color: #5b5e7e;
    font-weight: 700;
    &:hover {
      color: #e3e4f1;
    }
    &.active {
      color: #3a7cfd;
    }
  }
  &__options-text:not(:last-child) {
    margin-right: 19px;
  }
}
</style>
