//localstorage
//------------------------------------------------------------------------------------------
function saveCart(nameCart, cartItem){//'cart' , cart
    localStorage.setItem(nameCart, JSON.stringify(cartItem));
}

function getCart(nameCart){//'cart'
   return JSON.parse(localStorage.getItem(nameCart));
}

