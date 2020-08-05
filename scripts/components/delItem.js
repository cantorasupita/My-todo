//remove 

class delItemClass {
    constructor(e, classDel, data, saveItemLoc, nameLocalCart){
        this.e = e;
        this.classDel =  classDel;
        this.data =  data;
        this.saveItemLoc =  saveItemLoc;
        this.nameLocalCart =  nameLocalCart;
    }

    delItemMeth(){
        if(this.e.target.classList[2] == this.classDel){
            if(confirm("удалить запись")){
                this.data.forEach((item, i, arr) => {
                    if(item !== null){
                        item.id == this.e.path[2].dataset.id ? delete arr[i] : '';
                        this.saveItemLoc(this.nameLocalCart, this.data);  //saveCart
                    }
                });
                this.e.path[2].remove();
            }
        }
    }

}