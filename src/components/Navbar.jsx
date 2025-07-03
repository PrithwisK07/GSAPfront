import React from 'react';
import { navlinks } from '../constants/config';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {

    useGSAP(() => {
        gsap.to("nav", {
            backgroundColor: "#00000050",
            backdropFilter: "blur(4px)",
            duration: 0.3,
            ease: "power1.out",
            scrollTrigger: {
                trigger: "nav",
                start: "top top", // when nav hits top of viewport
                end: "+=1", // needed to trigger correctly
                toggleActions: "play none none reverse", // animate in, reverse on scroll up
                scrub: false,
            }
        });
    }, []);

    return (
        <nav className="fixed top-0 left-0 w-full z-50">
            <div className="flex justify-between items-center px-4 py-2">
                <a href="#hero" className='flex items-center gap-2'>
                    <img src="../images/logo.png" alt="logo" className="h-8" />
                    <p className="text-white font-bold">Velvet Pour</p>
                </a>

                <ul className="flex gap-4 text-white">
                    {navlinks.map((link) => (
                        <li key={link.id}>
                            <a href={`#${link.id}`}>{link.text}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
