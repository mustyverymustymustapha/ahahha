const languages = [
  "JavaScript", "Python", "Java", "C++", "Ruby",
  "Go", "Swift", "Kotlin", "TypeScript", "Rust",
  "PHP", "C#", "Scala", "Dart", "Haskell",
  "Lua", "R", "Julia", "Erlang", "Clojure",
  "F#", "Elixir", "Groovy", "Perl", "COBOL"
];

const button = document.getElementById('languageButton');
const result = document.getElementById('result');

button.addEventListener('click', () => {
 
  const randomIndex = Math.floor(Math.random() * languages.length);
 
  const chosenLanguage = languages[randomIndex];
 
  result.textContent = chosenLanguage;
});
// im really sorry this took a while it was hard because my brain has been tired the past few days