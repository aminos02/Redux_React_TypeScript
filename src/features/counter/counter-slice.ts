import {createSlice,PayloadAction} from '@reduxjs/toolkit';

interface CounterState{
    value:number;
}

const initialState:CounterState={
    value:10
}
const counterSlice=createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment(state){
            state.value++;
        }
        ,decrement(state){
            state.value--;
        },
        amountAdded(state,action:PayloadAction<number>){
            state.value+=action.payload
        }
    }
})

export const {increment,decrement,amountAdded}=counterSlice.actions;

export default counterSlice.reducer;