window.addEventListener("scroll", function(){
    let nav = document.querySelector("#navbar");
    nav.classList.toggle("sticky", window.scrollY > 0);
});