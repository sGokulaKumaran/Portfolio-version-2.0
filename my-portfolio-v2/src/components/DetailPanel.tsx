import { createPortal } from "react-dom"
import { useRef, useEffect } from "react"

export default function DetailPanel({
open,
onClose,
title,
description,
video,
image,
download
}:any){

const videoRef = useRef<HTMLVideoElement>(null)

useEffect(()=>{

if(open && videoRef.current){
videoRef.current.currentTime = 0
videoRef.current.play().catch(()=>{})
}

},[open,video])

if(!open) return null

return createPortal(

<div className="detail-overlay" onClick={onClose}>

<div
className="detail-panel"
onClick={(e)=>e.stopPropagation()}
>

<button className="detail-close" onClick={onClose}>✕</button>

<div className="detail-media">

{video ? (

<video ref={videoRef} controls muted>
<source src={video}/>
</video>

) : image ? (

<img src={image}/>

) : null}

</div>

<div className="detail-info">

<h2>{title}</h2>

<p>{description}</p>

{download && (
<a href={download} className="detail-btn" download>
Download
</a>
)}

</div>

</div>

</div>,

document.body
)

}