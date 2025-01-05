
'use client'
import React from "react";
import { useState } from "react";
import Example from "./Modal";

const Proj = () =>{


    const [popup,setPopup] = useState(false);
    const [state,setState ] = useState(0)
    return(
<div className=""><header className =  ' mt-10 bg-customColor  text-center text-5xl font-inter pt-8  decoration-solid mb-10'>
Projects

</header>

        <div className=" flex edu bg-customColor flex-row justify-center space-x-8 mx-auto">


    <section id ='projects' >
    
    
    
    <button
  onClick={() => {
    setPopup(true);  
    setState(4);     
  }}className='mt-4 '>       

    <div className="container max-w-sm p-4 overflow-hidden border-solid border-2 border-white-500 rounded-lg mb-8 w-auto mr-10">
        
  

        <Example isVisible={popup} onClose = {() => setPopup(false)} whichState = {state} />

        <img src = 'DentVision.png ' width = '200' height='200' className=" hover:opacity-50 ml-10 "  >
  
        </img>
       
        
       
<p className="text-center text-base">DentVision Dental Diagonser</p>
        <p className="italic text-center text-base"> Pytorch, React.js, Flask, Pandas, NumPy </p>
        
        </div>
        </button>
         


        <button onClick={() => {
    setPopup(true);  
    setState(5);     
  }} >
    <div className="container max-w-sm border-solid border-2 border-white-500 rounded-lg mb-8 hover:opacity-50  mr-10">
      
            <Example isVisible={popup} onClose = {() => setPopup(false)} whichState = {state} />

        <img src = 'mm.png' width = '200' height = '200' className="ml-11">
        </img>
        


        
        <p className=" text-center text-base">March Madness Tournament Predictor</p>
        <p className="italic text-center text-base" > Scikit-Learn, Pandas, NumPy</p>

    </div>
    </button>
    <button onClick={() => {
    setPopup(true);  
    setState(6);     
  }}>
    <div className="container border-solid border-2 border-white-500 rounded-lg hover:opacity-50 ml-10">
        
        
   
    <Example isVisible={popup} onClose = {() => setPopup(false)} whichState = {state}/>

        <img  src = 'calendar.avif' width = '200' height = '200' className=" ml-10 ">

            
        </img>
        
        
        <p className="text-center text-base">Food Schedule Creator</p>
        <p className=" text-center  italic text-base"> Node.js, HTML,CSS, Boostrap</p>

    </div>
    </button>
        
        
       


       




       

        </section>
       



        </div>

      








        </div>

       


    )







}
export default Proj;
