<template>
<div>
  <v-notificatio
      :messages="messages"
      :timeout="3000"

  />
  <router-link :to="{name:'Card', props:{card_data: CARD}}">
    <div class="v-catalog-link-to-card">
      Card: {{CARD.length}}
    </div>
  </router-link>

  <h1>Catalog</h1>
  <div class="filters">
    <v-select :options="options"
              :selected="selected"
              @select="sortByCategories"
    />
    <div class="range-slider">
      <input
          type="range"
          min="0"
          max="1000"
          step="10"
          v-model.number="minPrice"
          @change="setRangeSlider"
          class="slider range-slider-one"
      >
      <input
          type="range"
          min="0"
          max="1000"
          step="10"
          v-model.number="maxPrice"
          @change="setRangeSlider"
          class="slider range-slider-two"
      >
    </div>
    <div class="range-value">
      <p>Min: {{minPrice}}</p>
      <p>Max: {{maxPrice}}</p>
    </div>
  </div>
   <div class="v-catalog">
     <vCatalogItem v-for="product in filterProducts"
                   :key="product.article"
                   :product_data="product"
                   @addToCard="addToCard"
     />
   </div>
</div>
</template>

<script>
import vCatalogItem from "./v-catalog-item";
import vSelect from "../v-select"
import {mapActions, mapGetters} from "vuex"
import vNotificatio from  '../notifications/v-notifications'
export default {
  name: "v-catalog",
  components: {
    vCatalogItem,
    vSelect,
    vNotificatio

  },
  data(){
    return{
      options:[
        {
          name:"Все",
          value:'All'
        },
        {
          name:"Мужские",
          value:'m'
        },
        {
          name:"Женские",
          value:"w"
        },

      ],
      selected:'Все',
      sortedProducts:[],
      minPrice:0,
      maxPrice:1000,
      messages:[]
    }
  },
  computed:{
    ...mapGetters([
        'PROUDCTS',
         'CARD',
        'SEARCH_VALUE'
    ]),
    filterProducts(){
      if(this.sortedProducts.length){
        return this.sortedProducts;
      }else{
        return this.PROUDCTS;
      }
    }
  },
  methods:{
    ...mapActions([
        'GET_PRODUCT_FROM_API',
         'ADD_TO_CRAD'
    ]),

   /* sortByCategories(category){
      this.selected = category.name;
      this.sortedProducts = [];
      let vm = this;
      this.PROUDCTS.map(function(item){
        if(item.category === category.name){
          vm.sortedProducts.push(item);
        }
      })

    },*/



    setRangeSlider(){
      if(this.minPrice > this.maxPrice){
        let tmp = this.maxPrice;
        this.maxPrice = this.minPrice;
        this.minPrice = tmp;
      }
      /*this.sortByCategories();*/
    },
  /*  sortByCategories(category){
    let vm = this;
     this.sortedProducts = [...this.PROUDCTS];
     this.sortedProducts = this.sortedProducts.filter(function (item){
       console.log(item.price >= vm.minPrice && item.price <= vm.maxPrice)
       return item.price >= vm.minPrice && item.price <= vm.maxPrice
     })
      if(category){
        this.sortedProducts  = this.sortedProducts.filter(function (e){
          vm.selected = category.name
          return e.category === category.name
        })
      }
    },*/
    sortByCategories(category){
     let vm = this;
     this.sortedProducts = [];
      this.selected = category.name;
      this.PROUDCTS.map((item)=>{
        if(item.category === category.name ){
          vm.sortedProducts.push(item);

        }
      });

    },
    addToCard(data){
    this.ADD_TO_CRAD(data).then(()=>{
      let message = {
             name:'Товар добавлений до корзини',
             icon:'check_circle',
             id: Date.now().toLocaleString()
      }
      this.messages.push(message)
    })
    },

    sortProductsBySearchValue(value){
      this.sortedProducts = [...this.PROUDCTS];
    if(value) {
      this.sortedProducts = this.sortedProducts.filter(function (item) {
        return item.name.toLowerCase().includes(value.toLowerCase())
      })
    }else{
        this.sortedProducts = this.PROUDCTS
      }

    }

  },

  watch:{
    SEARCH_VALUE(){
      this.sortProductsBySearchValue(this.SEARCH_VALUE)
    }
  },
  mounted() {
    this.GET_PRODUCT_FROM_API()
    .then((response) =>{
      if(response.data){
        /*console.log('Data arrived!')*/
        this.sortByCategories();
        this.sortProductsBySearchValue(this.SEARCH_VALUE)
      }
    })
  }
}
</script>

<style lang="scss">
.v-catalog{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  &-link-to-card{
   position: absolute;
    ;
    right: 10px;
    padding: 16px;
    border: 1px solid gray;
    z-index: 10 ;
   }
}
.filters {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.range-slider {
  width: 200px;
  margin: auto 16px;
  text-align: center;
  position: relative;
}

.range-slider svg, .range-slider input[type=range] {
  position: absolute;
  left: 0;
  bottom: 0;

}

.range-slider-one::-webkit-slider-thumb {
  z-index: 4;
  position: absolute;
  top: 2px;
  margin-top: -7px;
}
.range-slider-two::-webkit-slider-thumb {
  z-index: 4;
  position: absolute;
  top: 2px;
  margin-top: -7px;
}

.slider {
  -webkit-appearance: none;
  width: 100%;
  height: 25px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
}

.slider:hover {
  opacity: 1;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  background: #4CAF50;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  background: #4CAF50;
  cursor: pointer;
}
</style>