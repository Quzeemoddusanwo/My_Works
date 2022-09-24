const steps = Array.from(document.querySelectorAll("form .step"));
const nextBtn= Array.from(document.querySelectorAll("form .next-btn"));
const prevBtn= Array.from(document.querySelectorAll("form .prev-btn"));
const form= Array.from(document.querySelectorAll("form"));
nextBtn.forEach((button) => {
    button.addEventListener("click", () => {
        changestep("next");
    });
});
prevBtn.forEach((button) => {
    button.addEventListener("click", () => {
        changestep("prev");
    });
});
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputs = [];
    form.querySelectorAll("input").forEach((input) => {
        const{ name, value } = input;
        inputs.push({ name, value });
    });
    console.log(inputs);
    form.reset();
})