<template>
<div class="v-notifications">
  <transition-group name="transition-animate"
                    class="v-notifications-messages-list"
  >
    <div
        class="v-notifications-content"
        v-for="message in messages"
        :key="message.id"
        :class="message.icon"
    >
      <div class="v-notifications-content-text">
        <span>{{message.name}}</span>
        <i class="material-icons">{{message.icon}}</i>
      </div>
      <div class="v-notifications-content-btn">
        <button v-if="rightBtn.length">{{rightBtn}}</button>
        <button v-if="rightBtn.length">{{leftBtn}}</button>
      </div>
    </div>
  </transition-group>
</div>
</template>

<script>
export default {
  name: "v-notifications",
  props:{
    messages:{
      type:Array,
      default(){
        return []
      }
    },
    rightBtn:{
      type:String,
      default:''
    },
    leftBtn:{
      type:String,
      default:''
    },
    timeout:{
      type:Number,
      default: 3000
    }
  },
  methods:{
    hideNotification(){
      let vm = this;
      if(this.messages.length){
        setTimeout(function () {
         vm.messages.pop(vm.messages.length -1, 1)
        }, vm.timeout)
      }

    }
  },
  watch:{
    messages(){
      this.hideNotification()
    }
  },
  mounted() {
    this.hideNotification()
  }
}
</script>

<style lang="scss">

.v-notifications{
  position: fixed;
  top:100px;
  right: 16px;
  z-index: 10;
   &-messages-list{
     display: flex;
     flex-direction: column-reverse;
   }
  &-content{
    padding: 16px;
    border-radius: 4px;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    margin-bottom: 16px;
    background: #15ca15;;
    &.error{
      background: red;
    }
    &.warning{
      background: orange;
    }
    &.check_circle{
      background: #25cb11;
    }


    &-text{
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
}
.material-icons{
  margin-left: 10px;
}


.transition-animate{
  &-enter{
    transform: translateX(120px);
    opacity: 0;
  }
  &-enter-active{
    transition: all .6s ease;
  }
  &-enter-to{
    opacity: 1;
  }
  &-leave{
   height: 50px;
    opacity: 1;
  }
  &-leave-active{
    transition: transform .6s ease, opacity .6s, height .6s .2s;
  }
  &-leave-to{
   height: 0;
    transform: translateX(120px);
    opacity: 0;
  }
  &-move{
    transition: transform.6s ease;
  }
}
</style>