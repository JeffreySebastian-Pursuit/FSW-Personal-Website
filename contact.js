const button = document.querySelector("#toDarkMode")
const mode  = localStorage.getItem('mode');
const body = document.body
if(mode !== null){
    body.classList.add(mode)
}
button.addEventListener("click", (e) =>{
    body.classList.toggle("dark-mode");
    if(button === "Dark Mode"){
        localStorage.setItem ("mode", "body")
    } else {
        localStorage.setItem("mode", "dark-mode")
    }
    if(button.textContent === "Dark Mode"){
        button.textContent = "Light Mode"
    }else{
        button.textContent = "Dark Mode"
    }
})