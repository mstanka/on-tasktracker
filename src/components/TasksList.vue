<template>
  <p v-if="isLoading" class="text-center">Loading tasks....</p>
  <ul v-else-if="hasTasks && !isLoading">
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
  </ul>
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
      console.log(this.$store.getters.hasTasks);
      return this.$store.getters.hasTasks;
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
    },
  },
};
</script>
