import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all';

const Hero = () => {

    useGSAP(() => {
        const HeroSplit = new SplitText('.title', { type: 'chars, words' });
        const ParaSplit = new SplitText('.subtitle', { type: 'chars, words, lines' });

        HeroSplit.chars.forEach((char) => char.classList.add('text-gradient'));

        gsap.from(HeroSplit.chars, {
            opacity: 0.2,
            y: 80,
            duration: 0.4,
            stagger: 0.1,
            ease: 'power1.inOut',
            delay: 0.5,
        })

        gsap.from(ParaSplit.lines, {
            opacity: 0,
            y: 15,
            duration: 0.4,
            stagger: 0.1,
            ease: 'power1.inOut',
            delay: 0.5,
        })

        gsap.to('#hero-left-leaf', {
            y: -200,
            duration: 0.2,
            scrollTrigger: {
                trigger: '#hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true,
                toggleActions: 'play none none reverse',
            }
        })

        gsap.fromTo('#hero-right-leaf',
            {
                y: -600,
            },
            {
                y: 150,
                duration: 0.2,
                scrollTrigger: {
                    trigger: '#hero',
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true,
                    toggleActions: 'play none none reverse',
                }
            })
    }, []);

    return (
        <>
            <section id="hero" className='noisy'>
                <h1 className='title opacity-80'>MOJITO</h1>
                <img id='hero-left-leaf' src="/images/hero-left-leaf.png" alt="hero-left-leaf" className='left-leaf' />

                <img id='hero-right-leaf' src="/images/hero-right-leaf.png" alt="hero-right-leaf" className='right-leaf' />

                <div className="body">
                    <div className="content">
                        <div className="space-y-5 hidden md:block">
                            <p>Cool. Crisp. Classic</p>

                            <p className='subtitle'>
                                Sip the spirit  <br /> of Summer
                            </p>
                        </div>
                        <div className="view-cocktails">
                            <p className='subtitle'>Every cocktail on our menu is a blend of premium ingredients, creative flair, and timeless recipes <br /> — designed to delight your senses.  </p>
                            <a href="#cocktails">
                                View Cocktails
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero