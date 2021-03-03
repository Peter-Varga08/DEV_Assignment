
let btn_start = document.getElementById('btn-start')
let user_ans
var limits

const generateRandomNumber = (min, max) => {
    let rand_num = Math.round((max-min)*Math.random()) + min;
    return rand_num
}

const readOperandValues = () => {
    let min = Number(document.getElementById("userinput-min").value)
    let max = Number(document.getElementById("userinput-max").value)
    if (max < min) {
        alert("Maximum operand value cannot be smaller than the minimum.")
        limits = undefined
        return
    }
    limits = [min, max]
    return limits
}

const presentQuestion = (a, b) => {
    if (typeof limits !== "undefined"){
        if (!(a && b)){
            var a = generateRandomNumber(limits[0], limits[1]);
            var b = generateRandomNumber(limits[0], limits[1]);
        }
        user_ans = prompt(`What is the value of ${a} + ${b} ?`)
        checkSolution(a, b, user_ans)
    }
}

const checkSolution = (a, b, user_ans) => {
    if (user_ans === null){
        return
    }
    user_ans = Number(user_ans)
    if (user_ans === a + b) {
        alert(`Congratulations, ${user_ans} is the correct answer.`)
    }
    else {
        rep_qstn = confirm("Incorrect answer.\nClick OK to try again, or Cancel to return.")
        if (rep_qstn) {
            presentQuestion(a, b)
        }
    }
}


btn_start.addEventListener('click', readOperandValues);
btn_start.addEventListener('click', presentQuestion);
