// let div = document.querySelector('div');
// let ul = document.querySelector('ul');
// let lis = document.querySelectorAll('li');  


// div.addEventListener('click', function(){
//     console.log('div was clicked');
// });
// ul.addEventListener('click', function(){
//     console.log('ul was clicked');
// });
// for(li of lis){
//     li.addEventListener('click', function(){
//         console.log('li was clicked');
//     });
// }

let inp = document.querySelector('input');
let btn = document.querySelector('button');
let ul =document.querySelector('ul');


btn.addEventListener('click' , function(){
    let item = document.createElement('li');
    item.innerText = inp.value;

    let delBtn = document.createElement('button');
    delBtn.innerText='delete';
    delBtn.classList.add('delete');
    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value='';
    console.log(inp.value);
   
    
});
 ul.addEventListener('click', function(event){
    console.log(event.target.nodeName == 'BUTTON');{
    let listItem = event.target.parentElement;
    listItem.remove();
    console.log('deleted');

    }
 });

















// let delBtns = document.querySelectorAll('.delete');
// for(del of delBtns){
//     del.addEventListener('click', function(){
//         let par = del.parentElement;
//         console.log(par);
       
//     });
// }

