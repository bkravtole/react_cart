import { createReducer } from "@reduxjs/toolkit";


export const Cartreducer = createReducer(
    {

        cartitemS: [],
        subTotal: 0,
        shipping: 0,
        tax: 0,
        total: 0,

    }, {
    addTocartss: (state, action) => {
        const item = action.payload;
        const isitemExits = state.cartitemS.find((i) => i.id === item.id);

        if (isitemExits) {
            state.cartitemS.forEach(i => {
                if (i.id === item.id) i.quantity += 1
            });
        } else {
            state.cartitemS.push(item);
            
        }
    },
    decrement: (state, action) => {
        const items = state.cartitemS.find((i) => i.id === action.payload)
        if (items.quantity > 1) {
            state.cartitemS.forEach((i) => {
                if (i.id === items.id) i.quantity -= 1
            })
        }
    },

    deleteFromCart : (state ,action) =>{
state.cartitemS =state.cartitemS.filter((i)=>i.id!==action.payload)
    },
    calculatePrice :(state) =>{
      let sum =0;  
      state.cartitemS.forEach((i)=>(sum+= i.price * i.quantity))
      state.subTotal =sum;
      state.shipping = state.subTotal >1000 ? 0 : 200 ;
      state.tax =+(state.subTotal*0.18).toFixed();
      state.total = state.subTotal + state.shipping + state.tax
    }

}); 