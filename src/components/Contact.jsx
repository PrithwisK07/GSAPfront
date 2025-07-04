import React from 'react'

const Contact = () => {
    return (
        <section className='w-full h-[120vh] flex flex-col items-center justify-center overflow-hidden relative'>
            <img src="../../public/images/slider-right-leaf.png" alt="slider-right-leaf" id='slider-right-leaf' className='absolute right-0 w-[19%] -top-25' />

            <section id="contact">
                <div className="font-modern-negra text-8xl">
                    <h1>Where to Find Us</h1>
                </div>

                <div className="contact-body">
                    <span>
                        <p className='text-xl'>Visit Our Bar</p>
                        <p className='text-3xl'>456, Raq Blvd. #404, Los Angeles, CA 90210</p>
                    </span>

                    <span>
                        <p className='text-xl'>Contact Us</p>
                        <p className='text-3xl'>(555) 987-6543</p>
                        <p className='text-3xl'>hello@jsmcocktail.com</p>
                    </span>

                    <span>
                        <p className='text-xl'>Open Every Day</p>
                        <p className='text-3xl'>Mon–Thu : 11:00am – 12am</p>
                        <p className='text-3xl'>Fri : 11:00am – 2am</p>
                        <p className='text-3xl'>Sat : 9:00am – 2am</p>
                        <p className='text-3xl'>Sun : 9:00am – 1am</p>
                    </span>
                </div>

                <div className="text-xl flex flex-col gap-2">
                    <p>Socials</p>

                    <span className='flex gap-5'>
                        <img src="../../public/images/insta.png" alt="insta" className='w-auto' />
                        <img src="../../public/images/x.png" alt="x" className='w-auto' />
                    </span>
                </div>
            </section>
            <img src="../../public/images/slider-left-leaf.png" alt="slider-left-leaf" id='slider-left-leaf' className='absolute w-[19%] -bottom-0 left-0' />
        </section>
    )
}

export default Contact