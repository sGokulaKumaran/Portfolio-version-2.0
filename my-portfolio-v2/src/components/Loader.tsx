import { useEffect, useState } from "react"

export default function Loader({children}:{children:React.ReactNode}){

const [loading,setLoading] = useState(true)

useEffect(()=>{

const timer = setTimeout(()=>{
setLoading(false)
},2200)

return ()=>clearTimeout(timer)

},[])

if(loading){

return(

<div className="space-loader">

<div className="galaxy">

<div className="orbit orbit1"></div>
<div className="orbit orbit2"></div>
<div className="orbit orbit3"></div>

<div className="core"></div>

</div>

<p className="loading-text">Loading Universe...</p>

</div>

)

}

return <>{children}</>

}