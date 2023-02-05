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
}