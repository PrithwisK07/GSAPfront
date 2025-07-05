import React from 'react'
import { about_img } from "../constants/config";

const About = () => {
    return (
        <section id="about" className='mt-[200vh]'>
            <div className="header">
                <div>
                    <button className='px-5 py-2 rounded-4xl bg-white text-black hover:bg-[#e7d393] hover:text-white'>
                        <a href="#slider">View Cocktails</a>
                    </button>
                    <h1 className='text-6xl font-modern-negra'>
                        Where every detail matters -from muddle to garnish
                    </h1>
                </div>
                <div>
                    <p className='text-lg'>Every cocktail we serve is a reflection of our obsession with detail — from the first muddle to the final garnish. That care is what turns a simple drink into something truly memorable.</p>
                    <span className='flex flex-col gap-1'>
                        <h1 className='pl-2 text-5xl font-sans font-bold text-[#e7d393]'>4.5 <span className='text-3xl text-white'>/5</span></h1>
                        <p>More than +12000 customers</p>
                    </span>
                </div>
            </div>
            <div className="body">
                {
                    about_img.map((img, index) => (
                        <div>
                            <img key={index} src={img} alt={img} />
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default About