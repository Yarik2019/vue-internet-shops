import Vue from  "vue"
import Vuex from "vuex"
import commentActions from "./actions/actions";
import ipaRequests from "./actions/ipa-requests"
import mutations from "./mutations/mutations";
import getters from "./getters/getters";

const actions = {...commentActions, ...ipaRequests}
Vue.use(Vuex);

export  default  new Vuex.Store({
    state:{
        searchValue: '',
        products:[],
        card:[],
    },
    actions,
    mutations,
    getters

})