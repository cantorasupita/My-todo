//completItem
//-------------------------------------------------------
function completItem(e, eventClass, toggleActiveClass, saveItemLoc, data, nameLocalCart){
    // completed -------------------------------
    if(e.target.classList[0] == eventClass){

        let itemImport = e.target.parentNode.parentNode.children[0];
        itemImport.classList.toggle(toggleActiveClass);
        let dataId = itemImport.parentNode.dataset.id;

        if(itemImport.classList.contains(toggleActiveClass)){
            cart.forEach(item => {
                if(item !== null){
                    if(dataId  == item.id){
                        item.completed = true;
                        saveItemLoc(nameLocalCart, data);  //saveCart
                    }
                }
            });
        }else{
            cart.forEach(item => {
                if(item !== null){
                    if(dataId  == item.id){
                        item.completed = false;
                        saveItemLoc(nameLocalCart, data);  //saveCart
                    }
                }
            });
        }
        //-------------------
    }
}


class completItemClass {
    constructor(e, eventClass, toggleActiveClass, saveItemLocFunc, data, nameLocalCart){
        this.e = e;
        this.eventClass = eventClass;
        this.toggleActiveClass = toggleActiveClass;
        this.saveItemLocFunc = saveItemLocFunc;
        this.data = data;
        this.nameLocalCart = nameLocalCart;
    }

    completItemMeth(){
        if(this.e.target.classList[0] == this.eventClass){

            let itemImport = this.e.target.parentNode.parentNode.children[0];
            itemImport.classList.toggle(this.toggleActiveClass);
            let dataId = itemImport.parentNode.dataset.id;
    
            if(itemImport.classList.contains(this.toggleActiveClass)){
                this.data.forEach(item => {
                    if(item !== null){
                        if(dataId  == item.id){
                            item.completed = true;
                            this.saveItemLocFunc(this.nameLocalCart, this.data);  //saveCart
                        }
                    }
                });
            }else{
                this.data.forEach(item => {
                    if(item !== null){
                        if(dataId  == item.id){
                            item.completed = false;
                            this.saveItemLocFunc(this.nameLocalCart, this.data);  //saveCart
                        }
                    }
                });
            }
        }
    }//-------------------



}
