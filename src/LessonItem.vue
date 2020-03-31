<template>
  <b-card
    :title="lesson.title"
    :sub-title="lecturers"
    :img-src="lesson.image"
    img-top
    style="max-width: 20rem;"
    class="mb-2">
    <b-card-text>
      {{lesson.price}}
    </b-card-text>
    <b-button href="#" :variant="btnClass" :disabled="inCart" @click.prevent="addToCart(lesson)">
      {{btnLabel}}
    </b-button>
  </b-card>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  props: ['lesson'],
  computed: {
    ...mapGetters(['isLessonInCart']),
    inCart () {
      return this.isLessonInCart(this.lesson)
    },
    btnClass () {
      return this.inCart ? '' : 'primary'
    },
    btnLabel () {
      return this.inCart ? '己存在於購物車' : '加入購物車'
    },
    lecturers () {
      return this.lesson.lecturers
        .map(lecturer => lecturer.username)
        .join(',')
    }
  },
  methods: {
    ...mapMutations(['addToCart'])
  }
}
</script>
