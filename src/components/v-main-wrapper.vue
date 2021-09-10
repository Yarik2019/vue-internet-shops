<template>
<div class="v-main-wrapper">
  <v-header/>
  <keep-alive>
    <router-view/>
  </keep-alive>

<!--    <v-cart
      v-if="CARD.length"
      :card_data="CARD"
  />


  <h1>Catalog</h1>
  <v-catalog/>-->


</div>
</template>

<script>
/*import vCatalog from "../components/v-catalog"
import vCart from "../components/v-cart"*/
import vHeader from '../components/layouts/v-header'
import {mapGetters} from 'vuex'
export default {
  name: "vue-main-wrapper",
/*  components:{
    vCatalog,
    vCart
  },*/
  components:{
    vHeader
  },
  computed:{
  ...mapGetters(['CARD'])
  }
}
</script>

<style scoped>
.v-main-wrapper{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 /* max-width: 900px;*/
  margin: 0 auto;
}
</style>