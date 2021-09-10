<template>
<div class="v-card-item">
  <img class="v-card-item-img" :src="require( '../../assets/images/' + card_item_data.img)" alt="img">
   <div class="v-card-item-info">
     <p>{{card_item_data.name}}</p>
     <p class="v-card-item-price">{{card_item_data.price}}</p>
     <p class="v-card-item-article">{{card_item_data.article}}</p>
   </div>

   <div class="v-card-item-quantity">
     <p>Qty:</p>
      <span>
        <span @click="decrementItem" class="v-card-item-btn" >-</span>
          {{card_item_data.quantity}}
         <span @click="incrementItem" class="v-card-item-btn">+</span>
      </span>
   </div>
   <button @click="deleteFromCard">Delete</button>
</div>
</template>

<script>

export default {
  name: "v-card-item",
  props:{
    card_item_data:{
      type: Object,
      default(){
        return{}
      }
    }
  },
  methods:{
    deleteFromCard(){
      this.$emit('deleteFromCard')
    },
    decrementItem(){
      this.$emit('decrementItem')
    },
    incrementItem(){
      this.$emit('incrementItem')
    }
  },
  mounted(){
    this.$set(this.card_item_data,"quantity", 1)
  }
}
</script>

<style lang="scss">
.v-card-item{
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  box-shadow: 0 0 8px 0 #e0e0e0;
  &-img{
    max-width: 50px;
  }
  &-btn {
    cursor: pointer;
    font-size: 18px;
    padding: 5px;

  }


}
</style>