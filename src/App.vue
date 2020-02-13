<template>
  <div id="app">
    <div class="container-fluid">
      <div class="row">
        <div id="side-bar" class="col-2 bg-secondary" style="height: 900px;"></div>
        <div class="col-10" id="content" style="height: 900px;">
          <div id="header" class="py-3 d-flex justify-content-between" style=" ">
            <nav aria-label="breadcrumb" class>
              <ol class="breadcrumb m-0">
                <li class="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li class="breadcrumb-item">
                  <a href="#">Library</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">Data</li>
              </ol>
            </nav>
            <div>
              <form class="form-inline">
                <input
                  class="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
            </div>
            <div class="btn-group">
              <button
                type="button"
                class="btn dropdown-toggle pt-0"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  class="small-avatar"
                  src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif"
                  alt
                />
              </button>
              <div class="dropdown-menu dropdown-menu-right px-0">
                <button class="dropdown-item" type="button">Action</button>
                <button class="dropdown-item" type="button">Another action</button>
                <button class="dropdown-item" type="button">Something</button>
              </div>
            </div>
          </div>
          <div class id="tabs">
            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li class="nav-item">
                <a class="nav-link" role="tab">
                  <router-link to="/">Dashboard</router-link>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link">
                  <router-link to="/users">Users</router-link>
                </a>
              </li>
            </ul>
          </div>
          <div id="main-content">
            <router-view />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Dashboard from './components/Dashboard'
export default {
  name: 'App',
  components: { Dashboard }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.small-avatar {
  border-radius: 30%;
  width: 40px;
  height: 40px;
}

</style>
