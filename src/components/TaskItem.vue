<template>
  <tr class="my-2 bg-yellow-300 text-red-900">
    <td class="p-1 md:p-3">{{ name }}</td>
    <td class="p-1 md:p-3">{{ type }}</td>
    <td class="p-1 md:p-3">{{ date }}</td>
    <td class="p-1 md:p-3">{{ from }}</td>
    <td class="p-1 md:p-3">{{ to }}</td>
    <td class="flex justify-center items-center h-12">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        class="cursor-pointer fill-current"
        @click="removeItem"
        :id="id"
      >
        <path
          d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.538l-4.592-4.548 4.546-4.587-1.416-1.403-4.545 4.589-4.588-4.543-1.405 1.405 4.593 4.552-4.547 4.592 1.405 1.405 4.555-4.596 4.591 4.55 1.403-1.416z"
        />
      </svg>
    </td>
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
  methods: {
    removeItem(event) {
      this.$store.dispatch('removeTask', event.target.id);
    },
  },
};
</script>
