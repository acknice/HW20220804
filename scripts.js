function addTask() {
    let newTask = document.createElement('li');
        newTask.innerHTML = document.querySelector('#new-task').value;
        newTask.addEventListener('click', taskComplete);
    document.querySelector('#task-list').appendChild(newTask);
    
    document.querySelector('#new-task').value = ''
    if (document.querySelector('#sample-task') != null) {
        document.querySelector('#sample-task').remove();
    }
}


function taskComplete(e){
    let doneTask = e.currentTarget
    setTimeout(function removeItem() {doneTask.remove();}, 1000);
    doneTask.style = 'text-decoration:line-through;';
}


