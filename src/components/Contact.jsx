import React from 'react';

const Contact = () => {
    return (
        <section className="w-full min-h-screen flex flex-col items-center justify-center overflow-hidden relative px-4 py-16">
            <img
                src="/images/slider-right-leaf.png"
                alt="slider-right-leaf"
                className="absolute right-0 w-1/4 sm:w-1/5 top-0 sm:-top-32"
            />

            <section id="contact" className="w-full max-w-4xl text-center flex flex-col items-center gap-12">
                <div className="font-modern-negra text-4xl sm:text-6xl md:text-9xl">
                    <h1>Where to Find Us</h1>
                </div>

                <div className="contact-body w-full flex flex-col gap-10">
                    <span className="space-y-2">
                        <p className="text-lg">Visit Our Bar</p>
                        <p className="text-2xl">456, Raq Blvd. #404, Los Angeles, CA 90210</p>
                    </span>

                    <span className="space-y-2">
                        <p className="text-lg">Contact Us</p>
                        <p className="text-2xl">(555) 987-6543</p>
                        <p className="text-2xl">hello@jsmcocktail.com</p>
                    </span>

                    <span className="space-y-2">
                        <p className="text-lg">Open Every Day</p>
                        <p className="text-2xl">Mon–Thu : 11:00am – 12am</p>
                        <p className="text-2xl">Fri : 11:00am – 2am</p>
                        <p className="text-2xl">Sat : 9:00am – 2am</p>
                        <p className="text-2xl">Sun : 9:00am – 1am</p>
                    </span>
                </div>

                <div className="text-lg flex flex-col items-center gap-2">
                    <p>Socials</p>
                    <span className="flex gap-5">
                        <img src="/images/insta.png" alt="insta" className="w-6 sm:w-8" />
                        <img src="/images/x.png" alt="x" className="w-6 sm:w-8" />
                    </span>
                </div>
            </section>

            <img
                src="/images/slider-left-leaf.png"
                alt="slider-left-leaf"
                className="absolute w-1/5 sm:w-1/6 bottom-0 left-0"
            />
        </section>
    );
};

export default Contact;
