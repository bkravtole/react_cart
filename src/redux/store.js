import { configureStore } from "@reduxjs/toolkit";
import { Cartreducer } from "./reducer";

const store = configureStore({
    reducer: {
     CART : Cartreducer,
    }
});

export default store;