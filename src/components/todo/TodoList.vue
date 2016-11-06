<template lang="jade">
  .ui.grid.container.wrapper
    .centered.row
      h1.ui.header To Do

    .centered.row
      input(placeholder='What should I do today?' v-bind:value='newTodo' @keyup.enter='addTodo')

    .centered.row
      .ui.red.segment
          todo-item(v-for='todo in todos' v-bind:item='todo')
</template>

<script>
import TodoItem from './TodoItem';

const todos = [
  {
    text: 'Learn Vuejs',
    done: true,
  },
  {
    text: 'Integrate frontend tools',
    done: true,
  },
  {
    text: 'Use vue-router',
    done: true,
  },
  {
    text: 'Make todo list app',
    done: true,
  },
  {
    text: 'Switch to Skeleton and add better css',
    done: false,
  },
  {
    text: 'Add unit tests',
    done: false,
  },
  {
    text: 'Add server side rendering',
    done: false,
  },
];

const data = {
  todos,
  newTodo: '',
};

function addTodo(event) {
  const item = event.target.value;
  if (item !== '') {
    const todoItem = {
      text: item,
      done: false,
    };

    this.todos.push(todoItem);
  }
}

export default {
  name: 'todo-list',
  components: { TodoItem },
  data() { return data; },
  methods: { addTodo },
};
</script>

<style>
</style>