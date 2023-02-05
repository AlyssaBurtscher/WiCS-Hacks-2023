var assignments = ["One", "Two", "Three"];

function one(){
    var e = document.getElementById("assignment");
    var value = e.value;
    if (value == "Task"){
        window.location.href = "task.html";
    }
    else if (value == "Quiz") {
             
    }
    else if (value == "Essay") {
             
    }
    else if (value == "Problems") {
        window.location.href = "problems.html";   
    } 
}

var pushes = 0;
var y = 0;
var x =0;

function submitp(){
    pushes++;
    console.log(pushes);
    x = document.getElementById("Questions").value;
    console.log(x);
    let hundred = 100;
    let percentage = 100/x;
    if(pushes<=x){
        //add percentage to 0
        y = y+percentage;
        if(y>99){
            y=100;
            console.log("congrats, you're done!");

        }
        console.log(y + "% done");
    }
    document.getElementById("objectId").innerHTML = y + "% done";

}

function reset(){
    pushes = 0;
    x = 0;
    y=0;
}
function back(){
    window.location.href = "index.html";
}

function submit(){
    var title = document.getElementById("Title").value;
    var dueDate = document.getElementById("dueDate").value;
    //import {assignment} from './classesFile.js';
    var assignment = new assignment(0, title, dueDate);
    assignments.push(assignment.getName() + " " + assignment.getDueDate());
}

function load(){
    var list = document.getElementById('list');
    for (var i = 0; i < assignments.length; i++){
        var label = document.createElement("label");
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = "check" + i;
        var description = document.createTextNode(assignments[i]);
        label.id = "label" + i;

        label.appendChild(checkbox);
        label.appendChild(description);
        list.appendChild(label);
        var br = document.createElement("br");
        br.id = "br" + i;
        list.appendChild(br);
    }
}

function update(){
    var temp = [];
    for (var i = 0; i < assignments.length; i++){
        var x = document.getElementById('check' + i);
        if (!x.checked){
            temp.push(assignments[i]);
        }
        document.getElementById('label' + i).remove();
        document.getElementById('br' + i).remove();
    }
    assignments = temp;
    load();
}