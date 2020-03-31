import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const LESSONS_URL = 'https://api.hiskio.com/v1/courses'

const store = new Vuex.Store({
  state: {
    lessons: []
  },
  mutations: {
    setLessons (state, lessons) {
      state.lessons = lessons
    }
  },
  actions: {
    fetchLessons ({commit}) {
      fetch(LESSONS_URL)
        .then(rs => rs.json())
        .then(rs => {
          commit('setLessons', rs.data)
        })
    }
  }
})

export default store
