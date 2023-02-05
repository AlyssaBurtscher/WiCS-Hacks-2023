var assignments = ["One", "Two", "Three"];

class ImplementAssignments{
    constructor() {
        let newAssignments = new Map();
        var obj = Object.fromEntries(map);
        var jsonString = JSON.stringify(obj);
    }
    
    addAssignment() {
        switch(assignment) {
            case "Essay":
                let words = Numbers(prompt("Number of words: "));
                let revisions = Numbers(prompt("Number of revisions: "));
                newAssignments.set(name, new essay(0, name, dueDate, words, revisions));
                break;
            case "Quiz":
                let studyTime = Numbers(prompt("Time to study: "));
                let quizLength = Numbers(prompt("Length of quiz: "));
                newAssignments.set(name, new quiz(0, name, dueDate, studyTime, quizLength));
                break;
            case "Problem Set":
                let numProblems = Numbers(prompt("Time to study: "));
                newAssignments.set(name, new problems(0, name, dueDate, numProblems));
                break;
            case "Task":
                newAssignments.set(name, new problems(0, name, dueDate));
                break;
        }
        obj = Object.fromEntries(map);
        jsonString = JSON.stringify(obj.toString());
    }
    
    toString() {
        return jsonString;
    }
}

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
        this.wordsWritten = 0.0;
        this.revisions = revisions;
        this.revisionsDone = 0.0;
    }
    
    getWordsDone() {
        return this.wordsWritten;
    }
    
    wordsAdded(numWordsAdded) {
        this.wordsWritten = numWordsAdded;
    }
    
    getRevisionsDone() {
        return this.revisionsDone;
    }
    
    revisionCompleted() {
        this.revisionsDone++;
    }
    
    getMaxRevisions() {
        return this.revisions;
    }
    
    tracking() {
        this.percentDone = ((this.wordsWritten / this.words) * 80) + ((this.revisionsDone / this.revisions) * 20);
    }
    
    toString() {
        return super.toString() + "\nWords Written: " + this.wordsWritten + "\nRequired Word Count: " + this.words + "\nRevisions Done: " + this.revisionsDone + "\nRevisions Required: " + revisions;
    }
}

class Quiz extends Assignment{
    constructor(percentDone, name, dueDate, studyTime, lengthOfQuiz){
        super(percentDone, name, dueDate);
        this.studyTime = studyTime;
        this.studyDone = 0.0;
    }
    
    getLengthOfQuiz() {
        return this.lengthOfQuiz;
    }
    
    getTimeStudies() {
        return this.studyDone;
    }
    
    increaseTimeStudied(addTime) {
        this.studyDone += addTime;
    }
    
    tracking() {
        this.percentDone = (studyDone / studyTime) * 100;
    }
    
    toString() {
        return super.toString() + "\nTime Studied: " + this.studyDone + "\nTotal Time To Study: " + this.studyTime + "\nLength of Quiz: " + this.lengthOfQuiz;
    }
}

class Problems extends Assignment{
    constructor(percentDone, name, dueDate, numProblems){
        super(percentDone, name, dueDate);
        this.numProblems = numProblems;
        this.problemsDone = 0.0;
    }
    
    getnumProblems() {
        return this.numProblems;
    }
    
    getProblemsDone() {
        return this.problemsDone;
    }
    
    changeProblemsDone() {
        this.problemsDone++;
    }
    
    tracking() {
        this.percentDone = (problemsDone / numProblems) * 100;
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
        window.location.href = "quiz.html";     
    }
    else if (value == "Essay") {
        window.location.href = "essays.html";     
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
    var assignment = new Assignment(0, title, dueDate);
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