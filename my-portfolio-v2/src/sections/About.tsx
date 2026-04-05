import { useState } from "react"
import DetailPanel from "../components/DetailPanel"



type Item = {
  title: string
  image: string
  description: string
}

export default function About(){

const [active,setActive] = useState<Item | null>(null)

const certificates = [

{
title:"C# Programming",
image:"/images/certificates/csharp.png",
description:"Completed advanced C# programming course focusing on OOP and game logic."
},

{
title:"3d modeling with Blender",
image:"/images/certificates/blender.png",
description:"Built several 3D systems and gameplay mechanics using Unity."
},

{
title:"Java Programming",
image:"/images/certificates/java.png",
description:"Completed comprehensive Java programming course covering core concepts and applications."
},

{
title:"Data Structures and Algorithms",
image:"/images/certificates/data-structures.png",
description:"Completed comprehensive Java programming course covering core concepts and applications."
}

]

const education = [

{
title:"School",
image:"/images/education/school.png",
description:"Completed my school education while discovering my interest in programming and technology."
},

{
title:"College",
image:"/images/education/college.png",
description:"Currently studying Computer Science and focusing on game development and AI systems."
}

]

return(

<section id="about" className="about">

<h2 className="about-title">About Me</h2>

{/* PROFILE IMAGE */}

<div className="about-profile">

<img src="/images/myimage/goku.png" alt="profile"/>

</div>

{/* ABOUT TEXT */}

<p className="about-text">

I am a passionate game developer focused on building immersive
interactive experiences using Unity, C#, and modern technologies.

I enjoy designing gameplay systems, building environments,
and experimenting with AI driven characters.

</p>


{/* EDUCATION */}

<h2 className="about-section-title">Education</h2>

<div className="about-cards">

{education.map((e,i)=>(
<div
key={i}
className="about-card"
onClick={()=>setActive(e)}
>

<img src={e.image} alt={e.title}/>

<h3>{e.title}</h3>

</div>
))}

</div>


{/* CERTIFICATES */}

<h2 className="about-section-title">Certificates</h2>

<div className="about-cards">

{certificates.map((c,i)=>(
<div
key={i}
className="about-card"
onClick={()=>setActive(c)}
>

<img src={c.image} alt={c.title}/>

<h3>{c.title}</h3>

</div>
))}

</div>


{/* DETAIL PANEL */}

<DetailPanel
open={!!active}
onClose={()=>setActive(null)}
title={active?.title}
description={active?.description}
image={active?.image}
/>

</section>

)

}