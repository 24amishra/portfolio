   'use client'
   {/* Transition Divider */}
   import Image from "next/image";
   import './globals.css';
   import Edu from "./education/page";
   import Proj from "./projects/page.js"
   import { Client } from "@vercel/postgres";
   import '@fontsource/inter';
   import { motion, useScroll, useTransform } from "motion/react"
   import Contact from "./Contact";
   import { useRouter } from "next/navigation";
   import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
   import 'react-vertical-timeline-component/style.min.css';
   import { TypeAnimation } from "react-type-animation";
   import Head from 'next/head';
   import { useState, useEffect } from 'react';
   
   export default function Home() {
     const [activeSection, setActiveSection] = useState('about');
     const { scrollY } = useScroll();
     
     // Parallax effects
     const heroY = useTransform(scrollY, [0, 500], [0, -100]);
     const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
   
     // Navigation scroll detection
     useEffect(() => {
       const handleScroll = () => {
         const sections = ['about', 'skills', 'education', 'projects'];
         const scrollPosition = window.scrollY + 100;
   
         sections.forEach((section) => {
           const element = document.getElementById(section);
           if (element) {
             const { offsetTop, offsetHeight } = element;
             if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
               setActiveSection(section);
             }
           }
         });
       };
   
       window.addEventListener('scroll', handleScroll);
       return () => window.removeEventListener('scroll', handleScroll);
     }, []);
   
     return (
       <>
         <Head>
           <title>Agastya Mishra Portfolio</title>
           <meta name="description" content="Computer Science student at OSU passionate about full-stack development and data science" />
         </Head>
         
         <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
   
   
           {/* Floating Navigation */}
           <motion.nav 
             initial={{ y: -100, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50"
           >
             <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3">
               <div className="flex space-x-8 text-white/90 font-medium">
                 {[
                   { id: 'about', label: 'About', href: '#about' },
                   { id: 'skills', label: 'Skills', href: '#skills' },
                   { id: 'education', label: 'Experience', href: '#education' },
                   { id: 'projects', label: 'Projects', href: '#projects' },
                   { id: 'contact', label: 'Contact', href: '#contact' }
                 ].map((item) => (
                   <a
                     key={item.id}
                     href={item.href}
                     className={`relative px-3 py-2 rounded-full transition-all duration-300 hover:text-white ${
                       activeSection === item.id ? 'text-white' : ''
                     }`}
                   >
                     {activeSection === item.id && (
                       <motion.div
                         layoutId="activeSection"
                         className="absolute inset-0 bg-white/20 rounded-full"
                         transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                       />
                     )}
                     <span className="relative z-10">{item.label}</span>
                   </a>
                 ))}
               </div>
             </div>
           </motion.nav>
   
           {/* Hero Section */}
           <motion.section
             id="about"
             style={{ y: heroY, opacity: heroOpacity }}
             className="min-h-screen flex items-center justify-center relative px-4"
           >
             <div className="text-center space-y-8 max-w-4xl">
               {/* Animated Title */}
               <motion.div
                 initial={{ opacity: 0, y: 50 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 1, delay: 0.5 }}
                 className="space-y-4"
               >
                 <h1 className="text-4xl md:text-6xl font-bold text-white font-inter">
                   <TypeAnimation
                     sequence={[
                       "My name is Agastya Mishra.", 
                       2000, 
                      
                     ]}
                     speed={50}
                     repeat={Infinity}
                   />
                 </h1>
                 <p className="text-xl md:text-2xl text-gray-400">
                   Computer Science & Engineering Student
                 </p>
               </motion.div>
   
               {/* Profile Image with Glow Effect */}
               <motion.div
                 initial={{ opacity: 0, scale: 0.5 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 0.8, delay: 0.8 }}
                 className="relative"
               >
                 <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-500 rounded-full blur-lg opacity-50 scale-110"></div>
                 <Image
                   src="/headshot.jpeg"
                   alt="Agastya Mishra"
                   width={200}
                   height={200}
                   className="relative rounded-full border-4 border-white/30 shadow-2xl mx-auto"
                   priority
                 />
               </motion.div>
   
               {/* Bio */}
               <motion.p
                 initial={{ opacity: 0, y: 30 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8, delay: 1.2 }}
                 className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
               >
                 Freshman at The Ohio State University, passionate about full-stack development, 
                 data science, and building practical applications that make a difference.
               </motion.p>
   
               {/* Social Links with Hover Effects */}
               <motion.div
                 initial={{ opacity: 0, y: 30 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8, delay: 1.5 }}
                 className="flex justify-center space-x-6"
               >
                 {[
                   { href: "https://linkedin.com/in/agastya-mishra-745a38296/", src: "/4-1-removebg-preview.png", alt: "LinkedIn" },
                   { href: "https://music.youtube.com/playlist?list=PLXf6D_gSAq1FyMEbszuTAxY2nKol31DsK&si=mXgIubfzqVkz7T9H", src: "/Youtube_Music_icon.svg-removebg-preview.png", alt: "YouTube Music" },
                   { href: "https://github.com/24amishra", src: "/git.png", alt: "GitHub" }
                 ].map((social, index) => (
                   <motion.a
                     key={index}
                     href={social.href}
                     whileHover={{ scale: 1.2, rotate: 5 }}
                     whileTap={{ scale: 0.9 }}
                     className="bg-white/10 p-3 rounded-full backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
                   >
                     <Image
                       src={social.src}
                       alt={social.alt}
                       width={40}
                       height={40}
                       className="opacity-90 hover:opacity-100"
                     />
                   </motion.a>
                 ))}
               </motion.div>
   
               {/* Scroll Indicator */}
               <motion.div
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ duration: 1, delay: 2 }}
                 className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
               >
                 <motion.div
                   animate={{ y: [0, 10, 0] }}
                   transition={{ duration: 2, repeat: Infinity }}
                   className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
                 >
                   <motion.div
                     animate={{ y: [0, 12, 0] }}
                     transition={{ duration: 2, repeat: Infinity }}
                     className="w-1 h-3 bg-white/70 rounded-full mt-2"
                   />
                 </motion.div>
               </motion.div>
             </div>
           </motion.section>
   
           {/* About Section with Glassmorphism */}
           <motion.section
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             transition={{ duration: 1 }}
             viewport={{ once: true }}
             className="py-20 px-4 relative"
           >
             <div className="max-w-4xl mx-auto">
               <motion.div
                 initial={{ y: 50, opacity: 0 }}
                 whileInView={{ y: 0, opacity: 1 }}
                 transition={{ duration: 0.8 }}
                 viewport={{ once: true }}
                 className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl"
               >
                 <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
                   About Me
                 </h2>
                 <div className="grid md:grid-cols-2 gap-8 items-center">
                   <motion.div
                     initial={{ x: -50, opacity: 0 }}
                     whileInView={{ x: 0, opacity: 1 }}
                     transition={{ duration: 0.8, delay: 0.2 }}
                     viewport={{ once: true }}
                     className="space-y-6"
                   >
                     <p className="text-lg text-gray-200 leading-relaxed">
                       I began my programming journey in High School with Python and R, 
                       spending countless hours exploring NBA datasets with Pandas and NumPy. 
                       This sparked my passion for data science and practical problem-solving.
                     </p>
                     <p className="text-lg text-gray-200 leading-relaxed">
                       Today, I'm expanding into web development and machine learning, 
                       always seeking to build applications that make a real impact.
                     </p>
                   </motion.div>
                   <motion.div
                     initial={{ x: 50, opacity: 0 }}
                     whileInView={{ x: 0, opacity: 1 }}
                     transition={{ duration: 0.8, delay: 0.4 }}
                     viewport={{ once: true }}
                     className="space-y-4"
                   >
                     <div className="bg-gradient-to-r from-gray-700/30 to-gray-600/30 p-4 rounded-xl">
                       <h3 className="text-white font-semibold mb-2">Interests</h3>
                       <p className="text-gray-300">Full-stack development, Data Science, Machine Learning</p>
                     </div>
                     <div className="bg-gradient-to-r from-gray-600/30 to-gray-500/30 p-4 rounded-xl">
                       <h3 className="text-white font-semibold mb-2">Hobbies</h3>
                       <p className="text-gray-300">Working out, Football, Logging movies on LetterBoxd</p>
                     </div>
                   </motion.div>
                 </div>
               </motion.div>
             </div>
           </motion.section>
   
           {/* Skills Section */}
           <motion.section
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             transition={{ duration: 1 }}
             viewport={{ once: true }}
             className="py-20 px-4 relative"
           >
             <div className="max-w-6xl mx-auto">
               <motion.div
                 initial={{ y: 50, opacity: 0 }}
                 whileInView={{ y: 0, opacity: 1 }}
                 transition={{ duration: 0.8 }}
                 viewport={{ once: true }}
                 className="text-center mb-12"
               >
                 <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Skills & Technologies</h2>
                 <div className="w-24 h-1 bg-gradient-to-r from-gray-400 to-gray-300 mx-auto rounded-full"></div>
               </motion.div>
               
               <div className="grid md:grid-cols-3 gap-8">
                 {/* Programming Languages */}
                 <motion.div
                   initial={{ x: -50, opacity: 0 }}
                   whileInView={{ x: 0, opacity: 1 }}
                   transition={{ duration: 0.8, delay: 0.1 }}
                   viewport={{ once: true }}
                   className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                 >
                   <h3 className="text-2xl font-bold text-white mb-6 text-center">Programming</h3>
                   <div className="space-y-4">
                     {['Python', 'JavaScript', 'Java', 'C', 'CSS', 'R', 'SQL', 'MATLAB'].map((skill, index) => (
                       <motion.div
                         key={skill}
                         initial={{ opacity: 0, x: -20 }}
                         whileInView={{ opacity: 1, x: 0 }}
                         transition={{ duration: 0.5, delay: 0.1 * index }}
                         viewport={{ once: true }}
                         className="flex items-center space-x-3 bg-gray-800/50 rounded-lg p-3 hover:bg-gray-700/50 transition-colors duration-200"
                       >
                         <div className="w-2 h-2 bg-gradient-to-r from-gray-400 to-gray-300 rounded-full"></div>
                         <span className="text-gray-200 font-medium">{skill}</span>
                       </motion.div>
                     ))}
                   </div>
                 </motion.div>
   
                 {/* Frameworks */}
                 <motion.div
                   initial={{ y: 50, opacity: 0 }}
                   whileInView={{ y: 0, opacity: 1 }}
                   transition={{ duration: 0.8, delay: 0.2 }}
                   viewport={{ once: true }}
                   className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                 >
                   <h3 className="text-2xl font-bold text-white mb-6 text-center">Frameworks</h3>
                   <div className="space-y-4">
                     {['Next.js', 'Spring Boot', 'Pandas', 'NumPy', 'scikit-learn', 'Node.js', 'React'].map((framework, index) => (
                       <motion.div
                         key={framework}
                         initial={{ opacity: 0, x: -20 }}
                         whileInView={{ opacity: 1, x: 0 }}
                         transition={{ duration: 0.5, delay: 0.1 * index }}
                         viewport={{ once: true }}
                         className="flex items-center space-x-3 bg-gray-800/50 rounded-lg p-3 hover:bg-gray-700/50 transition-colors duration-200"
                       >
                         <div className="w-2 h-2 bg-gradient-to-r from-gray-400 to-gray-300 rounded-full"></div>
                         <span className="text-gray-200 font-medium">{framework}</span>
                       </motion.div>
                     ))}
                   </div>
                 </motion.div>
   
                 {/* Tools */}
                 <motion.div
                   initial={{ x: 50, opacity: 0 }}
                   whileInView={{ x: 0, opacity: 1 }}
                   transition={{ duration: 0.8, delay: 0.3 }}
                   viewport={{ once: true }}
                   className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                 >
                   <h3 className="text-2xl font-bold text-white mb-6 text-center">Tools</h3>
                   <div className="space-y-4">
                     {['Git', 'Jenkins', 'Apache Kafka', 'AWS', 'MongoDB', 'PostgreSQL', 'Agile methodology'].map((tool, index) => (
                       <motion.div
                         key={tool}
                         initial={{ opacity: 0, x: -20 }}
                         whileInView={{ opacity: 1, x: 0 }}
                         transition={{ duration: 0.5, delay: 0.1 * index }}
                         viewport={{ once: true }}
                         className="flex items-center space-x-3 bg-gray-800/50 rounded-lg p-3 hover:bg-gray-700/50 transition-colors duration-200"
                       >
                         <div className="w-2 h-2 bg-gradient-to-r from-gray-400 to-gray-300 rounded-full"></div>
                         <span className="text-gray-200 font-medium">{tool}</span>
                       </motion.div>
                     ))}
                   </div>
                 </motion.div>
               </div>
             </div>
           </motion.section>
           <div className="relative h-20">
             <svg className="absolute bottom-0 w-full h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
               <path 
                 d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                 className="fill-slate-800/50"
               />
             </svg>
           </div>
   
           {/* Education Section */}
           <section id="education" className="bg-black/50 py-20">
             <motion.div
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
               viewport={{ once: true }}
               className="text-center mb-12"
             >
               <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Experience</h2>
               <div className="w-24 h-1 bg-gradient-to-r from-gray-400 to-gray-300 mx-auto rounded-full"></div>
             </motion.div>
             <Edu />
           </section>
   
           {/* Projects Section */}
           <section id="projects" className="py-20">
             <motion.div
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
               viewport={{ once: true }}
               className="text-center mb-12"
             >
               <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Projects</h2>
               <div className="w-24 h-1 bg-gradient-to-r from-gray-500 to-gray-400 mx-auto rounded-full"></div>
             </motion.div>
             <Proj />
           </section>
   
           {/* Contact Section */}
           <motion.section
             id="contact"
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             transition={{ duration: 1 }}
             viewport={{ once: true }}
             className="py-20 px-4"
           >
             <div className="max-w-2xl mx-auto text-center">
               <motion.div
                 initial={{ scale: 0.8, opacity: 0 }}
                 whileInView={{ scale: 1, opacity: 1 }}
                 transition={{ duration: 0.8 }}
                 viewport={{ once: true }}
                 className="bg-gradient-to-r from-gray-700/30 to-gray-600/30 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl"
               >
                 <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Let's Connect!</h2>
                 <p className="text-xl text-gray-200 mb-6">Have questions or want to collaborate?</p>
                 <motion.a
                   href="mailto:mishra.360@osu.edu"
                   whileHover={{ scale: 1.05 }}
                   whileTap={{ scale: 0.95 }}
                   className="inline-block bg-gradient-to-r from-gray-600 to-gray-700 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300"
                 >
                   mishra.360@osu.edu
                 </motion.a>
               </motion.div>
             </div>
           </motion.section>
         </div>
   
         <style jsx>{`
           /* Custom styles */
         `}</style>
       </>
     );
   }