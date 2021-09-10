<template>
  <div class="Catalog">
    <v-catalog/>

  </div>
</template>

<script>
// @ is an alias to /src

import vCatalog from '../components/catalog/v-catalog'

export default {
  name: 'Catalog',
  components: {
    vCatalog,

  },
  data(){
    return {

    }
  },
  methods:{

  }
}
</script>
<style>
.Catalog{
  max-width: 900px;

}
h1{
  margin-top: 30px;
}
</style>