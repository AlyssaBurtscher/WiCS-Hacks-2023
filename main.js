//var assignments = ["One", "Two", "Three"];

class Assignment{
    constructor(percentDone, name, dueDate) {
        this.percentDone = percentDone;
        this.name = name;
        this.dueDate = dueDate;
    }
    
    completed() {
        return this.percentDone == 100;
    }
    
    getPercentage() {
        return this.percentDone;
    }
    
    getName() {
        return this.name;
    }
    
    tracking() {
        this.percentDone = 100;
    }
    
    getDueDate() {
        return this.dueDate;
    }
    
    toString() {
        return "\nTitle: " + this.name + "\nDue Date: " + this.dueDate + "\nPercent Done: " + this.percentDone;
    }
}

class Essay extends Assignment{
    constructor(percentDone, name, dueDate, words, revisions){
        super(percentDone, name, dueDate);
        this.words = words;
        wordsWritten = 0.0;
        this.revisions = revisions;
        revisionsDone = 0.0;
    }
    
    getWordsDone() {
        return wordsWritten;
    }
    
    wordsAdded(numWordsAdded) {
        wordsWritten = numWordsAdded;
    }
    
    getRevisionsDone() {
        return revisionsDone;
    }
    
    revisionCompleted() {
        revisionsDone++;
    }
    
    getMaxRevisions() {
        return revisions;
    }
    
    tracking() {
        percentDone = ((wordsWritten / words) * 80) + ((revisionsDone / revisions) * 20);
    }
    
    toString() {
        return super.toString() + "\nWords Written: " + wordsWritten + "\nRequired Word Count: " + words + "\nRevisions Done: " + revisionsDone 
                                + "\nRevisions Required: " + revisions;
    }
}

class Quiz extends Assignment{
    constructor(percentDone, name, dueDate, studyTime, lengthOfQuiz){
        super(percentDone, name, dueDate);
        this.studyTime = studyTime;
        studyDone = 0.0;
    }
    
    getLengthOfQuiz() {
        return lengthOfQuiz;
    }
    
    getTimeStudies() {
        return studyDone;
    }
    
    increaseTimeStudied(addTime) {
        studyDone += addTime;
    }
    
    tracking() {
        percentDone = (studyDone / studyTime) * 100;
    }
    
    toString() {
        return super.toString() + "\nTime Studied: " + studyDone + "\nTotal Time To Study: " + studyTime + "\nLength of Quiz: " + lengthOfQuiz;
    }
}

class Problems extends Assignment{
    constructor(percentDone, name, dueDate, numProblems){
        super(percentDone, name, dueDate);
        this.numProblems = numProblems;
        problemsDone = 0.0;
    }
    
    getnumProblems() {
        return numProblems;
    }
    
    getProblemsDone() {
        return problemsDone;
    }
    
    changeProblemsDone() {
        problemsDone++;
    }
    
    tracking() {
        percentDone = (problemsDone / numProblems) * 100;
    }
    
    toString() {
        return super.toString() + "\nProblems Completed: " + problemsDone + "\nTotal Number of Problems: " + numProblems;
    }
}

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
    var assignments = localStorage.getItem("key");
    if (assignments === null) {
        assignments = [];
    }
    else if (!Array.isArray(assignments)) {
        var s = assignments;
        assignments = [s];
    }
    console.log(assignments);
    var assignment = new Assignment(0, title, dueDate);
    var s = assignment.getName() + " " + assignment.getDueDate();
    console.log(s);
    assignments.push(s);
    var a = JSON.stringify(assignments);
    localStorage.setItem("key", a);
    back();
}

function load(){
    var abc = localStorage.getItem("key");
    if (!(abc === null)) {
        var assignments = JSON.parse(abc);
        var list = document.getElementById('list');
        var j = 1;
        if (Array.isArray(assignments)){
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
        else {
                var label = document.createElement("label");
                var checkbox = document.createElement("input");
                checkbox.type = "checkbox";
                checkbox.id = "check" + i;
                var description = document.createTextNode(assignments);
                label.id = "label0";

                label.appendChild(checkbox);
                label.appendChild(description);
                list.appendChild(label);
                var br = document.createElement("br");
                br.id = "br0";
                list.appendChild(br);
        }
           
    }
}

function update(){
    var assignments = localStorage.getItem("key");
    var temp = [];
    const list = document.getElementById("list");
    var i = 0;
    while (list.firstChild) {
        if(list.firstChild.type == "checkbox" && !list.firstChild.checked){
            temp.push(assignments[i]);
        }
        list.removeChild(list.firstChild);
        i++;
    }

    /*var i = 0;
    var x = document.getElementById('check' + i);
    while (!(x === null)){
        con.log(i);
        if (!x.checked && Array.isArray(assignments)){
            temp.push(assignments[i]);
        }
        document.getElementById('label' + i).remove();
        document.getElementById('br' + i).remove();
        
        i++;
        x = document.getElementById('check' + i);
    }*/
    if (temp.length > 0) {
        localStorage.setItem("key", temp);
    }
    else {
        localStorage.clear();
    }
    load();
}