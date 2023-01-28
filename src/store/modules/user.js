import Vue from 'vue'

const user = {
  state: {
    token: ''
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    }
  },
  action: {}
}

export default user