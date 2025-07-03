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

                <h1 className='w-full text-center absolute text-[18rem] font-modern-negra top-1/4 -translate-y-1/2 text-[#464646] fade'>The Art</h1>

                <div className="cocktail-img abs-center">
                    <img src="/images/under-img.jpg" alt="art-img" className=' masked-img h-auto size-full abs-center' />
                </div>

                <ul className="w-fit space-y-5 pl-15 pt-40 fade">
                    {list1.map((item, index) => (
                        <li key={index} className='text-lg flex gap-2 items-center'>
                            <img src="/images/check.png" alt="" className='w-fit h-fit' />
                            <p>{item}</p>
                        </li>
                    ))}
                </ul>
                <ul className="w-fit space-y-5 pr-15 pt-40 fade">
                    {list2.map((item, index) => (
                        <li key={index} className='text-lg flex gap-2 items-center'>
                            <img src="/images/check.png" alt="" className='w-fit h-fit' />
                            <p>{item}</p>
                        </li>
                    ))}
                </ul>

                <h1 className='font-modern-negra text-5xl absolute left-1/2 -translate-x-1/2 bottom-10 fade'>Sip-Worthy Perfection</h1>

                <span className='absolute left-1/2 -translate-x-1/2 text-center bottom-10' id="masked-content">
                    <h1 className='text-5xl font-serif'>
                        Made with Craft, Poured with Passion
                    </h1>
                    <p className='text-xl'>
                        This isn’t just a drink. It’s a carefully crafted moment made just for you.
                    </p>
                </span>
            </section>
        </section>
    )
}

export default Art