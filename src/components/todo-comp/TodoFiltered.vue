<template>
  <div class="todo__view-options dekstop">
    <button
      class="todo__options-text"
      :class="{ active: filter == 'all' }"
      @click="changeFilter('all')"
    >
      All
    </button>
    <button
      class="todo__options-text"
      :class="{ active: filter == 'active' }"
      @click="changeFilter('active')"
    >
      Active
    </button>
    <button
      class="todo__options-text"
      :class="{ active: filter == 'completed' }"
      @click="changeFilter('completed')"
    >
      Completed
    </button>
  </div>
</template>

<script>
export default {
  name: 'todo-filtered',
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
  &__view-options.dekstop {
    display: flex;
    @media (max-width: 450px) {
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
