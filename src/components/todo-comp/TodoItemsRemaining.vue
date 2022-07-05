<template>
  <div class="todo__items-left">{{ remaining }} items left</div>
</template>

<script>
export default {
  name: "todo-remainig",
  computed: {
    remaining() {
      return this.$store.getters.remaining;
    }
  }
};
</script>

<style lang="scss" scoped>
.todo {
  &__items-left {
    font-size: calc(12px + (14 - 12) * ((100vw - 320px) / (1440 - 320)));
  }
}
</style>
