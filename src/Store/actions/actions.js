

export default {
    GET_SEARCH_VALUE_TO_VUEX({commit}, value){
     commit('SET_SEARCH_VALUE_TO_VUEX', value)
    },
    ADD_TO_CRAD({commit},product){
        commit('SET_CARD', product)
    },
    DELETE_FROM_CARD({commit}, index){
        commit('REMOVE_FROM_CART', index)
    },
    INCREMENT_CART_ITEM({commit},index){
        commit('INCREMENT', index)
    },
    DECREMENT_CART_ITEM({commit}, index){
        commit('DECREMENT', index)
    }
}