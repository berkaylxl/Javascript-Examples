
document.querySelector('#push').onclick = function () {
    if(document.querySelector('#newTask input').value.length==0){
        alert("Lütfen bir görev gir")
    }else{
        document.querySelector('#tasks').innerHTML
        +=`
        <div class="task">
            <span id="taskname"><span><i class="fas fa-circle-notch"></i></span>
            &nbsp; ${document.querySelector('#newTask input').value}
            </span>
            <button class="delete"><i class="far fa-trash-alt"></i>
            </button>
        </div>
        `;
    }
    var currentTasks = document.querySelectorAll(".delete");
    console.log(currentTasks)
        for(var i=0; i<currentTasks.length;i++){
            currentTasks[i].onclick=function() {
                this.parentNode.remove()
            }
        }
    var tasks=document.querySelectorAll(".task");
    for(var i=0;i<tasks.length;i++){
        tasks[i].onclick=function() {
            this.classList.toggle('completed');
        }
    }
    document.querySelector("#newTask input").value="";
}