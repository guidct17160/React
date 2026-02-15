import React from 'react'
import reactLogoCTA from '/img/react-cta-logo.png'

function CTA() {
  return (
    <section className='flex justify-center text-center pb-20 dark:bg-zinc-800 dark:text-white'>
      <div>
        <img src={reactLogoCTA} alt=""className='mx-auto' />
        <h3 className='text-4xl font-bold my-3'>Welcome to the React community</h3>
        <p>You’re not alone. Two million developers from all over the world visit <br />
        the React docs every month. React is something that people and <br />
        teams can agree on.</p>
        <a href="#" className='dark:bg-white bg-sky-300 text-black px-6 py-2 rounded-full inline-block mt-3'>Get Started </a>
      </div>
    </section>
  )
}

export default CTA
