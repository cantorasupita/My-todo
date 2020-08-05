// none completed -------------------------------------------

class notCompletedClass {
    constructor(elemWrap, className){
        this.elemWrap = elemWrap;
        this.className = className;
    }

    notComplMeth(){
        let child = this.elemWrap.childNodes;//body
        for(let i = 0; child.length > i; i++){
            if(child[i].children[0].classList.contains(this.className)){
                child[i].style.display = "none";
            }
        }
    }

}