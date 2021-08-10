import mutations from './mutations';
import actions from './actions';
import getters from './getters';

const store = createStore({
  state() {
    return {
      //...
    };
  },
  mutations,
  actions,
  getters,
});

export default store;
