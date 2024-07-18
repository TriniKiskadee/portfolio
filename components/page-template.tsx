import React from 'react';
import Title from "@/app/(home)/components/title";
import Link from "next/link";

const PageTemplate = ({title, subtitle, btnText}: {title: string, subtitle: string, btnText?: string}) => {

    return (
        <div className={'h-screen w-screen bg-black text-white overflow-hidden'}>
            <div
                className={'flex flex-col gap-5 text-center justify-center items-center -rotate-[10deg] translate-y-[15rem]'}>

                <h1 className={'text-5xl sm:text-7xl lg:text-9xl hover:text-green-500 transition-all duration-100'}>{title}</h1>
                <div className={'object-contain -translate-y-1/2 w-[100px] md:[300px] lg:w-[500px] sm:-translate-y-5'}>
                    <div className={'w-full h-1.5 sm:h-2 bg-green-500 rounded-full'}/>
                    <div className={'w-full h-1.5 sm:h-2 bg-indigo-500 rounded-full translate-x-2'}/>
                </div>
                <div className={'gap-5'}>
                    <p className={'text-xl sm:text-3xl lg:text-5xl'}>{subtitle}</p>
                    <Link
                        href={'/'}
                        className={'flex items-center justify-center mt-8 text-indigo-500 hover:text-green-500 hover:border-indigo-500 transition-all duration-100 border-2 border-green-500 rounded-lg'}
                    >
                        {btnText ? btnText : 'Head Back to Safety'}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PageTemplate;