const languages = [
  "JavaScript", "Python", "Java", "C++", "Ruby",
  "Go", "Swift", "Kotlin", "TypeScript", "Rust",
  "PHP", "C#", "Scala", "Dart", "Haskell",
  "Lua", "R", "Julia", "Erlang", "Clojure",
  "F#", "Elixir", "Groovy", "Perl", "COBOL"
];
const button = document.getElementById('languageButton');
const result = document.getElementById('result');
const easterEggButton = document.getElementById('easterEggButton');
button.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * languages.length);
  const chosenLanguage = languages[randomIndex];
  result.textContent = chosenLanguage;
  result.style.color = getRandomColor();
});
easterEggButton.addEventListener('click', () => {
  alert("You found the Easter Egg! But the cat was here all along!");
});
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
// im really sorry this took a while it was hard because my brain has been tired the past few days