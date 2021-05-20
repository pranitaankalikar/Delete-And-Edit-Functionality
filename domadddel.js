var form= document.getElementById("addForm");
var itemlist=document.getElementById('items');
var samplepanu=document.getElementById('header-title');
console.log(samplepanu.innerHTML);

// Form submit event
form.addEventListener('submit', addItem);

// delete item
itemlist.addEventListener('click',removeItem);
// fuction of adding item
function addItem(e){
    e.preventDefault();

    // Get input value
    var newItem= document.getElementById('item').value;

    //creat new li element
    var li = document.createElement('li');
    
    // add class
    li.className='list-group-item';
    var h=document.createElement('h7');
    h.appendChild(document.createTextNode(newItem));
    // adding text node 
    li.appendChild(h); 
    itemlist.appendChild(li);

    // adding button to li
    var adddelbutton= document.createElement('button');
    adddelbutton.className='btn btn-danger btn-sm float-right delete';
    adddelbutton.appendChild(document.createTextNode('X'));
    li.appendChild(adddelbutton);

    var addEditbutton= document.createElement('button');
    addEditbutton.className='btn btn-danger btn-sm float-right edit';
    addEditbutton.appendChild(document.createTextNode('Edit'));
    li.appendChild(addEditbutton);

    
    
}
function myFunction() {
    (document.getElementById("updt")).removeChild(document.getElementById('updt').childNodes[0]);

    return
    
}

// removing elelement

function removeItem(e){
    if (e.target.classList.contains('delete')){
        if(confirm("Are you sure to delete?")){
            var li=e.target.parentElement;
            itemlist.removeChild(li);
            li=undefined;
        }


    }
    if (e.target.classList.contains('edit')){
        if(confirm("Are you sure to edit?")){
            var li=e.target.parentElement;
            var editText=(li.children[0]).innerHTML;
            document.getElementById('item').value= editText;
            var updtbutton=document.createElement('button');
            updtbutton.className='btn btn-success btn-sm';
            updtbutton.appendChild(document.createTextNode('Update'));
            var divOfUpdate=document.getElementById('updt');
            divOfUpdate.appendChild(updtbutton);
            divOfUpdate.addEventListener('click',updateClick)
            function updateClick(e){
                e.preventDefault();
                var newItem1= document.getElementById('item').value;
                (li.children[0]).innerHTML=newItem1;
                myFunction();
                li=undefined;

            }

        }   
    }
    
}
