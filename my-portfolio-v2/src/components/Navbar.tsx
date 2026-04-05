import { FaHome, FaUser, FaFolder, FaEnvelope } from "react-icons/fa"

export default function Navbar(){

const scrollToSection = (id:string)=>{
const section = document.getElementById(id)
if(section){
section.scrollIntoView({behavior:"smooth"})
}
}

return(

<header className="navbar reveal">

<div className="logo reveal-delay-1">

<span className="code">&lt;/&gt;</span>
<span>MyPortfolio</span>

</div>

<nav className="nav-links reveal-delay-2">

<button onClick={()=>scrollToSection("hero")}>
<FaHome /> Home
</button>

<button onClick={()=>scrollToSection("about")}>
<FaUser /> About
</button>

<button onClick={()=>scrollToSection("projects")}>
<FaFolder /> Projects
</button>

<button onClick={()=>scrollToSection("contact")}>
<FaEnvelope /> Contact
</button>

</nav>

</header>

)

}