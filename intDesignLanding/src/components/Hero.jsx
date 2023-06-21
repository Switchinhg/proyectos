
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
        <div className='texto white'>
            <p>Transformamos espacios con elegancia</p>
        </div>

    <div className='imgBeforAfter'>
      <div className={imgTop===true?'all rotate small bg front abs':'all'}>
        <p className='text'>Before</p>
            <img className='small' src={imgBefore1} alt="" />
      </div>
      <div className={imgTop===false?'all rotate small bg front abs':'all'}>
        <p className='text' >After</p>
            <img className='small' src={imgAfter1} alt="" />
      </div>
      
    </div>


    <button className='button' onClick={onclick}>{imgTop===true? 'See after':'See before'}</button>

    </div>
  )
}
