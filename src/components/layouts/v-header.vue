<template>
<div class="v-header">
  <router-link :to="{name: 'mainPage'}">
    <img src="../../assets/logo.png" alt="">
  </router-link>
  <div class="search-fieled">
    <input type="text" class="search-filed" v-model="searchValue">
    <button class="search-btn" >
      <i class="material-icons" @click.enter="search(searchValue)">search</i>
    </button>
    <button class="search-btn" >
      <i class="material-icons" @click.enter="clearSearchFied(searchValue)">cancel</i>
    </button>
  </div>
</div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
export default {
  name: "v-header",
  data(){
    return{
      searchValue: ''
    }
  },
  computed:{
    ...mapGetters(['SEARCH_VALUE'])
  },
  methods:{
    ...mapActions(['GET_SEARCH_VALUE_TO_VUEX']),
    search(value){
     this.GET_SEARCH_VALUE_TO_VUEX(value);
     if(this.$router.push !== '/catalog'){
       this.$router.push({name: 'Catalog'})
     }
    },
    clearSearchFied(value){
      this.searchValue = ''
      this.GET_SEARCH_VALUE_TO_VUEX(value);
      if(this.$router.push !== '/catalog'){
        this.$router.push({name: 'Catalog'})
      }
    }
  }
}
</script>

<style lang="scss">
.v-header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #15ca15;
  padding: 3%;
  width:calc(100% - 6%);
  img{
    width: 50px;
  }
  .search-fieled{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .search-filed{
    padding: 5px;

  }
  .search-btn{
    margin-left: 10px;
    border: 0px solid;
    background: transparent;
    cursor: pointer;
  }
}

</style>