<template>
  <li class="flex justify-between my-2 bg-yellow-300 text-red-900">
    <div>{{ name }}</div>
    <div>{{ type }}</div>
    <div>{{ date }}</div>
    <div>{{ from }}</div>
    <div>{{ to }}</div>
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
