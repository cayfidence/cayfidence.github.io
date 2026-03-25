const projects = [

{
icon:"🧮",
name:"Math",
desc:"Fun math practice",
url:"/math/"
},

{
icon:"📚",
name:"Reading 100",
desc:"100 story books",
url:"/reading100/"
},

{
icon:"🔤",
name:"Phonics",
desc:"Sound and spelling",
url:"#"
},

{
icon:"✏️",
name:"Spelling",
desc:"Spelling practice",
url:"#"
},

{
icon:"🎮",
name:"Learning Games",
desc:"Educational games",
url:"/learninggame/"
}

];

const container = document.getElementById("projects");

function render(list){

container.innerHTML="";

list.forEach(p=>{

const card=document.createElement("div");

card.className="card";

card.innerHTML=`

<span>${p.icon}</span>

<h2>${p.name}</h2>

<p>${p.desc}</p>

<a class="openBtn" href="${p.url}">Open →</a>

`;

container.appendChild(card);

});

}

render(projects);



/* search */

const searchBox=document.getElementById("search");

if(searchBox){

searchBox.oninput=(e)=>{

const q=e.target.value.toLowerCase();

const filtered=projects.filter(p=>

p.name.toLowerCase().includes(q) ||

p.desc.toLowerCase().includes(q)

);

render(filtered);

};

}



/* dark mode */

const toggle=document.getElementById("themeToggle");

if(localStorage.theme==="dark"){

document.body.classList.add("dark");

}

if(toggle){

toggle.onclick=()=>{

document.body.classList.toggle("dark");

localStorage.theme=document.body.classList.contains("dark")?"dark":"light";

};

}
