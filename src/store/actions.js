import { v4 as uuidv4 } from 'uuid';

export default {
  async addTask(context, data) {
    const taskData = {
      id: uuidv4(),
      name: data.name,
      type: data.type,
      date: data.date,
      from: data.from,
      to: data.to,
    };

    const response = await fetch(
      `https://on-tasktracker-default-rtdb.europe-west1.firebasedatabase.app/tasks/${taskData.id}.json`,
      {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(taskData),
      },
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch');
      throw error;
    }

    context.commit('addTask', taskData);
  },
  async loadTasks(context) {
    const response = await fetch(
      `https://on-tasktracker-default-rtdb.europe-west1.firebasedatabase.app/tasks.json`,
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch');
      throw error;
    }

    const tasks = [];

    for (const key in responseData) {
      const task = {
        id: key,
        name: responseData[key].name,
        type: responseData[key].type,
        date: responseData[key].date,
        from: responseData[key].from,
        to: responseData[key].to,
      };
      tasks.push(task);
    }

    context.commit('setTasks', tasks);
  },
  async removeTask(context, id) {
    const response = await fetch(
      `https://on-tasktracker-default-rtdb.europe-west1.firebasedatabase.app/tasks/${id}.json`,
      {
        method: 'DELETE',
      },
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to delete');
      throw error;
    }

    context.commit('removeTask', id);
  },
  sortByName(context) {
    context.commit('sortByName');
  },
  sortByType(context) {
    context.commit('sortByType');
  },
  sortByDate(context) {
    context.commit('sortByDate');
  },
};
