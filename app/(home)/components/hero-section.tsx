import React from 'react';
import {MovingBorderBtn} from "@/components/ui/moving-border";
import Title from "@/app/(home)/components/title";
import Link from "next/link";

const HeroSection = () => {
    return (
        <div
            className={'min-h-[60vh] flex lg:flex-row flex-col-reverse gap-14 lg:gap-0 items-center justify-between animate-move-up'}>
            {/* Hero Text */}
            <div className={'space-y-10 text-center lg:text-left'}>
                <h1 className={'text-4xl lg:text-7xl font-bold'}>
                    Nice to meet you! 👋🏼 <br/>
                    <span className={'underline underline-offset-8 decoration-green-500'}>
                        I&apos;m Renaud.
                    </span>
                </h1>
                <p className={'md:w-96 text-lg text-gray-300'}>
                    Based in Trinidad, I&apos;m a Fullstack developer passionate about building
                    modern web application that users love.
                </p>

                <div className={'w-fit mx-auto lg:mx-0'}>
                    <div className={'hover:-translate-y-[5px] hover:text-green-500 hover:-rotate-[1.5deg] duration-100'}>
                        <Link
                            href={'mailto:renaudsennon@gmail.com'}
                            className={'inline-block cursor-pointer'}
                        >
                            <Title
                                text={'Contact Me 📬'}
                                className={'origin-left group-hover:text-green-500'}
                            />
                        </Link>
                    </div>
                </div>
            </div>
            {/* Hero Image */}
            <div className={'relative'}>
                <div className={'w-72 h-72 space-y-3 relative -rotate-[30deg]'}>
                    <div className={'flex gap-3 translate-x-8'}>
                        <div className={'w-32 h-32 rounded-2xl bg-green-500'}/>
                        <div className={'w-32 h-32 rounded-full bg-indigo-500'}/>
                    </div>
                    <div className={'flex gap-3 -translate-x-8'}>
                        <div className={'w-32 h-32 rounded-2xl bg-indigo-500'}/>
                        <div className={'w-32 h-32 rounded-full bg-green-500'}/>
                    </div>
                    <div className={'glow absolute top-[40%] right-1/2 -z-10'}/>
                </div>
                <div className={'absolute bottom-5 sl:bottom-14 left-0 sm:-left-10'}>
                    <MovingBorderBtn
                        borderRadius={'0.5rem'}
                        className={'p-3 font-semibold'}
                    >
                        <p>
                            📢 Available for work
                        </p>
                    </MovingBorderBtn>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;