var assignments = ["One", "Two", "Three"];

function one(){
    var e = document.getElementById("assignment");
    var value = e.value;
    if (value == "Task"){
        window.location.href = "task.html";
        date();
    }
    else if (value == "Quiz") {
             
    }
    else if (value == "Essay") {
             
    }
    else if (value == "Problems") {
        window.location.href = "problems.html";   
    } 
}

function back(){
    window.location.href = "index.html";
}

function submit(){
    var title = document.getElementById("Title").value;
    var dueDate = document.getElementById("dueDate").value;
}

function load(){
    var list = document.getElementById('list');
    for (var i = 0; i < assignments.length; i++){
        /*var firstname = assignments[i];
        var entry = document.createElement('li');
        entry.appendChild(document.createTextNode(firstname));
        list.appendChild(entry);
        console.log("Working");*/
        
        var label = document.createElement("label");
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = "check" + i;
        var description = document.createTextNode(assignments[i]);
        description.id = "lable" + i;

        label.appendChild(checkbox);
        label.appendChild(description);
        list.appendChild(label);
        list.appendChild(document.createElement("br"));
    }
}

function update(){
    var temp = [];
    for (var i = 0; i < assignments.length; i++){
        var x = document.getElementById('check' + i);
        if (!x.checked){
            temp.push(assignments[i]);
        }
        x.remove();
        document.getElementById('lable' + i).remove();
    }
    
    assignments = temp;
    load();
}