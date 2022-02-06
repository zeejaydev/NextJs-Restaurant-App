import { configureStore } from '@reduxjs/toolkit'
import bagReducer from './bagSlice'

export default configureStore({
  reducer: {
    bag: bagReducer
  }
})

