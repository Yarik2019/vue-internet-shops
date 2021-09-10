<template>
<div class="v-card">


  <v-card-item
      v-for="(item, index) in card_data"
      :key="item.article"
      :card_item_data="item"
      @deleteFromCard ="deleteFromCard(index)"
      @incrementItem="incrementItem(index)"
      @decrementItem="decrementItem(index)"

  />

  <div class="v-card-total">
    <p>Total: </p>
    <p class="v-card-total-name"> {{cardTotalCost}} P</p>
  </div>
</div>
</template>

<script>
import vCardItem from "./v-card-item"
import {mapActions} from "vuex";

export default {
  name: "v-card",
  props: {
    card_data: {
      type: Array,
      default() {
        return []
      }
    }
  },
  computed: {

    cardTotalCost() {
      let result = []

     if(this.card_data.length){
       for (let item of this.card_data) {
         result.push(item.price * item.quantity)
       }
       result = result.reduce(function (sum, el) {
         return sum + el;
       })
       return result;
     }else {
       return 0;
     }
    }
  },
  methods: {

    ...mapActions(['DELETE_FROM_CARD',
        'INCREMENT_CART_ITEM',
        'DECREMENT_CART_ITEM'
    ]),
    deleteFromCard(index) {
      this.DELETE_FROM_CARD(index);
      // console.log(index)
    },
    decrementItem(index){
      this.DECREMENT_CART_ITEM(index)
    },
    incrementItem(index){
      this.INCREMENT_CART_ITEM(index)
    }

  },
  components: {
    vCardItem
  }
}
</script>

<style lang="scss">
.v-card{
  width: 100%;
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