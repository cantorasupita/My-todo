//search

class searchClass {

    constructor(searInp ,elemWrap){
        this.searInp = searInp;
        this.elemWrap = elemWrap;
    }

    searcFunc(){

        let inpVal = this.searInp.value.trim();
        let reg = new RegExp(inpVal);
        let items = this.elemWrap.childNodes;
    
       for(let i = 0; i < items.length; i++){
           let textItem = items[i].childNodes[1].textContent;
           if(textItem.match(reg) == null){
                items[i].style.display = 'none';
                this.searInp.value = '';
           }
       }
    }
    
//END
}