//importItems


class importItemsClass {
    constructor(e, eventClass, toggleActiveClass, saveItemLocFunc, data, nameLocalCart){
        this.e = e;
        this.eventClass = eventClass;
        this.toggleActiveClass = toggleActiveClass;
        this.saveItemLocFunc = saveItemLocFunc;
        this.data = data;
        this.nameLocalCart = nameLocalCart;
    }

    importItemMeth(){
        if(this.e.target.classList[2] == this.eventClass){

            let itemImport = this.e.target.parentNode.parentNode.children[0];
            itemImport.classList.toggle(this.toggleActiveClass);
            let dataId = itemImport.parentNode.dataset.id;
    
            if(itemImport.classList.contains(this.toggleActiveClass)){
                this.data.forEach(item => {
                    if(item !== null){
                        if(dataId  == item.id){
                            item.important = true;
                            this.saveItemLocFunc(this.nameLocalCart, this.data); //saveCart
                        }
                    }
                });
            }else{
                this.data.forEach(item => {
                    if(item !== null){
                        if(dataId  == item.id){
                            item.important = false;
                            this.saveItemLocFunc(this.nameLocalCart, this.data); //saveCart
                        }
                    }
                });
            }
        //-----------------
        }
    }

}