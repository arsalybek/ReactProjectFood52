const menuLoaded=(newMenu)=>{
    return {
        type:"MENU_LOADED",
        payload: newMenu
    }
}

const menuRequested=()=>{
    return {
        type:"MENU_REQUESTED"
        
    }
}

const deleteFromCart=(id)=>{
    return{
        type:"ITEM_REMOVE_FROM_CART",
        payload: id
    }
}

const addedToCart=(id)=>{
    console.log(id)
    return{
        type:"ITEM_ADD_TO_CART",
        payload:id
    }
}

const addAllToCart=(menu)=>{
    console.log("addAll")
    console.log(menu)
    return {
        type: "ADD_ALL_TO_CART",
        payload:menu
    }
}

export {menuLoaded,menuRequested,deleteFromCart,addedToCart,addAllToCart}