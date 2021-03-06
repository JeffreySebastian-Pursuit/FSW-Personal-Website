console.log("Hello");

// Create a button that will change it to dark mode.

const button = document.querySelector("#toDarkMode")
const mode  = localStorage.getItem('mode');
const body = document.body
if(mode !== null){
    body.classList.add(mode)
}
button.addEventListener("click", (e) =>{
  body.classList.toggle("dark-mode");
  if(button === "Dark Mode"){
      localStorage.setItem("mode", "dark-mode")
      
  } else {
      localStorage.setItem ("mode", "body")
  }
  if(button.textContent === "Dark Mode"){
      button.textContent = "Light Mode"
  }else{
      button.textContent = "Dark Mode"
  }
})
// create an option the filters the backend, front and etc...

const data = [
  { name: "Front End", image: "HTML.png", text: "HTML"},
  { name: "Front End", image: "CSS.png" , text: "CSS" },
  { name: "Front End", image: "JavaScript.png", text: "JavaScript" },
  { name: "Backend", image: "Node JS.png", text: "Node JS" },
  { name: "Backend", image: "express.jpeg", text: "Express" },
  { name: "Backend", image: "Postgresql.png", text: "PostgreSQL" },
  { name: "Backend", image: "React and Redux.png", text:"React and Redux"},
  { name: "Other", image: "agile.png", text: "Agile" },
  { name: "Other", image: "code reviews.jpeg", text: "Code Review" },
  { name: "Other", image: "pair programming.png", text: "Pair Programming" },
  { name: "Other", image: "sprint.png", text: "Sprint" },
  { name: "All", image: "HTML.png", text: "HTML"},
  { name: "All", image: "CSS.png", text: "CSS" },
  { name: "All", image: "JavaScript.png", text: "JavaScript"},
  { name: "All", image: "Node JS.png", text: "Node JS" },
  { name: "All", image: "express.jpeg", text: "Express"},
  { name: "All", image: "Postgresql.png" ,text: "PostgreSQL"},
  { name: "All", image: "React and Redux.png", text:"React and Redux" },
  { name: "All", image: "agile.png" , text: "Agile" },
  { name: "All", image: "code reviews.jpeg" , text: "Code Review"  },
  { name: "All", image: "pair programming.png", text: "Pair Programming" },
  { name: "All", image: "sprint.png", text: "Sprint"  }
];

const skills = ["Front End", "Backend", "Other", "All"];
const select = document.querySelector("select");
const container = document.querySelector(".Skills-Container");

const createOptions = () => {
  for (let i = 0; i < skills.length; i++) {
    const option = document.createElement("option");
    // option.classList.add("skillsOptions")
    option.textContent = skills[i];
    option.value = skills[i];
    select.appendChild(option);
    // debugger
  }
};

createOptions();

const filterOption = (e) => {
  e.preventDefault();
  // debugger
  const toTarget = e.target.value;
  container.innerText = "";
  for (let i = 0; i < data.length; i++) {
    if (data[i].name === toTarget) {
      let img = document.createElement("img");
      img.classList.add("skills-images")
      img.src = data[i].image;
      container.appendChild(img);
      img.addEventListener("mouseover", () => {
        debugger
        debugger;
        const para = document.querySelector("#text")
        para.innerHTML = ""
        let skillsText = document.createElement("p");
        skillsText.classList.add("para2")
        skillsText.innerHTML = data[i].text;
        debugger
        para.appendChild(skillsText);
        if(para.style.display === "none"){
          para.style.display ="block"
        }else{
          para.style.display ="none"
        }
      })
    }
  }
};
select.addEventListener("change", filterOption);
