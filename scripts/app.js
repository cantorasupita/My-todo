
let cart = [];

if(getCart('cart') !== null){
    cart = getCart('cart');
}


//----------------------------------------------------


let addBtn   = document.querySelector('.add-item'),
    inpText  = document.querySelector('.inp-text'),
    body     = document.querySelector('.tdBody'),
    allItemsBtn = document.querySelector('.all-items'),

    showImportBtn = document.querySelector('.show-importants'),
    allCompletedBtn = document.querySelector('.all-completed'),

    searchInp = document.querySelector('.searchInp'),
    searchBtn = document.querySelector('.searchBtn');


//-------------------------------------------------------------------------




body.addEventListener('click', function(event){
    
    //delItem --------
    let delItem = new delItemClass(event, 'class-delete', cart, saveCart, 'cart');
    delItem.delItemMeth();

    //important ------------------
    let importItems = new importItemsClass(event, 'class-important', 'item-important', saveCart, cart, 'cart');
    importItems.importItemMeth();

    //completItem ------------------
    let completItem =  new  completItemClass(event, 'completed', 'item-completed', saveCart, cart, 'cart');
    completItem.completItemMeth();

});

//render----------------------------------------
let render = new renderClass(cart, body);
render.renderMeth();

//addItem--------------------------------------
let additems = new additemsClass(inpText, cart, body, render.renderMeth, saveCart, 'cart');
addBtn.addEventListener('click', function(){
    additems.itemFunc();
});

//search ------------------------------------------
let search =  new searchClass(searchInp, body);
searchBtn.addEventListener('click', function(){
    search.searcFunc();
});

//show All item -----------------------------------
let allItemShow = new allItemShowClass(body);
allItemsBtn.addEventListener('click', ()=>{
    allItemShow.allItemShowMetch();
});


//notCompleted show-----------------------------------
let notCompleted = new notCompletedClass(body, 'item-completed');
allCompletedBtn.addEventListener('click', ()=>{
    notCompleted.notComplMeth();
});


//importClass show-----------------------------------
let importClass  =  new importantClass(body, 'item-important');
showImportBtn.addEventListener('click', ()=>{
    importClass.importMeth();
});

