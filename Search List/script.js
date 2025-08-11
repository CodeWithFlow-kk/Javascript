const searchInput = document.getElementById("searchInput");
const listItems = document.querySelectorAll("#list li");
const noResult = document.getElementById("noResult");

searchInput.addEventListener("keyup", () => {
  const filter = searchInput.value.toLowerCase();
  let matchCount = 0;

  listItems.forEach((item) => {
    const text = item.textContent.toLowerCase();
    const isMatch = text.includes(filter);
    item.style.display = isMatch ? "block" : "none";
    if (isMatch) matchCount++;
  });

  noResult.style.display = matchCount === 0 ? "block" : "none";
});

