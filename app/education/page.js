
'use client'
import { motion } from "motion/react"

import React, { useActionState } from 'react';
import { useState } from 'react';
import Example from '../Modal';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Edu = () =>{
const [popup,setPopup] = useState(false);
const [state,setState ] = useState(0)



return(


<div className='bg-hsl(230, 85.40%, 8.00%)'>
  
<div className = "topnav text-lg">

<a className = "home" href = "/">About me</a>
<a href = "/education"> Experience</a>
<a href = "/projects"> Projects</a>
<a href = "/"> Contact me</a>







</div>

<div className="Edu">
  <header className='text-center text-5xl font-inter pt-8 underline decoration-solid mb-10'>
    Experiences
  </header>
 

  <section className="text-white" id='experience'>
    

    {/* Flex container for side-by-side layout */}
    <VerticalTimeline>
    
    <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgba(67, 163, 193, 0.38)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date=" Summer 2025"
   
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={
      <img 
        src="check.png" 
        alt="custom icon" 
        className="w-full h-full object-cover rounded-full" 
      />
    }  >    <h4 className=" text-white vertical-timeline-element-title">Risk/Fraud Tech Intern @ Huntington National Bank</h4>


  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="December 2025-Present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentStyle={{ background: 'rgba(67, 163, 193, 0.38)', color: '#fff' }}

    icon={
      <img 
        src="re.png" 
        alt="custom icon" 
        className="w-full h-full object-cover rounded-full" 
      />}

  >
  
    <h3 className=" text-white vertical-timeline-element-title">Undergraduate Research Assistant</h3>
    <h4 className="text-white vertical-timeline-element-subtitle">The Ohio State University</h4>
    <p>
     Working with Dr. Sachin Kumar on exploring hypernetwork architecture in practical applications. Also working under the LIFESTYLE lab in accordance with Dr. Benzo.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
      contentStyle={{ background: 'rgba(67, 163, 193, 0.38)', color: '#fff' }}
      icon={
        <img 
          src="club.png" 
          alt="custom icon" 
          className="w-full h-full object-cover rounded-full" 
        />}
  
    className="vertical-timeline-element--work"
    
    date="November 2024-Present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  ><button> </button>

<h3 className=" text-white vertical-timeline-element-title">EBoard member @ AI Club and Big Data Analytics Association</h3>
    <h4 className="text-white vertical-timeline-element-subtitle">The Ohio State University</h4>
   
<p>Serving as Technology Comittee Member of AI Club and Web Liason at BDAA. Responsible for helping website maintainence, tutoring fellow students on topics including machine learning fundamentals, Python tools, and real-world applications., and organizing project meetings for both clubs.</p>

    
</VerticalTimelineElement>





    </VerticalTimeline>
    <div className='mt-10 flex justify-end container mx-auto items-center flex-row gap-10'>

    

    </div>

    {/* Descriptions */}
   
  </section>
  </div>
</div>




);
    
}
export default Edu;