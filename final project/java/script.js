const factCategories = {
    science: ["The sun is a star.", "Humans share 50% DNA with bananas."],
    health: ["Drinking water boosts metabolism.", "Sleep improves memory."]
};

function showCategoryFact(category) {
    const facts = factCategories[category];
    const random = facts[Math.floor(Math.random() * facts.length)];
    document.getElementById("factDisplay").textContent = random;
}

const allFacts = [...factCategories.science, ...factCategories.health];
document.getElementById("factBtn")?.addEventListener("click", () => {
    const fact = allFacts[Math.floor(Math.random() * allFacts.length)];
    document.getElementById("featuredFact").textContent = fact;
});

const quizData = [
    { q: "What is HTML?", options: ["Language", "Markup", "Browser"], a: "Markup" },
    { q: "CSS is used for?", options: ["Styling", "Logic", "Database"], a: "Styling" }
];
let current = 0, score = 0;

function loadQuiz() {
    const q = document.getElementById("question");
    if (!q) return;
    const data = quizData[current];
    q.textContent = data.q;
    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";
    data.options.forEach(opt => {
        optionsDiv.innerHTML += `<button onclick="checkAnswer('${opt}')">${opt}</button>`;
    });
}

function checkAnswer(ans) {
    if (ans === quizData[current].a) { score++; }
    current++;
    if (current < quizData.length) { loadQuiz(); }
    else {
        document.getElementById("result").innerHTML = `Quiz finished!`;
        document.getElementById("scoreDisplay").innerHTML = `Your score: ${score}`;
        localStorage.setItem("quizScore", score);
    }
}

loadQuiz();

const form = document.getElementById("feedbackForm");
form?.addEventListener("submit", e => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    document.getElementById("formMsg").innerHTML = `Thanks ${name}, your message was received!`;
});
