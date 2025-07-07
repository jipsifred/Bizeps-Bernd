// ##################################################################
// #                       DEINE KARTEIKARTEN                       #
// ##################################################################
// Füge hier deine Karten ein. Benutze $...$ für LaTeX-Formeln.
// WICHTIG: Backslashes in Formeln müssen verdoppelt werden (z.B. \\frac statt \frac).

const allFlashcards = [
    {
        "topic": "Grundlagen Tensorrechnung",
        "question": "Was ist die grundlegende Eigenschaft von Tensoren?",
        "answer": "Tensoren liefern koordinatensystemunabhängige Ergebnisse. Sie sind eine Verallgemeinerung von Skalaren, Vektoren und Matrizen."
    },
    {
        "topic": "Grundlagen Tensorrechnung",
        "question": "Welche Stufen von Tensoren werden unterschieden?",
        "answer": "0. Stufe: Skalar (z.B. eine Zahl), 1. Stufe: Vektor, 2. Stufe: Matrix, 3. Stufe: 3D-Matrix. Höhere Stufen sind mathematisch möglich, aber schwer vorstellbar."
    },
    {
        "topic": "Grundlagen Tensorrechnung",
        "question": "Was ist das Verhältnis von Matrizen und Tensoren 2. Stufe?",
        "answer": "Jeder Tensor 2. Stufe ist eine Matrix, aber nicht jede Matrix ist ein Tensor 2. Stufe."
    },
    {
        "topic": "Flächenträgheitsmomente",
        "question": "Was beschreibt das Flächenträgheitsmoment (FTM) physikalisch?",
        "answer": "Den Widerstand einer Querschnittsgeometrie gegen eine äußere Belastung wie Biegung oder Torsion."
    },
    {
        "topic": "Flächenträgheitsmomente",
        "question": "Wie lauten die Formeln für die axialen Flächenträgheitsmomente (bezüglich Biegung)?",
        "answer": "Axiales FTM um die y-Achse: $I_{yy} = \\int_A x_2^2 dA$. \\nAxiales FTM um die z-Achse: $I_{zz} = \\int_A x_3^2 dA$."
    },
    {
        "topic": "Flächenträgheitsmomente",
        "question": "Wie lautet die Formel für das polare Flächenträgheitsmoment $I_p$ (bezüglich Torsion)?",
        "answer": "$I_p = \\int_A (x_2^2 + x_3^2) dA = I_{yy} + I_{zz}$"
    },
    {
        "topic": "Flächenträgheitsmomente",
        "question": "Wie lautet die Formel für das Deviationsmoment $I_{yz}$?",
        "answer": "$I_{yz} = -\\int_A x_2 x_3 dA$. Es ist ein Maß für die Asymmetrie des Querschnitts."
    },
    {
        "topic": "Flächenträgheitsmomente",
        "question": "Wie lautet der Satz von Steiner (Steiner-Anteil)?",
        "answer": "Er wird für zusammengesetzte Flächen benötigt. Das FTM bezüglich einer Achse ist die Summe aus dem Eigen-FTM und dem Steiner-Anteil: $I_{zz} = I'_{zz} + \\Delta x_3^2 \\cdot A$."
    },
    {
        "topic": "Flächenträgheitsmomente",
        "question": "Wie berechnet man die Hauptachsenmomente $I_1$ und $I_2$?",
        "answer": "$I_{1,2} = \\frac{I_{yy} + I_{zz}}{2} \\pm \\sqrt{(\\frac{I_{yy} - I_{zz}}{2})^2 + I_{yz}^2}$. In Hauptachsen ist das Deviationsmoment Null."
    },
    {
        "topic": "Allgemeiner Spannungszustand",
        "question": "Definiere 'Spannung' und 'Dehnung'.",
        "answer": "Spannung ($\\sigma, \\tau$): Innere Beanspruchung eines Körpers, wenn eine äußere Last anliegt. \\nDehnung ($\\epsilon$): Größenänderung eines Körpers unter Beanspruchung."
    },
    {
        "topic": "Allgemeiner Spannungszustand",
        "question": "Was ist der Unterschied zwischen Normalspannung ($\\sigma$) und Schubspannung ($\\tau$)?",
        "answer": "Normalspannung $\\sigma$ wirkt senkrecht (normal) zur betrachteten Fläche. Schubspannung $\\tau$ wirkt parallel (tangential) zur Fläche."
    },
    {
        "topic": "Allgemeiner Spannungszustand",
        "question": "Was stellt der Mohr'sche Spannungskreis dar?",
        "answer": "Er stellt alle möglichen Spannungszustände (Normal- und Schubspannungen) an einem Punkt für alle Schnittrichtungen grafisch dar. Jeder Punkt auf dem Kreis ist eine Spannungsmöglichkeit."
    },
    {
        "topic": "Allgemeiner Spannungszustand",
        "question": "Wie lautet das Hookesche Gesetz für den 1D-Fall (Stab)?",
        "answer": "$\\sigma = E \\cdot \\epsilon$, wobei $E$ der Elastizitätsmodul und $\\epsilon$ die Dehnung ist."
    },
    {
        "topic": "Biegelinie am Balken",
        "question": "Was ist die Biegonormalspannung $\\sigma_{xx}$?",
        "answer": "Die Spannung, die durch ein Biegemoment $M_z$ in einem Balken entsteht. Formel: $\\sigma_{xx}(x_3) = \\frac{M_z}{I_{zz}} \\cdot x_3$. Sie ist maximal am Rand und Null in der neutralen Faser."
    },
    {
        "topic": "Biegelinie am Balken",
        "question": "Wie lautet die Differentialgleichung der Biegelinie $w(x)$?",
        "answer": "$EI_{zz} \\cdot w''(x) = -M_z(x)$. Dabei ist $w(x)$ die Auslenkung, $w'(x)$ die Neigung, $w''(x)$ die Krümmung, $E$ der E-Modul und $I_{zz}$ das Flächenträgheitsmoment."
    },
    {
        "topic": "Biegelinie am Balken",
        "question": "Nenne die Randbedingungen für die Biegelinie bei einem Festlager, einer Einspannung und einem freien Ende.",
        "answer": "Festlager/Loslager: Auslenkung $w=0$. \\nEinspannung: Auslenkung $w=0$ und Neigung $w'=0$. \\nFreies Ende: Biegemoment $M=0$ und Querkraft $Q=0$."
    },
    {
        "topic": "Schubspannung und Torsion",
        "question": "Was ist der Schubmittelpunkt (SMP)?",
        "answer": "Der Punkt im Querschnitt, an dem eine Querkraft angreifen muss, damit keine Torsion (Verdrehung) des Profils auftritt."
    },
    {
        "topic": "Torsion",
        "question": "Was ist Torsion?",
        "answer": "Die Belastung eines Stabs oder Profils durch ein Moment $M_T$ in Längsrichtung, was zu einer Verdrehung führt."
    },
    {
        "topic": "Torsion",
        "question": "Wie lautet die Formel für die maximale Schubspannung $\\tau_{max}$ bei Torsion eines Vollquerschnitts?",
        "answer": "$\\tau_{max} = \\frac{M_T}{W_p}$, wobei $W_p$ das polare Widerstandsmoment ist."
    },
    {
        "topic": "Torsion",
        "question": "Wie lauten die 1. und 2. Bredt'sche Formel für dünnwandige geschlossene Profile?",
        "answer": "1. Schubspannung: $\\tau(s) = \\frac{M_T}{2 A_m \\delta(s)}$. \\n2. Verdrillung: $\\vartheta = \\frac{M_T}{G J_T}$ mit Torsionsträgheitsmoment $J_T = \\frac{4 A_m^2}{\\oint \\frac{1}{\\delta(s)} ds}$."
    },
    {
        "topic": "Formänderungsarbeit",
        "question": "Was ist Formänderungsarbeit $W$?",
        "answer": "Die in einem elastischen Körper durch äußere Belastung gespeicherte Energie aufgrund seiner Verformung."
    },
    {
        "topic": "Formänderungsarbeit",
        "question": "Wie lautet der 1. Satz von Castigliano?",
        "answer": "Die partielle Ableitung der Formänderungsarbeit $W$ nach einer Verschiebung $s_i$ ergibt die zugehörige Kraft $F_i$. Formel: $F_i = \\frac{\\partial W}{\\partial s_i}$."
    },
    {
        "topic": "Formänderungsarbeit",
        "question": "Wie lautet der 2. Satz von Castigliano?",
        "answer": "Die partielle Ableitung der Formänderungsarbeit $W$ nach einer Kraft $F_i$ ergibt die zugehörige Verschiebung $s_i$ in Richtung der Kraft. Formel: $s_i = \\frac{\\partial W}{\\partial F_i}$."
    },
    {
        "topic": "Euler'sche Knickfälle",
        "question": "Wie lautet die Euler'sche Knickformel für die kritische Knicklast $P_k$?",
        "answer": "$P_k = \\frac{\\pi^2 E I_{min}}{L_k^2}$, wobei $L_k$ die Knicklänge ist, die vom Lagerungsfall abhängt."
    },
    {
        "topic": "Euler'sche Knickfälle",
        "question": "Nenne die 4 Euler'schen Knickfälle und ihre jeweiligen Knicklängen $L_k$.",
        "answer": "1. Fall (beidseitig gelenkig): $L_k = L$. \\n2. Fall (einseitig eingespannt, oben frei): $L_k = 2L$. \\n3. Fall (beidseitig eingespannt): $L_k = 0.5L$. \\n4. Fall (einseitig eingespannt, oben gelenkig): $L_k \\approx 0.7L$."
    }
];

// ##################################################################
// #                        SPIEL-LOGIK                             #
// ##################################################################

// Konstanten für Bilder und Spielmechanik
const BOSS_SPRITES = {
    idle1: 'https://i.ibb.co/whnqjYbG/Chat-GPT-Image-7-Juli-2025-15-21-02-png-2.png',
    idle2: 'https://i.ibb.co/q37FkCZs/Chat-GPT-Image-7-Juli-2025-15-21-02-png-5.png',
    damage: 'https://i.ibb.co/4wWK5RxP/Chat-GPT-Image-7-Juli-2025-15-21-02-png-4.png',
    ko: 'https://i.ibb.co/MkZGQkc1/Chat-GPT-Image-7-Juli-2025-15-21-02-png-3.png'
};
const MAX_HEARTS = 10;
const HEART_ICON_URL = 'https://cdn2.iconfinder.com/data/icons/retro-game-items-revamp-border/100/heart_life_health_red-512.png';

// DOM-Elemente
const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const winScreen = document.getElementById('win-screen');
const topicSelectionContainer = document.getElementById('topic-selection');
const startGameBtn = document.getElementById('start-game-btn');
const playAgainBtn = document.getElementById('play-again-btn');

const boss = document.getElementById('boss');
const healthHeartsContainer = document.getElementById('health-hearts');
const flashcardContainer = document.getElementById('flashcard-container');
const questionEl = document.getElementById('question');
const answerEl = document.getElementById('answer');
const answerArea = document.getElementById('answer-area');

const showAnswerBtn = document.getElementById('show-answer-btn');
const correctBtn = document.getElementById('correct-btn');
const incorrectBtn = document.getElementById('incorrect-btn');

// Spielzustand
let currentQuizCards = [];
let bossHealth = 0;
let maxBossHealth = 0;
let idleAnimationInterval;

// -- SETUP FUNKTIONEN --
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function populateTopics() {
    const topics = [...new Set(allFlashcards.map(card => card.topic))];
    topicSelectionContainer.innerHTML = '';
    topics.forEach(topic => {
        const label = document.createElement('label');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = topic;
        checkbox.checked = true;
        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(` ${topic}`));
        topicSelectionContainer.appendChild(label);
    });
}

// -- SPIELABLAUF --
function startGame() {
    const selectedTopics = Array.from(topicSelectionContainer.querySelectorAll('input:checked')).map(input => input.value);
    if (selectedTopics.length === 0) {
        alert("Bitte wähle mindestens ein Thema aus!");
        return;
    }
    currentQuizCards = allFlashcards.filter(card => selectedTopics.includes(card.topic));
    shuffleArray(currentQuizCards);

    maxBossHealth = currentQuizCards.length;
    bossHealth = maxBossHealth;

    startScreen.classList.remove('active');
    winScreen.classList.remove('active');
    gameScreen.classList.add('active');
    
    initializeHearts();
    updateHeartsDisplay();
    displayNextCard();
    startIdleAnimation();
}

function displayNextCard() {
    if (currentQuizCards.length === 0) {
        // Verzögerung, damit die letzte Attacken-Animation fertig wird, bevor der Siegesbildschirm kommt.
        if (bossHealth <= 0) {
             setTimeout(winGame, 1000);
        }
        return;
    }

    showAnswerBtn.classList.remove('hidden');
    correctBtn.classList.add('hidden');
    incorrectBtn.classList.add('hidden');
    answerArea.style.display = 'none';

    const card = currentQuizCards[0];
    questionEl.textContent = card.question;
    answerEl.textContent = card.answer;

    if (window.MathJax) {
        MathJax.typesetPromise([questionEl, answerArea]).catch((err) => console.log('MathJax Error: ' + err.message));
    }
}

function showAnswer() {
    answerArea.style.display = 'block';
    showAnswerBtn.classList.add('hidden');
    correctBtn.classList.remove('hidden');
    incorrectBtn.classList.remove('hidden');
}

function handleCorrect() {
    bossHealth--;
    updateHeartsDisplay();
    playPlayerAttack();

    currentQuizCards.shift();
    
    disableButtons(true);
    setTimeout(() => {
        disableButtons(false);
        displayNextCard();
    }, 1000);
}

function handleIncorrect() {
    playBossAttack();
    
    const card = currentQuizCards.shift();
    currentQuizCards.push(card);
    shuffleArray(currentQuizCards);

    disableButtons(true);
    setTimeout(() => {
        disableButtons(false);
        displayNextCard();
    }, 1000);
}

// -- VISUELLES & ANIMATIONEN --
function initializeHearts() {
    healthHeartsContainer.innerHTML = '';
    for (let i = 0; i < MAX_HEARTS; i++) {
        const heart = document.createElement('img');
        heart.src = HEART_ICON_URL;
        heart.classList.add('heart-icon');
        healthHeartsContainer.appendChild(heart);
    }
}

function updateHeartsDisplay() {
    const healthPercentage = bossHealth > 0 ? (bossHealth / maxBossHealth) : 0;
    const fullHearts = Math.ceil(healthPercentage * MAX_HEARTS);
    const heartIcons = healthHeartsContainer.querySelectorAll('.heart-icon');

    heartIcons.forEach((heart, index) => {
        heart.classList.toggle('empty', index >= fullHearts);
    });
}

function startIdleAnimation() {
    stopIdleAnimation(); // Sicherstellen, dass nur eine Animation läuft
    let currentSprite = 'idle1';
    idleAnimationInterval = setInterval(() => {
        currentSprite = (currentSprite === 'idle1') ? 'idle2' : 'idle1';
        boss.src = BOSS_SPRITES[currentSprite];
    }, 500);
}

function stopIdleAnimation() {
    clearInterval(idleAnimationInterval);
}

function playPlayerAttack() {
    stopIdleAnimation();
    boss.src = BOSS_SPRITES.damage;
    boss.classList.add('shake');

    setTimeout(() => {
        boss.classList.remove('shake');
        // Wenn der Boss nicht besiegt ist, starte die Idle-Animation neu
        if(bossHealth > 0) {
            startIdleAnimation();
        }
    }, 500);
}

function playBossAttack() {
    stopIdleAnimation();
    boss.classList.add('boss-lunge');
    flashcardContainer.classList.add('card-hit');

    setTimeout(() => {
        boss.classList.remove('boss-lunge');
        flashcardContainer.classList.remove('card-hit');
        startIdleAnimation();
    }, 600);
}

// -- SPIELENDE & HELFER --
function winGame() {
    stopIdleAnimation();
    boss.src = BOSS_SPRITES.ko;
    
    setTimeout(() => {
        gameScreen.classList.remove('active');
        winScreen.classList.add('active');
    }, 1500);
}

function resetGame() {
    winScreen.classList.remove('active');
    startScreen.classList.add('active');
    boss.src = BOSS_SPRITES.idle1; // Boss-Sprite für den nächsten Durchgang zurücksetzen
}

function disableButtons(isDisabled) {
    correctBtn.disabled = isDisabled;
    incorrectBtn.disabled = isDisabled;
}

// Event Listeners und Initialisierung
startGameBtn.addEventListener('click', startGame);
showAnswerBtn.addEventListener('click', showAnswer);
correctBtn.addEventListener('click', handleCorrect);
incorrectBtn.addEventListener('click', handleIncorrect);
playAgainBtn.addEventListener('click', resetGame);

// Initial die Themenauswahl beim Laden der Seite füllen
populateTopics();