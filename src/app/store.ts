import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice';
import { dogApiSlice } from "../features/dogs/dogs-api-slice"; 


export const store=configureStore({
    reducer:{
        counter:counterReducer,
        [dogApiSlice.reducerPath]:dogApiSlice.reducer
    },
    middleware:(getDefaultMiddleWare)=>{   //Dont Impor getDefault MiddleWare
        return getDefaultMiddleWare().concat(dogApiSlice.middleware);
    }   
})

export type AppDispatch = typeof store.dispatch;
export type RootState= ReturnType<typeof store.getState>;
