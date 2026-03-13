import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

export default function Footer(){

const scrollTop = () => {

window.scrollTo({
top:0,
behavior:"smooth"
});

};

return(

<footer className="footer">

<div className="footer-content">

<h3>Harish</h3>

<p>
Thank you for visiting my portfolio.
Feel free to connect with me.
</p>

<div className="footer-icons">

<a href="mailto:harishbalamurugan24@gmail.com">
<FaEnvelope/>
</a>

<a href="https://linkedin.com/in/haarishb" target="_blank">
<FaLinkedin/>
</a>

<a href="https://github.com/Hari24-c?tab=repositories" target="_blank">
<FaGithub/>
</a>

</div>

<p className="footer-copy">

© {new Date().getFullYear()} Harish. All rights reserved.

</p>

</div>

<button className="scroll-top" onClick={scrollTop}>

<FaArrowUp/>

</button>

</footer>

)

}