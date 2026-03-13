import { FaJava, FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiJavascript, SiMysql } from "react-icons/si";

export default function Skills(){

return(

<section className="skills" id="skills">

<h2>Skills</h2>

<div className="skill-grid">

<div className="skill">
<FaJava size={40} color="#f89820"/>
<p>Java</p>
</div>

<div className="skill">
<SiMysql size={40} color="#00758F"/>
<p>SQL</p>
</div>

<div className="skill">
<SiJavascript size={40} color="#f7df1e"/>
<p>JavaScript</p>
</div>

<div className="skill">
<FaReact size={40} color="#61DBFB"/>
<p>React</p>
</div>

<div className="skill">
<FaHtml5 size={40} color="#e34c26"/>
<p>HTML</p>
</div>

<div className="skill">
<FaCss3Alt size={40} color="#264de4"/>
<p>CSS</p>
</div>

</div>

</section>

)

}