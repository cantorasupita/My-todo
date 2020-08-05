//add item

class additemsClass {

    constructor(elemInp, data, wrapper, rendFun, saveItemLoc, nameLocalCart){
        this.elemInp = elemInp;
        this.data = data;
        this.wrapper = wrapper;
        this.rendFun = rendFun;
        this.saveItemLoc = saveItemLoc;
        this.nameLocalCart = nameLocalCart;
    }

   
    itemFunc(){
        if(this.elemInp.value.trim() !== ''){
            let text =  this.elemInp.value.trim();
            this.data.push({"text" : text , "important": false, "completed": false, "id": this.data.length});
            this.elemInp.value = '';
            this.rendFun(this.data, this.wrapper);
            this.saveItemLoc(this.nameLocalCart, this.data);  // saveCart
        }else{
            alert('Поле пустое!');
        }
    }

//END
}