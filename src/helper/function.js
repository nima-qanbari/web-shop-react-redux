
const isInCart = (state , id) => {
    const result = !!state.selectedItems.find(item => item.id === id)
    return result
}

const quantityCount = (state , id) => {
    const index = state.selectedItems.findIndex(item => item.id === id)
    if(index === -1) {
        return false
    }else{
        return state.selectedItems[index].quantity
    }
}


const discount = (total) => {
    if(total > 500) {
       return (total * 0.2).toFixed(1)
    }else {
        return 0
    }
}

export { isInCart , quantityCount, discount}