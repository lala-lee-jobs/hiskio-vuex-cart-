<template>
  <div>
    <img :src="lesson.image" width="100"/>
    <span class="title">{{lesson.title}}</span>
    <span class="price">{{lesson.price}}</span>
    <span class="lecturers">{{lecturers}}</span>
  </div>
</template>
<script>
export default {
  props: ['lesson'],
  computed: {
    lecturers () {
      return this.lesson.lecturers
        .map(lecturer => lecturer.username)
        .join(',')
    }
  }
}
</script>
