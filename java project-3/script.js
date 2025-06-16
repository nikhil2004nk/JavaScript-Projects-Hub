// 🧠 1. Targeting elements
const mainTitle = document.getElementById('main-title');                // by ID
const moodButtons = document.getElementsByClassName('mood-btn');       // by Class
const paragraphs = document.getElementsByTagName('p');                 // by Tag
const moodText = document.querySelector('#moodText');                  // first match
const moodEmoji = document.querySelector('#moodEmoji');                // 🛠 fixed ID
const nameInput = document.querySelector('#nameInput');
const toggleThemeBtn = document.querySelector('#toggle-theme');

// 🧠 2. Manipulating content and style
nameInput.addEventListener('input', () => {
    const name = nameInput.value;
    mainTitle.textContent = name ? `Hello, ${name}!` : "Hi there!";
});

// 🧠 3. Loop through HTMLCollection to add event
for (let btn of moodButtons) {
    btn.addEventListener('click', () => {
        const mood = btn.dataset.mood;

        // Change mood text
        moodText.textContent = `${mood} 🤔`;

        // Change background color
        document.body.style.backgroundColor =
            mood === "Happy" ? "#FFEB3B" :
                mood === "Sad" ? "#90CAF9" :
                    "#FFCDD2";

        // Set mood emoji
        moodEmoji.textContent =
            mood === "Happy" ? "😄" :
                mood === "Sad" ? "😢" :
                    "🤩";

        // Manipulate paragraph texts (by tag)
        for (let p of paragraphs) {
            p.style.fontWeight = "bold";
        }
    });
}

// 🧠 4. Toggle dark/light mode using classList
toggleThemeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    toggleThemeBtn.textContent = document.body.classList.contains('dark-mode')
        ? "Switch to Light Mode"
        : "Toggle Theme";
});
