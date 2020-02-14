<template>
  <div>
    <div class="p-2 rounded mb-2" style="background-color: #f6fbff">
      <span class="d-block my-2" style="font-size: 13px;">
        {{comment.body}}
      </span>
      <div class="d-flex justify-content-between">
        <span>
          <img
            class="img-fluid smaller-rounded-avatar mr-2"
            src="https://wpimg.wallstcn.com/57ed425a-c71e-4201-9428-68760c0537c4.jpg?imageView2/1/w/80/h/80"
            alt="Avatar"
          />
          <span class="d-inline-block">
            <span class="d-block font-italic" style="font-size: 14px;">{{comment.email}}</span>
          </span>
        </span>
        <button class="btn btn-outline-info btn-sm border-0" type="button">Like</button>
      </div>
    </div>
  </div>
</template>

<script>
// import { UserService } from '../services/UserService'
// const userService = new UserService()
export default {
  name: 'Comment',
  props: {
    comment: {
      type: Object,
      required: true
    }
  },
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.smaller-rounded-avatar {
  border-radius: 100%;
  width: 25px;
  height: 25px;
}
</style>
