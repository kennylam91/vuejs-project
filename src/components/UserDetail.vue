<template>
  <div class="row">
    <div class="col-3 id=" id="userInfo">
      <div class="shadow-lg bg-white rounded" style>
        <header class="p-3 border-bottom text-center">
          <span>About me</span>
        </header>
        <div class="p-3" v-if="user">
          <div class="text-center">
            <img
              class="img-fluid d-inline-block mb-3 avatar"
              src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif"
              alt
            />
            <h5 v-text="user.name"></h5>
            <p v-text="user.username"></p>
          </div>
          <div class="accordion" id="userInfoAccordion">
            <div class="card">
              <div class="card-header" id="userInfoBasic">
                <h6 class="mb-0">
                  <button
                    class="btn btn-block"
                    type="button"
                    data-toggle="collapse"
                    data-target="#basicInfoContent"
                    aria-expanded="true"
                    aria-controls="basicInfoContent"
                    active = "true"
                  >Basic Info</button>
                </h6>
              </div>

              <div id="basicInfoContent" class="collapse show" aria-labelledby="userInforBasic">
                <div class="card-body px-0 text-left">
                  <ul class="pl-4">
                    <li>Email: Sincere@april.biz</li>
                    <li>Phone: 1-770-736-8031-56442</li>
                    <li>Website: hildegard.org</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="userInfoCompany">
                <h5 class="mb-0">
                  <button
                    class="btn btn-block collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseUserCompany"
                    aria-expanded="false"
                    aria-controls="collapseUserCompany"
                  >Company</button>
                </h5>
              </div>
              <div id="collapseUserCompany" class="collapse" aria-labelledby="userInfoCompany">
                <div class="card-body px-0 text-left">
                  <ul class="pl-4">
                    <li>Name: {{user.company.name}}</li>
                    <li>CatchPhrase: {{user.company.catchPhrase}}</li>
                    <li>Bs: {{user.company.bs}}</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="userInfoAddress">
                <h5 class="mb-0">
                  <button
                    class="btn btn-block collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseUserAddress"
                    aria-expanded="false"
                    aria-controls="collapseUserAddress"
                  >Address</button>
                </h5>
              </div>
              <div id="collapseUserAddress" class="collapse" aria-labelledby="userInfoAddress">
                <div class="card-body px-0 text-left">
                  <ul class="pl-4">
                    <li>Street: {{user.address.street}}</li>
                    <li>Suite: {{user.address.suite}}</li>
                    <li>City: {{user.address.city}}</li>
                    <li>Zipcode: {{user.address.zipcode}}</li>
                    <li>
                      Geo
                      <ul class="pl-4">
                        <li>Lat: {{user.address.geo.lat}}</li>
                        <li>Lng: {{user.address.geo.lng}}</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-9 pl-0" id="actions">
      <post v-for="post in posts" :key="post.id" :post ="post"></post>
    </div>
  </div>
</template>

<script>
import {UserService} from '../services/UserService'
import {PostService} from '../services/PostService'
import Post from './Post'
const userService = new UserService()
const postService = new PostService()

export default {
  name: 'UserDetail',
  components: {
    'post': Post
  },
  data () {
    return {
      user: null,
      userId: this.$route.params.id,
      posts: null
    }
  },
  mounted () {
    userService.getUserById(this.userId)
      .then(res => {
        this.user = res.data
        console.log(this.user)
      })
      .catch(e => {
        console.log(e)
      })
    postService.getPostsByUserId(this.userId)
      .then(res => {
        this.posts = res.data
      })
      .catch(e => {
        console.log(e)
      })
  },
  computed: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#userInfoAccordion .card-body {
  font-size: 0.75rem;
  font-weight: lighter;
}
.avatar {
  border-radius: 100%;
  width: 100px;
  height: 100px;
}
</style>
