<template lang="jade">
  div
    .ui.checkbox
      div(v-if='todoItem.done')
        input(type='checkbox' @click='finishTodo' checked)
        label
          strike(v-if='todoItem.done')
           i{{ todoItem.text }}
      div(v-else)
        input(type='checkbox' @click='finishTodo')
        label
          span{{ todoItem.text }}
    br
</template>

<script>
function finishTodo() {
  this.todoItem.done = !this.todoItem.done;
}

export default {
  name: 'todo-item',
  props: ['item'],
  data() {
    return { todoItem: this.item };
  },
  methods: { finishTodo },
};
</script>

<style>
</style>