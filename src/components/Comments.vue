<template>
  <div>
    {{postId}}
    <Comment />
  </div>
</template>

<script>
import Comment from './Comment'
export default {
  name: 'Comments',
  components: {
    Comment
  },
  props: {
    postId: {
      required: true,
      type: Number
    }
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
