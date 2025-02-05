const questions = document.querySelectorAll("h2");
const paragraphs = document.querySelectorAll("p");

for (let i = 0; i < questions.length; i++) {
    questions[i].setAttribute("tabindex", "0");
    paragraphs[i].classList.add("hide"); 
    const icon = document.createElement("span"); 
    icon.style.backgroundImage = "url('./assets/images/icon-plus.svg')";
    icon.className = "add-icon";
    questions[i].appendChild(icon);
    function toggleParagraph() {
        paragraphs[i].classList.toggle("hide");
        // icon.style.backgroundImage = "url('./assets/images/icon-minus.svg')";
        if (paragraphs[i].classList.contains("hide")) {
            icon.style.backgroundImage = "url('./assets/images/icon-plus.svg')";
        } else {
            icon.style.backgroundImage = "url('./assets/images/icon-minus.svg')";
        }
    }
    questions[i].addEventListener("click", toggleParagraph);

    questions[i].addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            toggleParagraph();
        }
    }  
)}  



