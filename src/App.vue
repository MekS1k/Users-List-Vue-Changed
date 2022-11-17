<template>
  <div id="app" class="hh">
    <nav>
      <div class="navigation">
        <div>
          <router-link active-class="now-active" class="main" to="/Main"
            >Главная страница</router-link
          >
          <router-link active-class="now-active" class="main" to="/SearchUser"
            >Поиск</router-link
          >
          <router-link active-class="now-active" class="main" to="/Info"
            >Информация</router-link
          >
        </div>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<!-- SCRIPTS -->
<script>
import ListUser from "./components/ListUser.vue";
import SearchUser from "./components/SearchUser.vue";
import { mapActions } from "vuex";

export default {
  components: {
    ListUser,
    SearchUser,
  },
  name: "App",
  data() {
    return {};
  },
  mounted() {
    this.GET_DATA();
  },
  methods: {
    ...mapActions(["GET_DATA"]), //получаю данные из метода в actions
  },
};
</script>

<style>
.main {
  border: 1px solid black;
  padding: 10px 15px;
  text-decoration: none;
  color: black;
  border-radius: 15px;
  margin: 3px;
}
.navigation {
  margin: 20px 0 50px;
  display: flex;
  justify-content: space-between;
}
.main:hover {
  background-color: rgb(123, 120, 120);
}
.activeSearch {
  border: 1px solid black;
  padding: 10px 15px;
  text-decoration: none;
  color: black;
  background-color: rgb(123, 120, 120);
}
.activeMain {
  border: 1px solid black;
  padding: 10px 15px;
  text-decoration: none;
  color: black;
  background-color: rgb(123, 120, 120);
}
.activeInfo {
  border: 1px solid black;
  padding: 10px 15px;
  text-decoration: none;
  color: black;
  background-color: rgb(123, 120, 120);
}
.info1 {
  border: 1px solid black;
  padding: 10px 15px;
  text-decoration: none;
  color: black;
}
.info1:hover {
  background-color: rgb(123, 120, 120);
}
body {
  background-color: rgb(255, 255, 255);
}
a {
  font-weight: 600;
}
.now-active {
  background-color: rgb(98, 96, 96);
}
</style>
