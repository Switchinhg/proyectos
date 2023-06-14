
import imgBefore1 from '../assets/before.webp'
import imgAfter1 from '../assets/after.webp'
import { useState } from 'react'
export default function Hero() {
    const [imgTop,setImgTop] = useState(true)

    const onclick = () =>{
        setImgTop(!imgTop)
    }
  return (
    <div className="hero">
        <div className='texto'>
            <p>Transformamos espacios con elegancia</p>
        </div>

    <div className='imgBeforAfter'>
       {/*  {
        imgTop===0? */}
            <img className={ imgTop===true?'rotate small bg front abs':'small'} src={imgBefore1} alt="" />
       {/*  :   */}  
            <img className={imgTop===false?'rotate small bg front abs':'small'} src={imgAfter1} alt="" />
    {/*     } */}
    </div>


    <button className='button' onClick={onclick}>{imgTop===true? 'After':'Before'}</button>

    </div>
  )
}
