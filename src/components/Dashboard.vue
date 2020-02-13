<template>
  <div>
    <p>Dashboard</p>
  </div>
</template>

<script>
import { UserService } from '../services/UserService'
const userService = new UserService()
export default {
  name: 'Dashboard',
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
