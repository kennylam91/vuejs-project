<template>
  <div>
    <Comment v-for="comment in comments" :comment="comment" :key="comment.id" />
    <div class="py-2 pl-2 d-flex align-items-center" v-if="comments">
      <img class="img-fluid smaller-rounded-avatar mr-2"
                  src="https://wpimg.wallstcn.com/57ed425a-c71e-4201-9428-68760c0537c4.jpg?imageView2/1/w/80/h/80"
                  alt="Avatar" />
      <input id="commentInput" class="form-control form-control-sm" type="text" name=""
        placeholder="Write comment" v-model="newComment.body" @keypress.enter="submitComment"/>
    </div>
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
      comments: null,
      newComment: {
        body: '',
        email: this.$store.state.user.email
      }
    }
  },
  methods: {
    submitComment () {
      commentService.createComment(this.postId, this.newComment)
        .then(res => {
          this.comments.push(res.data)
          this.newComment.body = ''
        })
        .catch(e => console.log(e))
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
#commentInput{
  background-color: #f6fbff
}
</style>
