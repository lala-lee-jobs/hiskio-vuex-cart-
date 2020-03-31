<template>
  <div>
    <h2>LessonList</h2>
    <div v-for="(lesson, index) in lessons" :key="index">
      <span>{{lesson.title}}</span>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState(['lessons'])
  },
  methods: {
    ...mapActions(['fetchLessons'])
  },
  mounted () {
    this.fetchLessons()
  }
}
</script>
