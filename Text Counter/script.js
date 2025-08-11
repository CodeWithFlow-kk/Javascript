const textarea = document.getElementById("text-counter");
const chars = document.querySelector(".chars");
const words = document.querySelector(".words");
const lines = document.querySelector(".lines");

textarea.addEventListener("input", () => {
  const text = textarea.value;
  const charCount = text.length;
  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
  const lineCount = text === "" ? 0 : text.split("\n").length;
  chars.innerHTML = `${charCount} <span>character${
    charCount !== 1 ? "s" : ""
  }</span>`;
  words.innerHTML = `${wordCount} <span>word${
    wordCount !== 1 ? "s" : ""
  }</span>`;
  lines.innerHTML = `${lineCount} <span>line${
    lineCount !== 1 ? "s" : ""
  }</span>`;
});


