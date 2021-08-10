<template>
  <li class="flex justify-between my-2 bg-yellow-300 text-red-900">
    <div>{{ task.name }}</div>
    <div>{{ task.type }}</div>
    <div>{{ task.date }}</div>
    <div>{{ task.from }}</div>
    <div>{{ task.to }}</div>
  </li>
</template>

<script>
export default {
  props: {
    id: String,
    name: String,
    type: String,
    date: String,
    from: String,
    to: String,
  },
};
</script>
