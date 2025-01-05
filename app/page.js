import Image from "next/image";
import './globals.css';
import Edu from "./Edu";
import Proj from "./Proj"
import { Client } from "@vercel/postgres";
import '@fontsource/inter';

//add viewport detector to trigger color changes/animations on entry/depart
//lazy load images

export default function Home() {
  
  return (

   
 
    <div className='App  bg-customColor space-y-4'>
      
    <div className = "topnav text-lg">

<a className = "home" href = "#home">About me</a>
<a href = "#experience"> Experience</a>
<a href = "#projects"> Projects</a>
<a href = "#contact"> Contact me</a>







</div>




<div>
    <header className='App-Header  '>
<section id = 'intro'> 






<div className= 'text-5xl font-inter p-8  font-bold'>

<h1 className="hover:animate-ping"> Hey!</h1>
</div>




<div className = 'text-xl font- mb-8 font-inter'>
  <h2>My name is Agastya Mishra. I'm a programmer.</h2>
  </div>
  <div className="flex">
  <div className="mx-auto ">
<img src = 'headshot.jpeg ' className="rounded-full mb-4"  width = '200' height ='200' loading = 'lazy'>
  
  </img>

   
   
  
  
   </div>


   




   
   
  
   </div>

   <div className=' text-left text-lg leading-loose w-96  pl-2  container mb-10  mt-20 rounded-lg mx-auto font-inter'>
<p> I'm a freshman Computer Science and Engineering student at The Ohio State University, pursuing a minor in Statistics.
</p>



<p>I began my programming journey in High School with an introduction to Python and R. I spent hours messing around with NBA datasets, using Pandas and NumPy to power my exploration. Today, I am continuing to expand my experience by venturing into the world of web development and ML. I am passionate about full stack development, Data Science, and building practical applications.
  
  </p>
  <br/>
  <p className="font-bold">In my free time, I love working out, watching football, and logging movies on Letterboxd. I also enjoy listening to Drake, Frank Ocean, and Kanye West. </p>

   </div>
   <p className="font-bold text-lg"> Here are some links for more info:</p>

<div className="flex h-14 justify-center h-screen max-h-16 ">



  <a className="font-bold" href = 'https://linkedin.com/in/agastya-mishra-745a38296/'  loading = 'lazy'>
  <img className=" ml-5 animate-pulse mt-3" src = '4-1-removebg-preview.png' width = '100' height = '100'></img>
  </a>

  <a className="font-bold mt-10" href = 'https://music.youtube.com/playlist?list=PLXf6D_gSAq1FyMEbszuTAxY2nKol31DsK&si=mXgIubfzqVkz7T9H'>
<img className=" ml-5 animate-pulse" src = 'Youtube_Music_icon.svg-removebg-preview.png  'width = '50' height = '50'  loading = 'lazy'></img>

  </a>



  <a className="font-bold " href = 'https://github.com/24amishra'>


<img src =' github-removebg-preview.png ' className=" ml-5 mt-9 animate-pulse'" width = '100' height = '100' loading = 'lazy' ></img>
</a>
 
  </div>
   <div className="font-inter mt-12 ">
<p>   Check out some of my work below!
   </p>



   
   </div>
<div className="flex container mx-auto items-center justify-center animate-bounce mt-10">
<img  src = 'dog-removebg-preview.png' width = '50' height = '50 '  loading = 'lazy'></img>


</div>



  
  
</section>
</header>
</div>









<Edu/>




<Proj/>






</div>

  );
}
