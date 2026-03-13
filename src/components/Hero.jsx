import { TypeAnimation } from "react-type-animation";
import computer from "../assets/computer.png";

export default function Hero(){

const goToProjects = () => {
document.getElementById("projects").scrollIntoView({ behavior:"smooth" });
};

return(

<section className="hero" id="home">

<div className="hero-container">

<div className="hero-left">

<h1 className="hero-title">Hi, I'm Harish</h1>

<h2 className="hero-role">

<TypeAnimation
sequence={[
"Software Developer",
2000,
"Java Developer",
2000,
"Frontend Developer",
2000
]}
speed={50}
repeat={Infinity}
/>

</h2>

<p className="hero-text">
I design and build modern web applications.
</p>

<button className="btn" onClick={goToProjects}>
View My Work
</button>

</div>


<div className="hero-right">

<img src={computer} alt="3D computer" />

</div>

</div>

</section>

)

}