import { useState } from "react"
import DetailPanel from "../components/DetailPanel"

export default function Projects(){

const [active,setActive] = useState<"games" | "codes" | null>(null)
const [selected,setSelected] = useState<any>(null)

const games = [
{
title:"The Back Exit",
image:"/images/games-images/the-back-exit.png",
video:"/videos/thebackexit.mp4",
description:"First person horror game built in Unity.",
download:"/games/backexit.zip"
},
{
title:"Horror Prototype",
image:"/games/prototype.png",
video:"/videos/prototype.mp4",
description:"Experimental horror gameplay prototype."
},
{
title:"AI Horror NPC",
image:"/games/ai.png",
video:"/videos/ai.mp4",
description:"Enemy AI system using behavior trees."
}
]

const codes = [
{
title:"AI Biotechnology App",
image:"/codes/aiapp.png",
description:"Interactive AI learning platform."
},
{
title:"Portfolio Website",
image:"/codes/portfolio.png",
description:"3D interactive developer portfolio."
},
{
title:"Shader Playground",
image:"/codes/shader.png",
description:"Custom shader experiments."
}
]

return(

<section className="projects">

<h2 className="projects-title">Projects</h2>

{/* MAIN MENU */}

<div className={`project-menu ${active ? "expand" : ""}`}>

{/* GAMES CARD */}

<div
className={`menu-card ${active==="games" ? "active":""}`}
onClick={()=>setActive(active==="games"?null:"games")}
>

<div className="menu-front">

<h3>🎮 Games</h3>

</div>

<div className="menu-back">

{active==="games" && (

<div className="project-grid">

{games.map((g,i)=>(
<div
key={i}
className="project-item"
onClick={()=>setSelected(g)}
>

<img src={g.image}/>

<h4>{g.title}</h4>

</div>
))}

</div>

)}

</div>

</div>

{/* CODES CARD */}

<div
className={`menu-card ${active==="codes" ? "active":""}`}
onClick={()=>setActive(active==="codes"?null:"codes")}
>

<div className="menu-front">

<h3>💻 Codes</h3>

</div>

<div className="menu-back">

{active==="codes" && (

<div className="project-grid">

{codes.map((c,i)=>(
<div
key={i}
className="project-item"
onClick={()=>setSelected(c)}
>

<img src={c.image}/>

<h4>{c.title}</h4>

</div>
))}

</div>

)}

</div>

</div>

</div>

{/* PANEL */}

<DetailPanel
open={!!selected}
onClose={()=>setSelected(null)}
title={selected?.title}
description={selected?.description}
video={selected?.video}
image={selected?.image}
download={selected?.download}
/>

</section>

)

}