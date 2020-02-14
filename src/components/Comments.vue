<template>
  <div>
    <Comment v-for="comment in comments" :comment="comment" :key="comment.id" />
  </div>
</template>

<script>
import Comment from './Comment'
import commentService from '../services/CommentService'
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
      comments: []
    }
  },
  mounted () {
    commentService.getCommentsByPostId(this.postId).then(res => {
      this.comments = res.data
    }).catch(e => console.log(e)
    )
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
