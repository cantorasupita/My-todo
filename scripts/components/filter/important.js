// show important -------------------------------------------

class importantClass {
    constructor(elemWrap, className){
        this.elemWrap = elemWrap;
        this.className = className;
    }

    importMeth(){
        let child = this.elemWrap.childNodes;
        for(let i = 0; child.length > i; i++){
            if(!child[i].children[0].classList.contains(this.className)){
                child[i].style.display = "none";
            }
        }
    }
}