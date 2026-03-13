import { useState } from "react";
import p1 from "../assets/project1.jpg";
import p2 from "../assets/project2.jpg";
import p3 from "../assets/project3.jpg";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {

const [modal,setModal] = useState(null);

const projects = {

shop:{
title:"Clothing Shop Management System",
image:p1,
github:"https://github.com/yourusername/clothing-shop-system",
desc:"The Clothing Shop Management System is a software application designed to assist shop owners in managing day-to-day store operations efficiently. The system helps maintain product inventory, track stock availability, manage sales transactions, and organize customer purchase records. By digitizing shop operations, it improves inventory control, reduces manual errors, and allows the shop owner to monitor store performance effectively.",
features:[
"Inventory management for clothing items",
"Sales tracking and billing system",
"Stock monitoring and low-stock alerts",
"Customer purchase history management"
]
},

expense:{
title:"Expense Tracker Application",
image:p2,
github:"https://github.com/yourusername/expense-tracker",
desc:"The Expense Tracker is a personal finance management application that helps users monitor and organize their daily financial activities. Users can record income and expenses, categorize transactions, and analyze their spending habits. The system provides a simple and user-friendly interface that helps individuals improve financial awareness and maintain better control over their budgets.",
features:[
"Record daily income and expenses",
"Categorize financial transactions",
"Track spending patterns",
"Simple and intuitive user interface"
]
},

sql:{
title:"SQL Data Analysis Project",
image:p3,
github:"https://github.com/yourusername/sql-data-analysis",
desc:"The SQL Data Analysis project demonstrates how structured datasets can be analyzed using SQL queries. The project focuses on extracting meaningful insights from large datasets by applying filtering, aggregation, grouping, and analytical queries. This project highlights the importance of database systems in decision-making and business intelligence.",
features:[
"Data filtering and aggregation using SQL",
"Query optimization techniques",
"Generating analytical reports",
"Extracting business insights from datasets"
]
}

};

return(

<section className="projects" id="projects">

<h2 className="projects-title">My Projects</h2>

<div className="project-grid">

{Object.keys(projects).map((key)=>{

const project = projects[key];

return(

<div className="project-card" key={key}>

<img src={project.image} alt="project"/>

<div className="project-content">

<h3>{project.title}</h3>

<p>{project.desc.substring(0,120)}...</p>

<div className="project-buttons">

<button
className="preview-btn"
onClick={()=>setModal(key)}
>
<FaExternalLinkAlt/> Preview
</button>

<a
href={project.github}
target="_blank"
className="github-card-btn"
>
<FaGithub/> GitHub
</a>

</div>

</div>

</div>

)

})}

</div>


{/* MODAL PREVIEW */}

{modal && (

<div className="modal-overlay">

<div className="modal">

<h2>{projects[modal].title}</h2>

<p className="modal-desc">
{projects[modal].desc}
</p>

<h4>Key Features</h4>

<ul>
{projects[modal].features.map((f,index)=>(
<li key={index}>{f}</li>
))}
</ul>

<div className="modal-buttons">

<button
className="close-btn"
onClick={()=>setModal(null)}
>
Close Preview
</button>

</div>

</div>

</div>

)}

</section>

)

}