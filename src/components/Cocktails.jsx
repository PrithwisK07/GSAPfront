import React from 'react'
import { loved_cocktails, popular_cocktails } from '../constants/config';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Cocktails = () => {

    useGSAP(() => {

        const leftLeafTL = gsap.timeline({
            scrollTrigger: {
                trigger: "#cocktails",
                start: "top top",
                toggleActions: "play none none reverse",
            }
        });

        leftLeafTL.fromTo("#cocktail-left-leaf",
            { y: 100, x: -120 },
            {
                y: 0,
                x: 0,
                duration: 0.5,
                ease: "power1.out",
            }
        );

        const rightLeafTL = gsap.timeline({
            scrollTrigger: {
                trigger: "#cocktails",
                start: "top top",
                toggleActions: "play none none reverse",
            }
        });

        rightLeafTL
            .to({}, { duration: 0.5 })
            .fromTo("#cocktail-right-leaf",
                { y: 80, x: 100 },
                {
                    y: 0,
                    x: 0,
                    duration: 0.5,
                    ease: "power1.out"
                }
            );
    }, []);


    return (
        <section id='cocktails' className='noisy mt-[100vh]'>
            <div className="body">
                <img id='cocktail-left-leaf' src="/images/cocktail-left-leaf.png" alt="cocktail-left-leaf" className='left-leaf' />

                <img id='cocktail-right-leaf' src="/images/cocktail-right-leaf.png" alt="cocktail-right-leaf" className='right-leaf' />

                <div className="content">
                    <div className="popular-cocktails">
                        <h2>Most Popular Cocktails</h2>

                        <ul>
                            {popular_cocktails.map((cocktail) => (
                                <li key={cocktail.name}>
                                    <span>
                                        <p>{cocktail.name}</p>
                                        <p>{cocktail.price}</p>
                                    </span>
                                    <span>
                                        <p>{cocktail.origin}</p>
                                        <p>|</p>
                                        <p>{cocktail.region ? cocktail.region : cocktail.volume}</p>
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="loved-cocktails">
                        <h2>Most loved Cocktails</h2>

                        <ul>
                            {loved_cocktails.map((cocktail) => (
                                <li key={cocktail.name}>
                                    <span>
                                        <p>{cocktail.name}</p>
                                        <p>{cocktail.price}</p>
                                    </span>
                                    <span>
                                        <p>{cocktail.origin}</p>
                                        <p>|</p>
                                        <p>{cocktail.region ? cocktail.region : cocktail.volume}</p>
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cocktails