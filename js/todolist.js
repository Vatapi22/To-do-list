
showTask();
var addTask = document.getElementById("add");

var task = document.getElementById("newTask");
addTask.addEventListener("click", function(){
    var taskValue = task.value; 
    var webtask = localStorage.getItem("localTask");
    if (webtask == null)
        taskObj=[];
    else
        taskObj = JSON.parse(webtask);
    taskObj.push(taskValue);
    localStorage.setItem("localTask", JSON.stringify(taskObj));
})
function showTask(){
    var table = document.getElementById("table");
    var html= table.innerHTML;;
    var webtask = localStorage.getItem("localTask");
    if (webtask == null)
        taskObj=[];
    else
        taskObj = JSON.parse(webtask);
    taskObj.forEach((item, index) => {
    html +=`<tr class="table-todo" >
    <th><button class="btn  sc" id="select" onclick="editTask(${index})"><i class="fa fa-edit"></i></button></th>
    <th>${item}</th>
    <th>2</th>
    <th><button class="btn  sc" onclick="remove(${index})"><i class="fa fa-trash"></i></button></th>
    </tr>`;
    });
    table.innerHTML = html;
}
var clearTask = document.getElementById("clear");
clearTask.addEventListener("click", function(){
    localStorage.clear();
})

function editTask(index){
    var save = document.getElementById("saveIndex");
    var edit = document.getElementById("edit");   
    var webtask = localStorage.getItem("localTask");
    var obj = JSON.parse(webtask);
    task.value = obj[index]; 
    edit.style.display = "block";
    addTask.style.display = "none";
    save.value = index;
}

var save = document.getElementById("edit")
save.addEventListener("click", function(){
    var save = document.getElementById("saveIndex");
    var webtask = localStorage.getItem("localTask");
    var obj = JSON.parse(webtask);
    var index = save.value;
    obj[index] = task.value;
    localStorage.setItem("localTask", JSON.stringify(obj));
    save.style.display= "none";
    addTask.style.display= "block";
    showTask();
})

function remove(index){
    var webtask = localStorage.getItem("localTask");
    var obj = JSON.parse(webtask);
    alert(obj[index]);
    obj.splice(index, 1);
    localStorage.setItem("localTask", JSON.stringify(obj)); 
    showTask();
}


