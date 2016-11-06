<template lang="jade">
  h1 {{ message }}
</template>

<script>
const data = {
  message: 'This is your todo list!',
};

export default {
  name: 'todo',
  data() {
    return data;
  },
}
</script>

<style>
</style>