<template>
  <div id="app">
    <div class="search">
      <input
        class="search-input"
        placeholder="Введите пользователя"
        v-model="search"
      />
      <div>
        <div class="resultSearch" v-for="item in SearchUser" :key="item.id">
          <p>{{ item.name }}</p>
          <a
            class="link"
            v-bind:href="http + item.website"
            @click="clearInput"
            this.search=""
            target="_blank"
          >
            {{ item.website }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      http: "http://",
    };
  },
  mounted() {},
  computed: {
    SearchUser() {
      //функция для поиска сотрудника
      if (this.search.length >= 3) {
        return this.$store.state.data.filter((elem) => {
          return elem.name.toLowerCase().includes(this.search.toLowerCase()); //возвращаем имя сотрудника которое совпало в инпуте и переводим
          //все в нижний регистр
        });
      }
    },
  },
  methods: {
    clearInput() {
      //фунция для очистки инпута после нажатия на ссылку
      this.search = "";
    },
  },
};
</script>

<style>
.resultSearch {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  padding: 0 20px;
  text-align: center;
  border-radius: 10px;
}
.search {
  text-align: center;
}
.link {
  margin: 0 0 0 10px;
}
.search-input {
  margin-bottom: 10px;
  width: 100%;
  max-width: 300px;
}
</style>
