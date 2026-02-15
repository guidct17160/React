import React, { useState, useRef } from 'react'

function Contact() {

    const firstnameRef = useRef()
    const lastnameRef = useRef()
    const emailRef = useRef()
    const phoneRef = useRef()
    const addressRef = useRef()
    const messageRef = useRef()

    const [errors, setErrors] = useState({})
    // Regular Expression
    const validateEmail = (email)=>{
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const values = {
            firstName: firstnameRef.current.value.trim(),
            lastName: lastnameRef.current.value.trim(),
            email: emailRef.current.value.trim(),
            phone: phoneRef.current.value.trim(),
            address: addressRef.current.value.trim(),
            message: messageRef.current.value.trim()
        }

        const newErrors = {}
        if (!values.firstName) newErrors.firstName = "First name is required"
        if (!values.lastName) newErrors.lastName = "Last name is required"
        if (!values.email) newErrors.email = "Email required"
        else if (!validateEmail(values.email)) newErrors.email = "Invalid Email Format"
        if (!values.phone) newErrors.phone = "Phone is required"
        if (!values.address) newErrors.address = "Address is required"
        if (!values.message) newErrors.message = "Message is required"

        setErrors(newErrors)

        if (Object.keys(newErrors).length === 0) {
            alert("Form submitted succesfully")
             firstnameRef.current.value = ""
             lastnameRef.current.value = ""
             emailRef.current.value = ""
             phoneRef.current.value = ""
             addressRef.current.value = ""
             messageRef.current.value = ""
        }
    }
    return (
        <div className='dark:bg-zinc-800 dark:text-white '>
            <div className='container mx-auto py-20'>
            <h1 className='text-4xl font-bold text-center mb-10'>Contact</h1>
            <form action="" className='w-[70%] mx-auto space-y-4' onSubmit={handleSubmit}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div>
                        <input ref={firstnameRef} type="text" placeholder='First name' className=' w-full p-3 border border-gray-300 rounded-full outline-none' />
                        {errors.firstName && <p className='text-red-500 text-sm mt-1'>{errors.firstName}</p>}
                    </div>
                    <div>
                        <input ref={lastnameRef} type="text" placeholder='Last name' className='w-full p-3 border border-gray-300 rounded-full outline-none' />
                        {errors.lastName && <p className='text-red-500 text-sm mt-1'>{errors.lastName}</p>}
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div>
                        <input ref={emailRef} type="text" placeholder='Email' className='w-full p-3 border border-gray-300 rounded-full outline-none' />
                        {errors.email && <p className='text-red-500 text-sm mt-1'>{errors.email}</p>}
                    </div>
                    <div>
                        <input ref={phoneRef} type="text" placeholder='Phone' className='w-full p-3 border border-gray-300 rounded-full outline-none' />
                        {errors.phone && <p className='text-red-500 text-sm mt-1'>{errors.phone}</p>}
                    </div>

                </div>
                <div>
                    <input ref={addressRef} type="text" placeholder='Address' className='w-full p-3 border border-gray-300 rounded-full outline-none' />
                    {errors.address && <p className='text-red-500 text-sm mt-1'>{errors.address}</p>}
                </div>
                <div>
                    <textarea ref={messageRef} placeholder='Message' rows={5} className='w-full p-3 border border-gray-300 rounded-xl outline-none resize-none'></textarea>
                    {errors.message && <p className='text-red-500 text-sm mt-1'>{errors.message}</p>}
                </div>

                <button type='submit' className='dark:bg-zinc-900 px-10 py-3 rounded-full bg-sky-300 cursor-pointer'>Submit</button>
            </form>
        </div>
        </div>
    )
}

export default Contact
