<template>
<div class="v-popup-wrapper" ref="popup_wrapper">
  <div class="v-popup">
    <div class="v-popup-header">
      <span>{{PopupTitle}}</span>
      <span>
      <i
          class="material-icon"
          @click="closePopup"
      >close</i>
    </span>


    </div>
    <div class="v-popup-content">
      <slot></slot>
    </div>
    <div class="v-popup-footer">
      <button class="v-popup-footer-close-modal" @click="closePopup">close</button>
      <button
          @click="addPopup"
          class="v-popup-footer-submit-btn"
      >{{rightBtnTitle}}</button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "v-popup",
  props:{
   rightBtnTitle:{
     type:String,
     default:'Ok'
   },
    PopupTitle:{
     type:String,
      default: 'name'
    }
  },
  methods:{
    closePopup(){
      this.$emit('closePopup')
    },
    addPopup(){
      this.$emit('addPopup')
    }
  },
  mounted() {
    let vm = this;
    document.addEventListener('click', function(item){
     if(item.target === vm.$refs['popup_wrapper']){
       vm.closePopup();
     }
    })
  }
}
</script>

<style lang="scss">
.v-popup-wrapper{
  background: rgba(64, 64, 64, 0.4);
  position: absolute;
  top:0;
  right: 0;
  left: 0;
  bottom: 0;
}
.v-popup{
  padding: 16px;
  position: fixed;
  top:50px;
  margin: 0 auto;
  left: 0;
  right: 0;
  width: 400px;
  background: white;
  box-shadow: 0 0 17px 0 #e7e7e7;
  &-header, &-footer{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &-content{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &-footer{
   &-submit-btn{
     padding: 8px;
     color: #fff;
     background: #42b983;
   }
    &-close-modal{
      padding: 8px;
      color: #fff;
      background: red;
    }
  }
}
</style>