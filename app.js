let box = document.querySelector(".box")

box.innerHTML = `
<div id="container">
            <div id="navbar">
                <h1>My potfolio</h1>
                <div id="nav">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Service</a></li>
                        <li><a href="#">Contract</a></li>
                        <li><a href="#">My work</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div id="second">

        </div>

        <div id="third">
            
        </div>`

window.addEventListener("scroll", function(){
    let nav = document.querySelector("#navbar");
    nav.classList.toggle("sticky", window.scrollY > 0);
});