<template>
<div class="v-catalog-item">

  <v-popuo
  v-if="isPopupInfo"
  rightBtnTitle="Add to Card"
 :popup-title="product_data.name"
  @closePopup="closePopup"
  @addPopup="addToCard"
  >

     <img :src="require( '../../assets/images/' + product_data.img)"
          class="v-catalog-item-img"
          alt="img"
     >
     <div>
       <p class="v-catalog-item-name">{{product_data.name}}</p>
       <p class="v-catalog-item-price">Price: {{product_data.price}} P</p>
       <p class="v-catalog-item-price">{{product_data.category}}</p>
     </div>

  </v-popuo>
  <img :src="require( '../../assets/images/' + product_data.img)"
       class="v-catalog-item-img"
       alt="img"
  >
  <p class="v-catalog-item-name">{{product_data.name}}</p>
  <p class="v-catalog-item-price">Price: {{product_data.price}} P</p>
  <button
      @click="showPopup"
      class="v-catalog-item-show-info">Show info</button>

  <button class="v-catalog-item-add-card-btn btn"
          @click="addToCard()">Add Card</button>
</div>
</template>

<script>
import  vPopuo from "../popup/v-popup"
export default {
  name: "v-catalog-item",
  components:{
    vPopuo
  },
  props:{
    product_data: Object,
    default(){
      return {}
    }
  },
  data(){
    return{
      isPopupInfo: false
    }
  },
  methods:{
    addToCard(){
      this.$emit('addToCard', this.product_data)
    },
    showPopup(){
    this.isPopupInfo = true
    },
    closePopup(){
      this.isPopupInfo = false
    }
  }
}
</script>

<style lang="scss">
$padding: 8px;
$margin: 8px;
$radius: 4px;

.v-catalog-item{
  flex-basis: 25%;
  box-shadow: 0 0 8px 0 #e0e0e0;
  padding: $padding*2;
  margin-bottom: $margin*2;
  border-radius: $radius;
  &-img{
    width: 100px;
  }
  &-show-info{

  }
}

</style>