import * as types from './actionTypes'

export const getCartTotal = () => ({
  type: types.GET_TOTALS,
})

export const increase = (id) => ({
  type: types.INCREASE,
  payload: id,
})

export const decrease = (id) => ({
  type: types.DECREASE,
  payload: id,
})

export const remove = (id) => ({
  type: types.REMOVE,
  payload: id,
})

export const displayItem = (cart) => ({
  type: types.DISPLAY_ITEMS,
  payload: cart,
})
