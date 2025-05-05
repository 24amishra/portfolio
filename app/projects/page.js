
'use client'
import React from "react";
import {motion} from "motion/react"

import { useState } from "react";
import Example from "../Modal";

const Proj = () =>{


    const [popup,setPopup] = useState(false);
    const [state,setState ] = useState(0)
    return(
      <div className="Edu">
         <div className = "topnav text-lg">

<a className = "home" href = "/">About me</a>
<a href = "/education"> Experience</a>
<a href = "/projects"> Projects</a>
<a href = "/"> Contact me</a>







</div>

    <div className="mt-10 text-center text-5xl font-inter pt-8 mb-10">
    Projects
  </div>
  
  <div className="flex flex-row flex-wrap justify-center gap-6 Edu px-4">
  <section id="projects" className="flex flex-wrap justify-center gap-6 w-full max-w-6xl mx-auto">
  {/* Project 1 */}
  <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true ,amount:0.5}}
   className="w-full sm:w-[45%] lg:w-[30%] bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">    <h3 className="text-2xl font-semibold mb-2 dark:text-white">National Parks Data Analysis</h3>
       <p className="text-gray-700 dark:text-gray-300 font-bold"> My favorite design.</p>

    <p className="text-gray-700 dark:text-gray-300 mb-4">
 2nd Place Finisher at 2025 BTAA DataViz Championship from 200+ submissions across 14 colleges. Utilized Streamlit and Dash to create interactive web app analyzing National Parks Database.
    Trained Meta’s Prophet Model to plot predictive regression on the future of the Parks System visitor rate.
    </p>
    <img src = 'graph.png'></img>

    <a href="https://24amishra-datavizpt2-streamlittest-faij14.streamlit.app/" className="text-blue-600 dark:text-blue-400 underline">View Project →</a>
  </motion.div>

  {/* Project 2 */}
  <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.2 }}
  viewport={{ once: true,amount:0.5 }}
   className="w-full sm:w-[45%] lg:w-[30%] bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">    <h3 className="text-2xl font-semibold mb-2 dark:text-white">LiftSense AI Exercise Assistant</h3>
       <p className="text-gray-700 dark:text-gray-300 font-bold"> My favorite group project.</p>

    <p className="text-gray-700 dark:text-gray-300 mb-4">
    Developed Full Stack Web App to help users evaluate their weight-lifting technique.
Utilized Tailwind and React to create intuitive UI for inputting lift videos for users.
Utilized OpenCV and Google MediaPipe to calculate body angles for use in classification.
Trained Gradient Boosting Classifier to determine lifting errors from input video, ending with 90% accuracy across
all technique categories tested.
    </p>
    <a href="https://github.com/24amishra/Hack-AI" className="text-blue-600 dark:text-blue-400 underline">View Project →</a>
  </motion.div>

  {/* Project 3 */}
  <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.6 }}
  viewport={{ once: true ,amount:0.5}}
   className="w-full sm:w-[45%] lg:w-[30%] bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">    <h3 className="text-2xl font-semibold mb-2 dark:text-white">AutoEDA Data Analyzer</h3>
       <p className="text-gray-700 dark:text-gray-300 font-bold"> My latest work.</p>
    <p className="text-gray-700 dark:text-gray-300 mb-4">
  
    Developed a full-stack web application that automates Exploratory Data Analysis (EDA) on CSV files, enabling non-technical users to efficiently generate visual insights without writing code. Integrated Pandas, Seaborn, and Matplotlib in the backend to produce statistical summaries and dynamic plots, including correlation heatmaps and distribution graphs.
 Built a responsive Next.js front end with dynamic rendering of uploaded datasets and charts using React and Tailwind CSS.   </p>
    <a href="#" className="text-blue-600 dark:text-blue-400 underline">View Project →</a>
  </motion.div>

  {/* Project 3 */}
  <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
   className="w-full sm:w-[45%] lg:w-[30%] bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
    <h3 className="text-2xl font-semibold mb-2 dark:text-white">DentVision Dental Diagnoser</h3>
    <p className="text-gray-700 dark:text-gray-300 font-bold"> My first hackathon.</p>

    <p className="text-gray-700 dark:text-gray-300 mb-4"> 
    Created full stack ML driven prediction app to determine the presence of disease in dental images.Trained a CNN model with an accuracy score 0f 80% using Pytorch and data collected from Kaggle. Utilized React.js to create interactive UI that displayed prediction result and probability determined by Neural
Network.Provided users a diagnosis in under one second through API calls from Flask back-end server   </p>
    <a href="https://docs.google.com/presentation/d/1GIzP1zOBIpmnsZu9KoGO29hYjR9KgrXse3k0AWMn3Ik/edit?usp=sharing" className="text-blue-600 dark:text-blue-400 underline">View Project →</a>
  </motion.div>
</section>

  </div>
  </div>
    );


}
export default Proj;
