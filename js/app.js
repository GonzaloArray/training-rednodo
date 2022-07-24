document.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    header.classList.toggle("abajo", window.scrollY>400);
})