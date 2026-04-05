
import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import Projects from "./sections/Projects"
import Scene from "./three/Scene"
import Cursor from "./components/Cursor"
import Loader from "./components/Loader"
import About from "./sections/About"



export default function App(){

return(

<Loader>

<Navbar/>

<Cursor/>
<Scene/>
<div id="hero">
<Hero/>
</div>
<div id="about">
<About/>
</div>
<div id="projects">
<Projects/>
</div>

</Loader>

)

}