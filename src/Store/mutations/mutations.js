export default {
    SET_PRODUCTS_TO_STATE(state, products){
        state.products = products;
    },
    SET_CARD(state, product){
        if(state.card.length){
            let isProductExitc = false;
            state.card.map(function (item){
                if(item.article === product.article){
                    isProductExitc = true;
                    item.quantity++;
                }
            })
            if(!isProductExitc){
                state.card.push(product)
            }
        }else{
            state.card.push(product)
        }
    },
    REMOVE_FROM_CART(state, index){
        state.card.splice(index, 1)
    },

    INCREMENT(state, index){
        state.card[index].quantity++
    },
    DECREMENT(state, index){
        if(state.card[index].quantity > 1){
            state.card[index].quantity--
        }

    },
    SET_SEARCH_VALUE_TO_VUEX(state, value){
      state.searchValue = value;
    }
}