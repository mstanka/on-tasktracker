export default {
  addTask(state, payload) {
    state.tasks.push(payload);
  },
  setTasks(state, payload) {
    state.tasks = payload;
  },
  removeTask(state, payload) {
    const tasks = state.tasks;
    const index = tasks.findIndex((task) => task.id === payload);
    tasks.splice(index, 1);
  },
  sortByName(state) {
    const tasks = state.tasks;
    tasks.sort((a, b) => a.name.localeCompare(b.name));
  },
  sortByType(state) {
    const tasks = state.tasks;
    tasks.sort((a, b) => a.type.localeCompare(b.type));
  },
  sortByDate(state) {
    const tasks = state.tasks;
    tasks.sort((a, b) => a.date - b.date);
  },
};
