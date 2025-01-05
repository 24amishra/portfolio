
'use client'
import { motion } from "motion/react"

import React, { useActionState } from 'react';
import { useState } from 'react';
import Example from './Modal';

const Edu = () =>{
const [popup,setPopup] = useState(false);
const [state,setState ] = useState(0)






return(
        
    <div className='edu bg-customColor'>
        <header className =  ' text-center  text-5xl font-inter pt-8 underline decoration-solid mb-10'  >
Experiences

</header>

        <section id = 'experience'>

<div  className=' flex justify-center items-center h-screen flex-col'>

<button
  onClick={() => {
    setPopup(true);  
    setState(1);     
  }}className='mt-4 '>     

        <Example isVisible={popup} onClose = {() => setPopup(false)} whichState = {state} />

        
        
        
     
        <img src = '/h.png' width = '200' height = '200' className='hover:opacity-50'  loading = 'lazy'/>


 

</button>




<label >2025</label>



<div className='text-center mt-4 text-sm pb-8' >
        <section id = 'hunt'>
<p>
        Incoming Tech Intern at Huntington National Bank
</p>





</section>
</div>

<button
  onClick={() => {
    setPopup(true);  
    setState(2);     
  }}className='mt-4 '>




<Example isVisible={popup} onClose = {() => setPopup(false)} whichState = {state}/>


<img src = 'bdaa.png' width='300' height = '200' className='hover:opacity-50'  loading = 'lazy'>


</img>
</button>
<label>2024</label>

<div className='text-center  text-sm ' >
        <section id = 'BDAA'>
                
<p>
        Web Liason for Big Data Analytics Association @ OSU
</p>
</section>
</div >


<button
  onClick={() => {
    setPopup(true);  
    setState(3);     
  }}className='mt-4 '>


<img src = 'autodrive.png' width='300' height = '200' className='hover:opacity-50'>

</img>
</button>
<label>2024</label>

<div className='text-center mt-4 text-sm ' >
        <section id = 'autodrive'>
<p>
        Core Perception Algorithm Team member for Buckeye Autodrive
</p>
</section>





















</div>






</div>           










        </section>
        



</div>
)



    
}
export default Edu;