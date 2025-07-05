import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { display_cocktails } from "../constants/config";

const Slider = () => {
    const [cocktail, setCocktail] = useState(0);
    const [animating, setAnimating] = useState(false); // prevent spam clicks
    const containerRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const ctx = gsap.context(() => {
            gsap.from(".fade-side", {
                opacity: 0,
                y: 25,
                duration: 0.6,
                stagger: 0.1,
                ease: "power1.out",
            });

            gsap.fromTo("#slider-img",
                { opacity: 0, xPercent: -150 },
                { opacity: 1, xPercent: 0, duration: 1, ease: "power1.out" }
            );
        }, containerRef);

        setAnimating(true); // lock during animation
        const timeout = setTimeout(() => setAnimating(false), 900); // match GSAP time

        return () => {
            ctx.revert();  // clean animations
            clearTimeout(timeout);
        };
    }, [cocktail]);

    const next = () => {
        if (animating) return;
        setCocktail((prev) => (prev + 1) % display_cocktails.length);
    };

    const prev = () => {
        if (animating) return;
        setCocktail((prev) => (prev - 1 + display_cocktails.length) % display_cocktails.length);
    };

    return (
        <div id="slider-container" ref={containerRef}>
            <img src="/images/slider-right-leaf.png" alt="slider-right-leaf" id="slider-right-leaf" />

            <section id="slider" className="h-screen">
                <div className="toggle">
                    {display_cocktails.map((item, index) => (
                        <button key={index} onClick={() => !animating && setCocktail(index)}>
                            <p className={cocktail === index ? "text-white" : ""}>{item.name}</p>
                        </button>
                    ))}
                </div>

                <div className="slider-btn">
                    <button onClick={prev}>
                        <p className="text-left">{display_cocktails[cocktail]?.left}</p>
                        <img src="/images/right-arrow.png" alt="right-slider-btn" />
                    </button>
                    <button onClick={next}>
                        <p className="text-right">{display_cocktails[cocktail]?.right}</p>
                        <img src="/images/left-arrow.png" alt="left-slider-btn" />
                    </button>
                </div>

                <div className="slider-img">
                    <img
                        className={cocktail === 1 ? `translate-y-22` : ""}
                        id="slider-img"
                        key={display_cocktails[cocktail]?.img} // remounts image
                        src={display_cocktails[cocktail]?.img}
                        alt="slider-img"
                    />
                </div>

                <div className="slider-body">
                    <span>
                        <h2>Recipe For:</h2>
                        <p className="fade-side">{display_cocktails[cocktail]?.name}</p>
                    </span>
                    <span>
                        <h1 className="fade-side">{display_cocktails[cocktail]?.header}</h1>
                        <p className="fade-side">{display_cocktails[cocktail]?.body}</p>
                    </span>
                </div>
            </section>

            <img src="/images/slider-left-leaf.png" id="slider-left-leaf" alt="slider-left-leaf" />
        </div>
    );
};

export default Slider;
