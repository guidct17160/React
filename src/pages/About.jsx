import React from 'react'
import aboutIcon01 from '/img/about/01-about-icon.png'
import aboutIcon02 from '/img/about/02-about-icon.png'
import aboutIcon03 from '/img/about/03-about-icon.png'
import aboutIcon04 from '/img/about/04-about-icon.png'
import aboutIcon05 from '/img/about/05-about-icon.png'
import aboutIcon06 from '/img/about/06-about-icon.png'
import reactInstallCommandImg from '/img/react-install-command.png'
import CTA from '../components/CTA'

function About() {
    return (
        <>
            {/* section 1 */}
            <section className='dark:bg-zinc-800 dark:text-white'>
                <div className='flex justify-center items-center text-center'>
                    <div className='py-20'>
                        <h2 className='text-6xl font-bold'>About React</h2>
                        <p className='text-4xl my-5'>The library for web and native <br />
                            user interfaces</p>
                    </div>
                </div>
            </section>
            {/* section 2 */}
            <section className='bg-sky-300 dark:bg-zinc-900 dark:text-white'>
                <div className='flex justify-center items-center text-center'>
                    <div className='w-[1000px] py-10'>
                        <h3 className='text-4xl font-bold'>What is ReactJS?</h3>
                        <p className='text-xl my-5'>ReactJS (commonly referred to as React) is an open-source JavaScript library developed by Facebook in 2013. It’s designed for building user interfaces (UI), particularly for single-page applications (SPAs) where fast and interactive experiences are essential. Unlike a full framework, React focuses solely on the "view" layer of an application, giving developers flexibility to pair it with other tools or libraries.</p>
                    </div>
                </div>
            </section>

            {/* section 3 */}
            <section className='dark:bg-zinc-800 dark:text-white'>
                <div className='flex justify-center text-center items-center'>
                    <div className='w-[1000px] py-10'>
                        <h3 className='text-4xl font-bold'>Purpose of ReactJS</h3>
                        <p className='text-xl my-5'>React was created to simplify the process of building dynamic and reusable UI components. Its primary goal is to make it easier to manage complex interfaces by breaking them into smaller, self-contained pieces (components) that can update efficiently when data changes. It’s widely used for web development and can also power mobile apps via React Native.</p>
                    </div>
                </div>
            </section>

            {/* section 4 */}
            <div className='dark:bg-zinc-800 dark:text-white'>
                <section className='container mx-auto text-center py-10'>
                <h3 className='text-4xl font-bold'>Key Features of ReactJS</h3>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-center justify-items-center mt-10 items-stretch'>
                    <div className='p-10 border-5 border-sky-300 dark:border-white rounded-3xl'>
                        <img src={aboutIcon01} alt="" className='mx-auto' />
                        <h4 className='my-3 text-xl font-bold'>Component-Based Design</h4>
                        <p>
                            React allows developers to create reusable UI components (e.g., buttons, forms, or navigation bars) that can be combined to build complex interfaces. This modular approach improves code organization and scalability.
                        </p>
                    </div>
                    <div className='p-10 border-5 border-sky-300 dark:border-white rounded-3xl'>
                        <img src={aboutIcon02} alt="" className='mx-auto' />
                        <h4 className='my-3 text-xl font-bold'>Virtual DOM</h4>
                        <p>
                            React uses a Virtual DOM to optimize performance. Instead of updating the entire webpage when something changes, it compares the Virtual DOM with the real DOM and updates only the necessary parts, making apps faster and more efficient.
                        </p>
                    </div>
                    <div className='p-10 border-5 border-sky-300 dark:border-white rounded-3xl'>
                        <img src={aboutIcon03} alt="" className='mx-auto' />
                        <h4 className='my-3 text-xl font-bold'>JSX (JavaScript XML)</h4>
                        <p>
                            React uses JSX, a syntax extension that lets you write HTML-like code within JavaScript. This makes it easier to visualize and build UI structures while leveraging JavaScript’s power.                </p>
                    </div>
                    <div className='p-10 border-5 border-sky-300 dark:border-white rounded-3xl'>
                        <img src={aboutIcon04} alt="" className='mx-auto' />
                        <h4 className='my-3 text-xl font-bold'>Unidirectional Data Flow</h4>
                        <p>
                            Data in React flows in one direction (from parent to child components), making it predictable and easier to debug compared to two-way data binding.                </p>
                    </div>
                    <div className='p-10 border-5 border-sky-300 dark:border-white rounded-3xl'>
                        <img src={aboutIcon05} alt="" className='mx-auto' />
                        <h4 className='my-3 text-xl font-bold'>State and Props</h4>
                        <p>
                            State: Manages dynamic data within a component. Props: Passes data from one component to another, keeping components reusable and independent.                </p>
                    </div>
                    <div className='p-10 border-5 border-sky-300 dark:border-white rounded-3xl'>
                        <img src={aboutIcon06} alt="" className='mx-auto' />
                        <h4 className='my-3 text-xl font-bold'>Rich Ecosystem</h4>
                        <p>
                            React integrates seamlessly with tools like Redux (for state management), React Router (for navigation), and frameworks like Next.js (for server-side rendering), enhancing its capabilities.                </p>
                    </div>

                </div>
            </section>
            </div>
            
            
            {/* section 5 */}
            <section className='bg-sky-300 dark:bg-zinc-900 dark:text-white'>
                <div className='flex justify-center items-center text-center'>
                    <div className='py-10'>
                        <h3 className='text-4xl font-bold'>Getting Started</h3>
                        <p className='text-xl my-5'>
                            To start with React, you need Node.js installed. <br />
                            Then, create a new project using this command.

                        </p>
                        <img src={reactInstallCommandImg} className='mx-auto my-10' alt="" />
                    </div>
                </div>
            </section>
            {/* section 6 */}
            <CTA/>
        </>
    )
}

export default About
