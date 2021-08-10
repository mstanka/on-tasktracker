<template>
  <form
    @submit.prevent="submitForm"
    class="bg-yellow-300 text-red-900 p-6 w w-80 mx-auto uppercase rounded-sm"
  >
    <div class="my-2">
      <label for="name">Task Name</label>
      <input type="text" id="name" v-model.trim="name" class="w-full" />
    </div>
    <div class="my-2">
      <label for="type">Task Type</label>
      <select name="type" id="type" v-model="type" class="w-full">
        <option value="Write code">Write code</option>
        <option value="Code Review">Code Review</option>
        <option value="Meeting">Meeting</option>
      </select>
    </div>
    <div class="my-2">
      <label for="date">Date</label>
      <input type="date" id="date" v-model="date" class="w-full" />
    </div>
    <div class="my-2">
      <label for="from">From</label>
      <input type="time" id="from" v-model="from" class="w-full" />
    </div>
    <div class="my-2">
      <label for="to">To</label>
      <input type="time" id="to" v-model="to" class="w-full" />
    </div>
    <div class="my-4">
      <button
        class="
          bg-red-900
          text-yellow-300
          uppercase
          border border-red-900
          py-1
          w-full
          hover:text-red-900 hover:bg-yellow-300
          transition
          duration-500
          ease-in-out
        "
      >
        Submit Task
      </button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      type: '',
      date: null,
      from: null,
      to: null,
    };
  },
  emits: ['save-data'],
  methods: {
    submitForm() {
      const formData = {
        name: this.name,
        type: this.type,
        date: this.date,
        from: this.from,
        to: this.to,
      };

      this.$emit('save-data', formData);
    },
  },
};
</script>
