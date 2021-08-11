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
};
