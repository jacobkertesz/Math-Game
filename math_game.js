//This element is the start button
const start = document.getElementById('start')

function main() {
    //Elements
    const answer = document.getElementById('answer')
    const time = document.getElementById('time')
    const problem = document.getElementById('problem')

    //Variables
    let seconds = 0.0 //0.0
    let timeMod = 600 //600
    const timeDelay = 93 //93: This makes the timer close to the same rate as actual time

    //Arrays
    let problemArray = []
    let userArray = []
    let answerArray = []

    //Records results when "enter" is pressed
    answer.addEventListener("keydown", (event) => {
        if (event.key == "Enter") {
            userArray.push(answer.value)
            answer.value = ""
            decideMath()
        }
    })

    //Tracks and displays time
    function timer() {
        if (timeMod > 0) {
            seconds = seconds + 0.1
            timeMod--
            time.innerHTML = seconds.toFixed(1)
            setTimeout(timer, timeDelay)
        }
        else {
            displayResults()
        }
    }

    //Creates, displays, and records random addition problems
    function generateAddition() {
        let addition1 = Math.floor(Math.random() * 11)
        let addition2 = Math.floor(Math.random() * 11)
        let additionProblem = addition1 + " + " + addition2 + " = "

        answerArray.push(addition1+addition2) //records correct answer

        problem.innerHTML = additionProblem
        problemArray.push(additionProblem)
    }

    //Creates, displays, and records random subtraction problems
    function generateSubtraction() {
        let subtraction1 = Math.floor(Math.random() * 11)
        let subtraction2 = Math.floor(Math.random() * 11)
        let subtractionProblem = subtraction1 + " - " + subtraction2 + " = "

        answerArray.push(subtraction1-subtraction2) //records correct answer

        problem.innerHTML = subtractionProblem
        problemArray.push(subtractionProblem)
    }

    //Creates, displays, and records random multiplication problems
    function generateMultiplication() {
        let multiplication1 = Math.floor(Math.random() * 11)
        let multiplication2 = Math.floor(Math.random() * 11)
        let multiplicationProblem = multiplication1 + " x " + multiplication2 + " = "

        answerArray.push(multiplication1*multiplication2) //records correct answer

        problem.innerHTML = multiplicationProblem
        problemArray.push(multiplicationProblem)
    }

    //Creates, displays, and records random division problems
    //To avoid decimals, the dividend (division2) and quotient ()divisionAnswer) are random and the divisor is the product of the two
    function generateDivision() {
        let division2 = Math.floor(Math.random() * 10) + 1 //This must be at minimum 1 to avoid division by 0
        let divisionAnswer = Math.floor(Math.random() * 11)
        let division1 = divisionAnswer*division2
        let divisionProblem = division1 + " / " + division2 + " = "

        answerArray.push(divisionAnswer) //records correct answer

        problem.innerHTML = divisionProblem
        problemArray.push(divisionProblem)
    }

    //Displays problems, the user's answers, and if they were incorrect
    function displayResults() {
        for (let i = 0; i < problemArray.length - 1; i++) {
            let result = document.createElement("p")
            let wrong = ""
            if (userArray[i] != answerArray[i]) {
                wrong = " [Incorrect]"
            }
            result.innerHTML = problemArray[i] + userArray[i] + wrong
            document.body.appendChild(result)
        }
    }

    //Randomly decides if the math problem will be addition or subtraction
    function decideMath() {
        let mathType = Math.floor(Math.random() * 4)
        if (mathType == 1) {
            generateAddition()
        }
        else if (mathType == 2) {
            generateMultiplication()
        }
        else if (mathType == 3) {
            generateDivision()
        }
        else {
            generateSubtraction()
        }
    }

    //Initial function calls
    decideMath()
    setTimeout(timer, timeDelay)
}

//Waits until start button is clicked
start.addEventListener("click", main)