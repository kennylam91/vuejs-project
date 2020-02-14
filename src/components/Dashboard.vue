<template>
  <div>
    <p>Dashboard</p>
    <p>Color: {{$store.getters.color}}</p>
    <p>Counter: {{this.$store.state.counter}}</p>
    <button @click="increment" class="btn btn-primary" type="button">Inc counter</button>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data () {
    return {
      users: null
    }
  },
  methods: {
    increment () {
      this.$store.commit('counterIncrement')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
