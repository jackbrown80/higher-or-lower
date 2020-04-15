let score = 0;
let message = "Numbers are between 0 and 10"
document.getElementById("message").innerHTML = message ; 
document.getElementById("number").innerHTML = generateNumber();

function generateNumber() {
    return Math.floor(Math.random() * Math.floor(11))
}

function checkAnswer(choice) {
    const originalNumber = document.getElementById("number").innerHTML;
    const newNumber = generateNumber();         

    if(choice==1 && originalNumber<newNumber){
        score +=1;
        message = "Correct!";
    } else if (choice==2 && originalNumber>newNumber){
        score +=1;
        message = "Correct!";
    } else if (originalNumber == newNumber){
        message = "Numbers are the same!";     
    } else {
        message = "Wrong!";
    }
}
            
document.getElementById("message").innerHTML = message ; 
document.getElementById("number").innerHTML = newNumber;
document.getElementById("score").innerHTML = "Score: " + score;