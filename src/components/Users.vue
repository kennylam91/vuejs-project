<template>
  <div>
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Username</th>
          <th scope="col">Email</th>
          <th scope="col">City</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <th scope="row" v-text="user.id"></th>
          <td v-text="user.name"></td>
          <td v-text="user.username"></td>
          <td v-text="user.email"></td>
          <td v-text="user.address.city"></td>
          <td>
            <router-link :to="{ name: 'users', params: { id: user.id }}">
              <button class="btn btn-sm btn-outline-info" type="button">Detail</button>
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { UserService } from '../services/UserService'
const userService = new UserService()
export default {
  name: 'Users',
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
</style>
