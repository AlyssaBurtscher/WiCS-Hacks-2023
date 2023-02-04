let x = 0;
let pushes = 0;
//x is the number of times the user pushes the button
//and the number of questions the assignment has
function one(){
    console.log("Hi");
    x++;
}

//each time the user presses a "complete" button, pushes increments.
function two(){
    pushes++;
    tracking();
}
//this is for the second button for 
//when the user completes a part of the assignment

 
//x is the number of questions on the assignment

function tracking(){
//finding percentage of the assignment that is done
let percentage = 100;
percentage = 100/x;
let added = 0;
    if(pushes<x){
        added = percentage * pushes;
        //display "assignment is x% done"
        if(added>99){
            added = 100;
            console.log("You have completed the assignment!");
        }else{
            console.log(added);
            console.log("% of the assignment is complete");
        }

    }
}

