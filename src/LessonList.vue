<template>
    <div>
      <LessonItem
        v-for="(lesson, index) in lessons"
        :lesson="lesson"
        :key="index">
      </LessonItem>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import LessonItem from './LessonItem'

export default {
  components: {
    LessonItem
  },
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
