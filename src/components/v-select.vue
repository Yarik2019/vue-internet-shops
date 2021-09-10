<template>
<div class="v-selected-wrapper" ref="v-selected-wrapper">
<p
    class="v-selected"
    @click="hideSelect">
  {{selected}}
</p>

 <div v-if="isSelect"
      class="v-selected-options"
 >
   <p
        class="v-selected-option"
       v-for="option in options"
      :key="option.value"
      @click="selectOption(option)"
   >
     {{option.name}}
   </p>
 </div>
</div>
</template>

<script>
export default {
  name: "v-select",
  props:{
    options:{
      type:Array,
      default(){
        return[]
      }
    },
    selected:{
      type:String,
      default:''
    },
  },

  data(){
    return{
      isSelect:false
    }
  },
  methods:{
    selectOption(option){
       this.$emit('select',option)
        this.isSelect = false;
    },
    hideSelect(){
      this.isSelect =! this.isSelect;
    }

  },
mounted() {
    let vm = this;
    document.addEventListener('click', function (select){
      if(select.target === vm.$refs['v-selected-wrapper']){
        vm.hideSelect();
      }
    })
}
}
</script>

<style lang="scss">
.v-selected{
   padding: 10px;
   border: 1px solid black;
   width: 213px;
  font-size: 20px;
  &-options{
    position: absolute;
    background: #e0e0e0;
    padding: 10px;
    border: 1px solid black;
    width: 213px;

  }
  &-option{
    padding: 3px;
    display: flex;
    justify-content: flex-start;
    transition: .3s all;
    font-size: 20px;

  }
  &-option:hover{
    padding: 3px;
    padding-left: 10px;
    transition: .3s all;

  }
}
</style>