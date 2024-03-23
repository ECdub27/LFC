import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";
import  cardOneSliceReducer  from "./cardOneSlice";
export const store = configureStore({

    reducer:{
        CardOne: cardOneSliceReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});