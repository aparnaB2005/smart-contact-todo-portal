document.addEventListener("DOMContentLoaded", () => {
  loadTasks();
});

function addTask(){

const taskInput=document.getElementById("taskInput");
const taskValue=taskInput.value.trim();

if(!taskValue){
    return;
}

const li = document.createElement("li");
  li.textContent = taskValue;

  const btn = document.createElement("button");
  btn.textContent = "Delete";
  btn.onclick = () => {
    li.remove();
    saveTasks();
  }

  btn.addEventListener('mouseenter',()=>{
    btn.style.backgroundColor = 'rgb(139, 0, 0)';
  })

  btn.addEventListener('mouseleave',()=>{
    btn.style.backgroundColor='';
  })
  li.appendChild(btn);
  document.getElementById("taskList").appendChild(li);

  taskInput.value = "";
  
 let feedback=document.getElementById("feedback");
 feedback.style.display='block';
 setTimeout(()=>{
    feedback.style.display='none';
 },1200);

 saveTasks();
}

 function saveTasks() {
  const tasks = [];
  document.querySelectorAll("#taskList li").forEach(li => {
    tasks.push(li.childNodes[0].nodeValue.trim());
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  for (const task of tasks) {
    const taskInput = document.getElementById("taskInput");
    taskInput.value = task;
    addTask();
  }
  document.getElementById("taskInput").value = "";
}