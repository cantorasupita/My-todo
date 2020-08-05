// show All item -------------------------------------------

class allItemShowClass {

    constructor (elemWrap){
        this.elemWrap = elemWrap;
    };

    allItemShowMetch(){
        let child = this.elemWrap.childNodes;
        for(let i = 0; child.length > i; i++){ 
            child[i].style.display = "";
        }
    };

}