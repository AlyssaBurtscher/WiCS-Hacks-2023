function one(){
    var e = document.getElementById("assignment");
    var value = e.value;
    if (value == "Task"){
        window.location.href = "task.html";
    }
    else if (value == "Quiz") {
             
    }
    else if (value == "Essay") {
        window.location.href = "essay.html";
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
    console.log(x);
    let hundred = 100;
    let percentage = 100/x;
    if(pushes<=x){
        //add percentage to 0
        y = y+percentage;
        y = Math.round(y);
        if(y>98.999){
            y=100;
            console.log("congrats, you're done!");

        }
        console.log(y + "% done");
    }
    document.getElementById("objectId").innerHTML = y + "% done";

}
function save(){
    x = document.getElementById("Questions").value;
}
var g=0;
function savee(){
    g = document.getElementById("Essay").value;
}
function reset(){
    pushes = 0;
    x = 0;
    y=0;
    document.getElementById("objectId").innerHTML = y + "% done";

}
var revisions = 0;
var wordse = 5;
function submite(){
    revisions++;
    document.getElementById("Revisions").innerHTML = revisions + " revisions";
    console.log("revision made");
    document.getElementById("Word Count").innerHTML = "Word Count:" + wordse;

}


function back(){
    window.location.href = "index.html";
}