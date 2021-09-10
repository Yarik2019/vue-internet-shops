<template>
  <div class="card">
    <router-link :to="{name:'Catalog'}">
      <div class="card-link-to-catalog">
        Back
      </div>
    </router-link>
    <h1>Card</h1>
    <p v-if="!CARD.length">There are no products in cart...</p>

    <v-cart
        v-if="CARD.length"
        :card_data="CARD"

    />

  </div>
</template>
<script>
import vCart from "../components/cart/v-cart"
import {mapGetters,} from 'vuex'
export default {
  name:'card',
  components:{
    vCart
  },
  computed:{
    ...mapGetters(['CARD'
  ]),

  }
}
</script>

<style lang="scss">
.card{
  width: 100%;
  margin-top: 30px;
  margin-bottom: 115px;
  &-link-to-catalog{
    position: absolute;

    left: 10px;
    padding: 16px;
    border: 1px solid black;
  }
  &-total{
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    padding: 40px;
    background: #25cb11;
    color: white;
    font-weight: bold;
    display: flex;
    justify-content: center;
    font-size: 20px;
    &-name{
      margin-left: 10px;

    }
  }
}
</style>