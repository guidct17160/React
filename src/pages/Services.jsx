import React from 'react'

function Services() {
  return (
    <div className='dark:bg-zinc-800 dark:text-white'>
        <section className='container mx-auto py-20 '>
      <h2 className='text-5xl font-bold'>React Services</h2>

      {/* Service 1 */}
      <div className='bg-sky-100 p-10 my-5 dark:bg-zinc-900  rounded-xl'>
        <h3 className='text-xl font-bold'>1. Custom Website Development</h3>
        <ul className='list-disc ml-5'>
            <li className='my-3'>What It Involves: Build fully custom, responsive websites using ReactJS for businesses, startups, or individuals.</li>
            <li className='my-3'>Details</li>
            <ul className='list-disc ml-5'>
                <li>Create single-page applications (SPAs) with smooth navigation using React Router.</li>
                <li>Use modern UI libraries like Material-UI, Tailwind CSS, or Chakra UI for fast and appealing designs.</li>
                <li>Ensure mobile responsiveness and cross-browser compatibility.</li>
            </ul>
            <li className='my-3'>Why Clients Want It: Businesses need fast, interactive websites to engage users and stand out online.</li>
        </ul>
      </div>
      {/* Service2 */}
      <div className='bg-sky-100 p-10 my-5 dark:bg-zinc-900 rounded-xl'>
        <h3 className='text-xl font-bold'>2. Front-End Development for Existing Projects</h3>
        <ul className='list-disc ml-5'>
            <li className='my-3'>What It Involves: Integrate ReactJS into existing websites or applications to enhance the front-end experience.</li>
            <li className='my-3'>Details</li>
            <ul className='list-disc ml-5'>
                <li>Refactor legacy code (e.g., jQuery or plain JavaScript) into React components.</li>
                <li>Connect React front-ends to existing backends (e.g., REST APIs or GraphQL).</li>
                <li>Optimize performance by leveraging React’s Virtual DOM.</li>
            </ul>
            <li className='my-3'>Why Clients Want It: Many companies have older systems they want to modernize without rebuilding everything.</li>
        </ul>
      </div>
      {/* Service 3 */}
      <div className='bg-sky-100 p-10 my-5 dark:bg-zinc-900 rounded-xl'>
        <h3 className='text-xl font-bold'>3. Single-Page Application (SPA) Development</h3>
        <ul className='list-disc ml-5'>
            <li className='my-3'>What It Involves: Develop SPAs that load quickly and provide a seamless user experience without full page reloads.</li>
            <li className='my-3'>Details</li>
            <ul className='list-disc ml-5'>
                <li>Use state management tools like Redux or Context API for complex applications.</li>
                <li>Implement features like real-time updates (e.g., chat apps or dashboards) with WebSockets or APIs.</li>
                <li>Add offline capabilities with Progressive Web App (PWA) techniques.</li>
            </ul>
            <li className='my-3'>Why Clients Want It: SPAs are popular for e-commerce, dashboards, and SaaS products due to their speed and interactivity.</li>
        </ul>
      </div>
      {/* service 4 */}
      <div className='bg-sky-100 p-10 my-5 dark:bg-zinc-900  rounded-xl'>
        <h3 className='text-xl font-bold'>4. UI/UX Design and Implementation</h3>
        <ul className='list-disc ml-5'>
            <li className='my-3'>What It Involves: Turn design mockups (e.g., from Figma or Adobe XD) into functional React components.</li>
            <li className='my-3'>Details</li>
            <ul className='list-disc ml-5'>
                <li>Build pixel-perfect, interactive interfaces with animations (e.g., using Framer Motion).</li>
                <li>Offer light/dark mode toggles or other user-friendly features.</li>
                <li>Collaborate with designers or provide basic design suggestions if needed.</li>
            </ul>
            <li className='my-3'>Why Clients Want It: Clients often need developers who can bridge the gap between design and code.</li>
        </ul>
      </div>
      {/* service 5 */}
      <div className='bg-sky-100 p-10 my-5 dark:bg-zinc-900 rounded-xl'>
        <h3 className='text-xl font-bold'>5. API Integration and Data Management</h3>
        <ul className='list-disc ml-5'>
            <li className='my-3'>What It Involves: Connect React applications to APIs for dynamic content and functionality.</li>
            <li className='my-3'>Details</li>
            <ul className='list-disc ml-5'>
                <li>Integrate with RESTful APIs, GraphQL, or third-party services (e.g., Stripe, Firebase, or Google Maps).</li>
                <li>Handle authentication (e.g., JWT, OAuth) and user data securely.</li>
                <li>Fetch and display real-time data efficiently.</li>
            </ul>
            <li className='my-3'>Why Clients Want It: Most modern apps rely on external data sources, from payment gateways to content management systems.</li>
        </ul>
      </div>
      {/* service 6 */}
      <div className='bg-sky-100 p-10 my-5 dark:bg-zinc-900  rounded-xl'>
        <h3 className='text-xl font-bold'>6. Maintenance and Optimization</h3>
        <ul className='list-disc ml-5'>
            <li className='my-3'>What It Involves: Provide ongoing support, bug fixes, and performance improvements for React-based projects.</li>
            <li className='my-3'>Details</li>
            <ul className='list-disc ml-5'>
                <li>Optimize load times with lazy loading, code splitting, or memoization.</li>
                <li>Update dependencies and ensure compatibility with new React versions.</li>
                <li>Debug and resolve issues reported by clients or users.</li>
            </ul>
            <li className='my-3'>Why Clients Want It: Clients need reliable support to keep their applications running smoothly after launch.</li>
        </ul>
      </div>
      
    </section>
    </div>
    
  )
}

export default Services
