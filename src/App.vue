<template>
  <div id="app">
    <Header />
    <LessonList />
  </div>
</template>

<script>
import LessonList from './LessonList'
import Header from './Header'

export default {
  name: 'App',
  components: {
    Header,
    LessonList
  }
}
</script>

<style>

</style>
