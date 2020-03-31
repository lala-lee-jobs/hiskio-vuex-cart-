import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const LESSONS_URL = 'https://api.hiskio.com/v1/courses'

const store = new Vuex.Store({
  state: {
    lessons: [],
    cart: []
  },
  getters: {
    lessonsInCart (state) {
      return state.cart.length
    },
    priceInCart (state) {
      return state.cart.reduce((acc, lesson) => {
        return acc + lesson.price
      }, 0)
    },
    isLessonInCart (state) {
      return (lesson) => {
        return state.cart.findIndex(({id}) => {
          return id === lesson.id
        }) !== -1
      }
    }
  },
  mutations: {
    setLessons (state, lessons) {
      state.lessons = lessons
    },
    addToCart (state, lesson) {
      state.cart = [...state.cart, lesson]
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
