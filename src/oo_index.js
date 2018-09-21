
let content = document.getElementById('content');
let btn = document.getElementById('btn');


function getEm(e){
 e.preventDefault();
  let task = document.getElementById('new-task-description').value;
  content.text = task;
 
 
  
}
