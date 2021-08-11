<template>
<main class="lg:flex justify-center max-w-screen-2xl">
  <section class="mx-auto pb-10 w-auto max-w-screen-lg md:w-full bg-red-900">
    <h1 class="text-yellow-300 text-center text-2xl uppercase py-4">
      Task Time Tracker
    </h1>
    <task-form @save-data="saveData"></task-form>
  </section>
  <section class="mx-auto py-10 w-auto max-w-screen-lg md:w-full bg-red-100">
    <tasks-list></tasks-list>
  </section>
  </main>
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
