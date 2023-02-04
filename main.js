function one(){
    console.log("Hi");
    let user = true
    let newAssignments = new Map();
    while(user) {
        let name = prompt("Name of assignment: ");
        let dueDate = prompt("Date due: ");
        let assignment = prompt("Type of assignment: ");
        switch(assignment) {
            case "Essay":
                let words = Numbers(prompt("Number of words: "));
                let revisions = Numbers(prompt("Number of revisions: "));
                newAssignments.set(name, new essay(0, dueDate, words, revisions));
                break;
            case "Quiz":
                let studyTime = Numbers(prompt("Time to study: "));
                let quizLength = Numbers(prompt("Length of quiz: "));
                newAssignments.set(name, new quiz(0, dueDate, studyTime, quizLength));
                break;
            case "Problem Set":
                let numProblems = Numbers(prompt("Time to study: "));
                newAssignments.set(name, new problems(0, dueDate, numProblems));
                break;
        }
    }
}
class assignment{
    constructor(percentDone, name, dueDate){
        this.percentDone = percentDone;
        this.dueDate = dueDate;
    }
    
    completed() {
        return percentDone == 100;
    }
    
    getPercentage() {
        return percentDone;
    }
}

class essay extends assignment{
    constructor(percentDone, dueDate, words, revisions){
        super(percentDone, dueDate);
        this.words = words;
        wordsWritten = 0.0;
        this.revisions = revisions;
        revisionsDone = 0.0;
    }
    
    getWordsDone() {
        return wordsWritten;
    }
    
    wordsAdded(numWordsAdded) {
        wordsWritten += numWordsAdded;
    }
    
    getRevisionsDone() {
        return revisionsDone;
    }
    
    revisionCompleted() {
        revisionsDone++;
    }
    
    tracking() {
        percentDone = ((wordsWritten / words) * 80) + ((revisionsDone / revisions) * 20)
    }
}

class quiz extends assignment{
    constructor(percentDone, dueDate, studyTime, lengthOfQuiz){
        super(percentDone, dueDate);
        this.studyTime = studyTime;
        studyDone = 0.0;
    }
    
    getLengthOfQuiz() {
        return lengthOfQuiz;
    }
    
    tracking() {
        percentDone = (studyDone / studyTime) * 100;
    }
}

class problems extends assignment{
    constructor(percentDone, dueDate, numProblems){
        super(percentDone, dueDate);
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
}
