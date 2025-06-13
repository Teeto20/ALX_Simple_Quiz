function checkAnswer() {
    const correctAnswer = "4";
    const selectedRadio = document.querySelector('input[name="quiz"]:checked');
    if (!selectedRadio) {
        alert("Please select an answer before submitting.");
        return;
    }
    const userAnswer = selectedRadio ? selectedRadio.value : null;
    const feedback = document.getElementById("feedback");
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }
}
const submitButton = document.getElementById("submit-answer");
submitButton.addEventListener("click", checkAnswer);