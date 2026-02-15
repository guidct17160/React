import React from 'react'
import BigLogo from '/img/react-big-logo.png'
import client01 from '/img/clients/01-client-logo.png'
import client02 from '/img/clients/02-client-logo.png'
import client03 from '/img/clients/03-client-logo.png'
import client04 from '/img/clients/04-client-logo.png'
import client05 from '/img/clients/05-client-logo.png'
import client06 from '/img/clients/06-client-logo.png'
import editorImg from '/img/editor.png'
import homeIcon01 from '/img/home/01-home-icon.png'
import homeIcon02 from '/img/home/02-home-icon.png'
import homeIcon03 from '/img/home/03-home-icon.png'
import homeIcon04 from '/img/home/04-home-icon.png'
import homeIcon05 from '/img/home/05-home-icon.png'
import homeIcon06 from '/img/home/06-home-icon.png'
import CTA from '../components/CTA'


function Home() {
    return (
        <>
            <div className='dark:bg-zinc-800 dark:text-white'>
                <div className='container mx-auto py-15 px-5'>
                    {/* section 1 */}
                    <section className='flex flex-col md:flex-row justify-between'>
                        <div className='md:w-full flex items-center'>
                            <div>
                                <h1 className='text-6xl font-bold'>React</h1>
                                <h2 className='text-4xl my-5'>The libary for web and native <br /> user interfaces</h2>
                                <a href="#" className='bg-sky-300 dark:bg-white text-black px-6 py-2 rounded-full inline-block mt-3'>Get Started</a>
                            </div>
                        </div>
                        <div className='md:w-full flex justify-center'>
                            <img src={BigLogo} alt="" />
                        </div>
                    </section>

                    {/* section 2 */}
                    <section className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 items-center justify-items-center mt-10'>
                        <img src={client01} width={50} alt="" />
                        <img src={client02} width={50} alt="" />
                        <img src={client03} width={50} alt="" />
                        <img src={client04} width={50} alt="" />
                        <img src={client05} width={50} alt="" />
                        <img src={client06} width={50} alt="" />

                    </section>
                </div>
            </div>



            {/* Section 3 */}
            <section className='bg-sky-300 dark:bg-zinc-900 dark:text-white text-center py-10'>
                <h3 className='text-4xl font-bold'>Create user interfaces from components</h3>
                <p className='my-5 text-xl'>React lets you build user interfaces out of individual pieces called components. <br />
                    Create your own React components like Thumbnail, LikeButton, and Video. Then <br />
                    combine them into entire screens, pages, and apps.</p>
                <img src={editorImg} alt="" className='mx-auto' />
            </section>
            {/* Section 4 */}
            <div className='dark:bg-zinc-800 dark:text-white'>
                <section className='container mx-auto text-center py-10'>
                <h3 className='text-4xl font-bold'>Why we should use ReactJS for website or <br />
                    application development</h3>
                <div className='grid grid-cols1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-center justify-items-center mt-10 items-stretch'>
                    <div className='p-10 border-5 border-sky-300 dark:border-white rounded-3xl'>
                        <img src={homeIcon01} className='mx-auto' alt="" />
                        <h4 className='my-3 text-xl font-bold'>Component-Based Architecture</h4>
                        <p>React utilizes a Virtual DOM, a lightweight copy of the real DOM. When data changes, React calculates only the parts that need updating (diffing) and applies those changes efficiently to the real DOM, resulting in faster rendering compared to direct DOM manipulation.</p>
                    </div>
                    <div className='p-10 border-5 border-sky-300 dark:border-white rounded-3xl'>
                        <img src={homeIcon02} className='mx-auto' alt="" />
                        <h4 className='my-3 text-xl font-bold'>Virtual DOM
                            for High Performance</h4>
                        <p>React utilizes a Virtual DOM, a lightweight copy of the real DOM. When data changes, React calculates only the parts that need updating (diffing) and applies those changes efficiently to the real DOM, resulting in faster rendering compared to direct DOM manipulation.</p>
                    </div>
                    <div className='p-10 border-5 border-sky-300 dark:border-white rounded-3xl'>
                        <img src={homeIcon03} className='mx-auto' alt="" />
                        <h4 className='my-3 text-xl font-bold'>Flexible State Management </h4>
                        <p>React provides tools like useState and useReducer for managing state at the component level. It also supports Context API or Redux for larger projects, enabling smooth data sharing between components.</p>
                    </div>
                    <div className='p-10 border-5 border-sky-300 dark:border-white rounded-3xl'>
                        <img src={homeIcon04} className='mx-auto' alt="" />
                        <h4 className='my-3 text-xl font-bold'>Strong Community
                            and Ecosystem</h4>
                        <p>React has a large developer community and a rich ecosystem of libraries and tools, such as React Router, Material-UI, or Tailwind CSS, which accelerate development. Plus, there’s extensive documentation and online tutorials available.</p>
                    </div>
                    <div className='p-10 border-5 border-sky-300 dark:border-white rounded-3xl'>
                        <img src={homeIcon05} className='mx-auto' alt="" />
                        <h4 className='my-3 text-xl font-bold'>SEO-Friendly with
                            Server-Side Rendering (SSR)</h4>
                        <p>React supports Server-Side Rendering (e.g., via Next.js), making it possible to optimize React-based websites for SEO. This helps search engines index content more effectively.</p>
                    </div>
                    <div className='p-10 border-5 border-sky-300 dark:border-white rounded-3xl'>
                        <img src={homeIcon06} className='mx-auto' alt="" />
                        <h4 className='my-3 text-xl font-bold'>Popularity and
                            Job Market Opportunities</h4>
                        <p>ReactJS is used by leading companies like Facebook, Netflix, and Airbnb, proving its reliability. Developers skilled in React are in high demand, and many companies choose React for new projects.</p>
                    </div>
                </div>
            </section>
            </div>
            

            {/* section 5 */}
            <section className='bg-sky-300 dark:bg-zinc-900 dark:text-white py-20 text-center'>
                <h3 className='text-4xl font-bold'>Use the best from every platform</h3>
                <p className='my-3'>People love web and native apps for different reasons. React lets you build both web apps and <br />
                    native apps using the same skills. It leans upon each platform’s unique strengths to let your <br />
                    interfaces feel just right on every platform.</p>
            </section>

            <CTA />
        </>
    )
}

export default Home
