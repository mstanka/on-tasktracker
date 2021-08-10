<template>
  <tr class=" my-2 bg-yellow-300 text-red-900">
    <td class="p-1">{{ name }}</td>
    <td class="p-1">{{ type }}</td>
    <td class="p-1">{{ date }}</td>
    <td class="p-1">{{ from }}</td>
    <td class="p-1">{{ to }}</td>
  </tr>
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
