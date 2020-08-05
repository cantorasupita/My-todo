//render item

class renderClass {

    constructor(data, wrapper){
        this.data = data;
        this.wrapper = wrapper;
    }

    renderMeth(){
        let out = '';
        this.data.forEach(item => {
            if(item != null){
                out += `<tr data-id=${item.id}>
                    <td class="${item.important ? 'item-important' : ''} ${item.completed ? 'item-completed' : ''}"><b class="completed">${item.text}</b></td>
                    <td><button type="button" class="btn btn-success class-important">Важные</button></td>
                    <td><button type="button" class="btn btn-danger class-delete">Удалить</button></td>
                </tr>`
            }
        });
        this.wrapper.innerHTML = out;
    }
//END----------
}