import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
     
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
     
     const temp= state.items.filter((item,index) => index !== action.payload)
     state.items=temp
    },
   
    clearCart: (state, action) => {
    

      return { items: [] }; 
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
