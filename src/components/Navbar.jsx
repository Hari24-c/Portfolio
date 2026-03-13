import { useState, useEffect } from "react";

export default function Navbar(){

const [active,setActive] = useState("home");

useEffect(()=>{

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){
setActive(entry.target.id);
}

});

},

{threshold:0.6}

);

sections.forEach(section=>observer.observe(section));

},[]);

const scrollToSection = (id) => {

document.getElementById(id).scrollIntoView({
behavior:"smooth"
});

};

return(

<nav className="navbar">

<h2 className="logo">Harish</h2>

<ul>

<li
className={active==="home" ? "active" : ""}
onClick={()=>scrollToSection("home")}
>
Home
</li>

<li
className={active==="projects" ? "active" : ""}
onClick={()=>scrollToSection("projects")}
>
Projects
</li>

<li
className={active==="skills" ? "active" : ""}
onClick={()=>scrollToSection("skills")}
>
Skills
</li>

<li
className={active==="contact" ? "active" : ""}
onClick={()=>scrollToSection("contact")}
>
Contact
</li>

</ul>

</nav>

)

}