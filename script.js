const btn = document.querySelector("[data-btn]")
btn.addEventListener("click", () => {
  btn.classList.toggle("animating")
})
// In line 3, if you change ".toggle" to ".add" - will only animate once. Would use "add" in real-world production site.
