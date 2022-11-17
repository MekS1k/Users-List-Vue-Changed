<template>
  <div id="app">
    <div class="user" v-for="users of this.$store.state.data" :key="users.id">
      <div class="block">
        <p class="oneuser">{{ users.name }}</p>
        <button class="info" @click="getInfo(users.id)">
          <span v-if="IdUser != users.id">Узнать</span>
          <span v-else>Скрыть</span>
        </button>
      </div>
      <div class="allInfo" v-if="IdUser == users.id">
        <div class="infoUsers">
          <p class="oneuser">username: {{ users.username }}</p>
          <p class="oneuser">email: {{ users.email }}</p>
          <p class="oneuser">phone: {{ users.phone }}</p>
        </div>
        <div class="infoUsers">
          <p class="mainName">address:</p>
          <p class="oneuser">street: {{ users.address.street }}</p>
          <p class="oneuser">suite: {{ users.address.suite }}</p>
          <p class="oneuser">city: {{ users.address.city }}</p>
          <p class="oneuser">zipcode: {{ users.address.zipcode }}</p>
          <p class="oneuser">lat: {{ users.address.geo.lat }}</p>
          <p class="oneuser">lng: {{ users.address.geo.lng }}</p>
        </div>
        <div class="infoUsers">
          <p class="mainName">company:</p>
          <p class="oneuser">name: {{ users.company.name }}</p>
          <p class="oneuser">catchPhrase: {{ users.company.catchPhrase }}</p>
          <p class="oneuser">bs: {{ users.company.bs }}</p>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      IdUser: 0,
    };
  },
  mounted() {},
  methods: {
    getInfo(id) {
      if (this.IdUser == id) {
        this.IdUser = 0;
      } else {
        this.IdUser = id;
      }
    },
  },
};
</script>
<style>
.user {
  display: block;
  border: 1px solid;
  margin-bottom: 10px;
  border-radius: 15px;
  width: 300px;
  margin: 0 auto 10px;
}
.info {
  height: 20px;
  border-radius: 15px;
  margin-right: 10px;
}
.oneuser {
  margin-left: 10px;
}
.block {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.infoUsers {
  border: 1px solid;
  border-radius: 15px;
  background-color: antiquewhite;
  margin-top: 15px;
}
.mainName {
  font-weight: 900;
}
.allInfo {
  margin: 0 15px;
}
</style>
