<template>
  <div>
    <div class="card pt-3 px-3 mb-3 border-0 shadow-lg text-left">
      <div id="postHeader" class="d-flex align-items-center">
        <img
          class="img-fluid rounded-avatar mr-2"
          src="https://wpimg.wallstcn.com/57ed425a-c71e-4201-9428-68760c0537c4.jpg?imageView2/1/w/80/h/80"
          alt="Avatar"
        />
        <span class="d-inline-block">
          <span class="d-block font-weight-bold h5 font-italic">{{username}}</span>
        </span>
      </div>
      <hr/>
      <div class="card-body py-0">
        <span class="font-weight-bold mb-2 d-block" v-text="post.title"></span>
        <span class="post" v-text="post.body"></span>
        <hr class="m-2"/>
        <div class="d-flex justify-content-between">
          <div class="px-4 mb-3">
            <button class="btn btn-outline-info btn-sm border-0" type="button">Like</button>
            <button class="btn btn-outline-danger btn-sm border-0" type="button" @click="showComments">Comments</button>
          </div>
          <span v-if="isCommentsShow" class="comment-number px-4">{{commentNumber}} comments</span>
        </div>
        <comments v-if="isCommentsShow" :postId="post.id" v-on:comments-change="onCommentNumberChange"></comments>
      </div>
    </div>
  </div>
</template>

<script>
// import { UserService } from '../services/UserService'
import Comments from './Comments'
// const userService = new UserService()
export default {
  name: 'Post',
  components: {
    'comments': Comments
  },
  props: {
    post: {
      required: true
    },
    username: {
      required: true,
      type: String
    }
  },
  data () {
    return {
      users: null,
      isCommentsShow: false,
      commentNumber: null
    }
  },
  methods: {
    showComments () {
      this.isCommentsShow = !this.isCommentsShow
    },
    onCommentNumberChange (commentNum) {
      this.commentNumber = commentNum
      console.log(this.commentNumber)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.rounded-avatar {
  border-radius: 100%;
  width: 40px;
  height: 40px;
}

.post {
  display: inline-block;
  line-height: 1.1rem;
  font-size: 13px;
}
.comment-number {
  font-size: 14px;
  color:rgb(111, 116, 116);
}
</style>
