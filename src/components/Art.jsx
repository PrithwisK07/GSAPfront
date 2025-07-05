import React from 'react'
import { list1, list2 } from "../constants/config";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Art = () => {

    useGSAP(() => {

        const maskedTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#art',
                start: "top top",
                end: 'bottom center',
                scrub: 1.5,
                pin: true
            }
        });

        maskedTimeline
            .to('.fade', { opacity: 0, stagger: 0.2, ease: 'power1.inOut', })
            .to('.masked-img', { scale: 1.3, maskPosition: 'center', maskSize: '400%', duration: 1, ease: 'power1.inOut ' })
            .from('#masked-content', { opacity: 0, duration: 1, ease: 'power1.inOut' })

    }, []);

    return (
        <section>
            <section id="art" className='w-full h-[100vh] flex justify-between items-center relative radial-gradient'>

                <h1 className='w-full text-center absolute text-[21vw] font-modern-negra top-1/4 -translate-y-1/2 text-[#464646] fade'>The Art</h1>

                <div className="cocktail-img abs-center flex-center">
                    <img src="/images/under-img.jpg" alt="art-img" className=' masked-img h-auto md:scale-100 scale-150 size-full abs-center' />
                </div>

                <ul className="w-fit space-y-5 pl-[4vw] pt-40 fade z-50">
                    {list1.map((item, index) => (
                        <li key={index} className='sm:text-sm md:text-lg flex gap-2 items-center'>
                            <img src="/images/check.png" alt="" className='w-fit h-fit' />
                            <p>{item}</p>
                        </li>
                    ))}
                </ul>
                <ul className="w-fit space-y-5 pr-[4vw] pt-40 fade z-50">
                    {list2.map((item, index) => (
                        <li key={index} className='md:text-lg text-sm flex gap-2 items-center'>
                            <img src="/images/check.png" alt="" className='w-fit h-fit' />
                            <p>{item}</p>
                        </li>
                    ))}
                </ul>

                <h1 className='w-full text-center font-modern-negra md:text-5xl text-4xl absolute left-1/2 -translate-x-1/2 bottom-10 fade'>Sip-Worthy Perfection</h1>

                <span className='absolute left-1/2 -translate-x-1/2 text-center sm:bottom-10 bottom-30 w-full' id="masked-content">
                    <h1 className='md:text-5xl sm:text-4xl text-3xl font-serif sm:w-1/2 md:w-1/2 w-[90%] mx-auto'>
                        Made with Craft, Poured with Passion
                    </h1>
                    <p className='md:text-xl sm:text-base sm:w-fit w-[90%] mx-auto'>
                        This isn’t just a drink. It’s a carefully crafted moment made just for you.
                    </p>
                </span>
            </section>
        </section>
    )
}

export default Art