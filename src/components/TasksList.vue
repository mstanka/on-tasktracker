<template>
  <ul v-if="hasTasks">
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
  <div class="text-center">
    <h2 class="text-center">No tasks has been recorded yet!</h2>
    <p>Add a task</p>
  </div>
</template>

<script>
import TaskItem from './TaskItem.vue';

export default {
  components: {
    TaskItem,
  },
  computed: {
    tasks() {
      return this.$store.getters.getTasks;
    },
    hasTasks() {
      console.log(this.$store.getters.hasTasks);
      return this.$store.getters.hasTasks;
    },
  },
};
</script>
