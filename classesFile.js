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

class assignment{
    constructor(percentDone, name, dueDate) {
        this.percentDone = percentDone;
        this.name = name;
        this.dueDate = dueDate;
    }
    
    completed() {
        return percentDone == 100;
    }
    
    getPercentage() {
        return percentDone;
    }
    
    getName() {
        return name;
    }
    
    tracking() {
        percentDone = 100;
    }
    
    getDueDate() {
        return dueDate;
    }
    
    toString() {
        return "\nTitle: " + name + "\nDue Date: " + dueDate + "\nPercent Done: " + percentDone;
    }
}

class essay extends assignment{
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

class quiz extends assignment{
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

class problems extends assignment{
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