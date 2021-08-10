<template>
  <section class="mx-auto mt-7 py-10 w-96 border bg-red-900">
    <h1 class="text-yellow-300 text-center text-2xl uppercase pb-4">
      Task Time Tracker
    </h1>
    <task-form @save-data="saveData"></task-form>
  </section>
  <section>
    <tasks-list></tasks-list>
  </section>
</template>

<script>
import TaskForm from './components/TaskForm.vue';
import TasksList from './components/TasksList.vue';

export default {
  components: {
    TaskForm,
    TasksList,
  },
  methods: {
    saveData(data) {
      this.$store.dispatch('addTask', data);
    },
  },
};
</script>
