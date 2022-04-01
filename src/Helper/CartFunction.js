export const cartTotalPrice = (cartList) => cartList.reduce((sum,product)=>sum+product.price,0)

export const cartTotalDiscount = (cartList) => cartList.reduce((sum,product)=>sum+product.discount,0)