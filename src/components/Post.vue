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
          <span class="d-block font-weight-bold h5 font-italic">Iron Man</span>
        </span>
      </div>
      <div class="card-body pb-0">
        <span class="font-weight-bold mb-2 d-block" v-text="post.title"></span>
        <span class="post" v-text="post.body"></span>
        <div class>
          <button class="btn btn-outline-info btn-sm m-3 border-0" type="button">Like</button>
          <button class="btn btn-outline-danger btn-sm border-0" type="button">Hide</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { UserService } from '../services/UserService'
const userService = new UserService()
export default {
  name: 'Post',
  props: {
    post: {
      required: true
    }
  },
  data () {
    return {
      users: null
    }
  },
  mounted () {
    return userService
      .getUsers()
      .then(res => {
        this.users = res.data
      })
      .catch(e => console.log(e))
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
</style>
