export const addToCart = data => {
  console.log('data', data)
  return {
    type: 'ADD_TO_CART',
    data
  }
}
