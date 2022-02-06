import { createSlice } from '@reduxjs/toolkit'

export const bagSlice = createSlice({
  name: 'bag',
  initialState: {
    items: [],
    totalItems:0,
    cartTotal:0,
    show:true
  },
  reducers: {
    addToBag: (state, action)=> {
      const prevTotal = JSON.parse(JSON.stringify(state.cartTotal));
      // console.log(action.payload)
      const convert = action.payload.i.price.replace('$','')
      const price = parseFloat(convert)
      const additon = action.payload.beverage === "Coke" || action.payload.beverage === "Sprite"?2.70:action.payload.beverage === "Laban" ? 3 : null
      const newTotal = price+additon
      state.items.push(action.payload)
      state.totalItems ++
      state.cartTotal = prevTotal + newTotal
      state.show = true
    },
    increment: (state, action) => {
      //if wanted to not add existing items it will just update the qty
      const existingItems = JSON.parse(JSON.stringify(state.items));
      state.items = existingItems.map((i)=>i.i.title===action.payload.i.title && i.meat === action.payload.meat ? {...i,qty:i.qty+1}:i)
      state.totalItems ++
    },
    decrement: (state, action) => {
      const prevTotal = JSON.parse(JSON.stringify(state.cartTotal));
      const existingItems = JSON.parse(JSON.stringify(state.items));
      const price = parseFloat(action.payload.bagItem.i.price.replace('$',0))
      const additon = action.payload.bagItem.beverage === "Coke" || action.payload.bagItem.beverage === "Sprite"?2.70:action.payload.bagItem.beverage === "Laban" ? 3 : 0
      const newTotal = price+additon
      // console.log(action.payload)
      // console.log(existingItems)
      // console.log(prevTotal)
      state.items = existingItems.filter( (element,index)=> index !== action.payload.index )
      state.totalItems --
      state.cartTotal = prevTotal - newTotal
    },
    hide: state=>{
      state.show=!state.show
    },
    show: state=>{
      state.show=!state.show
    }
  }
})

// Action creators are generated for each case reducer function
export const { addToBag, increment, decrement, hide , show } = bagSlice.actions

export default bagSlice.reducer