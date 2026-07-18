//CRUD
var item = [];

function addItem(item){
  item.push(item);
}

function display(){
    item.forEach(function(item,index){
        console.log(item,index);
        
    });
}

function update (index,newItem){
    item[index] = newItem;
}

function deleteItem(index){
    item.splice(index,1);
}