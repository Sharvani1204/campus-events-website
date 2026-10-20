const searchBox = document.querySelector("#searchBox");
const cards = document.querySelectorAll(".card");
const noResult = document.querySelector("#noResult");

searchBox.addEventListener("input", () => {
    const text = searchBox.value.toLowerCase().trim();
    let count = 0;

    cards.forEach((card) => {
        const title = card.querySelector("h3").textContent.toLowerCase();
        const category = card.querySelector(".tag").textContent.toLowerCase();

        const matches = title.includes(text) || category.includes(text);

        card.style.display = matches ? "block" : "none";

        if (matches) {
            count++;
        }
    });
    noResult.style.display = count === 0 ? "block" : "none";
});