
'use client'
import Image from "next/image";
import './globals.css';
import Edu from "./education/page";
import Proj from "./projects/page.js"
import { Client } from "@vercel/postgres";
import '@fontsource/inter';
import {motion} from "motion/react"
import Contact from "./Contact";
import { useRouter } from "next/navigation";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { TypeAnimation } from "react-type-animation";

//add viewport detector to trigger color changes/animations on entry/depart
//lazy load images
import Head from 'next/head';



export default function Home() {
  
  return (

   
 
    <div className='App-Header   space-y-4'>
      <title>Agastya Mishra Portfolio</title>
    <div className = "topnav text-lg">

<a className = "home" href = "/">About me</a>
<a href = "/education"> Experience</a>
<a href = "/projects"> Projects</a>
<a href = "/"> Contact me</a>









</div>




<div>
<motion.div
 initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="text-lg"
  
  >
    <header className='App-Header  '>
<section id = 'intro'> 






<div className= 'text-2xl font-inter p-8 text-center font-bold'>

<TypeAnimation
      sequence={["Hey!", 2000, "My name is Agastya.", 2000]}
      speed={50}
      repeat={Infinity}
    />

</div>




<div className = 'text-xl font- mb-8 font-inter'>

</div>
  <div className="flex">
  <div className="mx-auto ">
<img src = 'headshot.jpeg ' className="rounded-full mb-4"  width = '200' height ='200' loading = 'lazy'>
  
  </img>

   
   
  
  
   </div>


   




   
   
  
   </div>

   <div className=' text-center text-lg leading-loose w-96  pl-2  container mb-10  mt-20 rounded-lg mx-auto font-inter'>
<p> I'm a freshman Computer Science and Engineering student at The Ohio State University, pursuing a minor in Economics.
</p>
<div className="flex h-14 justify-center h-screen mr-10 max-h-16 ">

<div className="flex items-center space-x-4">
  <a className="font-bold" href="https://linkedin.com/in/agastya-mishra-745a38296/" loading="lazy">
    <img className="mr-10 animate-pulse mt-3" src="4-1-removebg-preview.png" width="75" height="75" />
  </a>

  <a className="font-bold" href="https://music.youtube.com/playlist?list=PLXf6D_gSAq1FyMEbszuTAxY2nKol31DsK&si=mXgIubfzqVkz7T9H">
    <img className="mr-5 mt-5 animate-pulse" src="Youtube_Music_icon.svg-removebg-preview.png" width="50" height="50" loading="lazy" />
  </a>

  <a className="font-bold" href="https://github.com/24amishra">
    <img src="git.png" className="ml-5 mt-4 animate-pulse" width="50" height="50" loading="lazy" />
  </a>
</div>

</div>

<h3 className=" mt-10 text-4xl font-inter p-8 text-center underline  font-bold">About me</h3>

<motion.p
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="text-lg"
  
  >
    


 
I began my programming journey in High School with an introduction to Python and R. I spent hours messing around with NBA datasets, using Pandas and NumPy to power my exploration. Today, I am continuing to expand my experience by venturing into the world of web development and ML. I am passionate about full stack development, data science, and building practical applications.    </motion.p>
  

  <br/>
  <p className="font-bold">In my free time, I love working out, watching football, and logging movies on Letterboxd.  </p>

   </div>
   <p className=" text-xl font-bold">
       Questions?

</p>


<p className="text-xl mt-10"> Contact me at mishra.360 @ osu.edu</p>



   <div className="font-inter mt-12 ">
   
</div>



  
  
</section>
</header>
</motion.div>
</div>


















</div>

  );
}
