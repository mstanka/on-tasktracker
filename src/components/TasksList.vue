<template>
  <p v-if="isLoading" class="text-center">Loading tasks....</p>
  <table
    v-else-if="hasTasks && !isLoading"
    class="border-separate text-sm table-auto mx-auto overflow-x-scroll"
  >
    <caption class="text-red-900 text-center font-bold uppercase mb-3">
      Recorded Tasks
    </caption>
    <tr class="my-2 bg-yellow-300 text-red-900 border border-red-900">
      <th class="py-2 px-1">
        Name <button @click="sortByName">&#8595;</button>
      </th>
      <th class="py-2 px-1">
        Type <button @click="sortByType">&#8595;</button>
      </th>
      <th class="py-2 px-1">
        Date <button @click="sortByDate">&#8595;</button>
      </th>
      <th class="py-2 px-1">From</th>
      <th class="py-2 px-1">To</th>
      <th class="py-2 px-1">Remove</th>
    </tr>
    <task-item
      v-for="task in tasks"
      :key="task.id"
      :id="task.id"
      :name="task.name"
      :type="task.type"
      :date="task.date"
      :from="task.from"
      :to="task.to"
    >
    </task-item>
  </table>
  <h2 v-else class="text-center">No tasks has been recorded yet!</h2>
</template>

<script>
import TaskItem from './TaskItem.vue';

export default {
  components: {
    TaskItem,
  },
  data() {
    return {
      isLoading: false,
    };
  },
  computed: {
    tasks() {
      return this.$store.getters.getTasks;
    },
    hasTasks() {
      return this.$store.getters.hasTasks;
    },
  },
  created() {
    this.loadTasks();
  },
  methods: {
    async loadTasks() {
      this.isLoading = true;
      try {
        await this.$store.dispatch('loadTasks');
      } catch (error) {
        console.log(error);
      }
      this.isLoading = false;
    },
    sortByName() {
      this.$store.dispatch('sortByName');
    },
    sortByType() {
      this.$store.dispatch('sortByType');
    },
    sortByDate() {
      this.$store.dispatch('sortByDate');
    },
  },
};
</script>
