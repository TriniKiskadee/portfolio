import React from 'react';
import {socials} from "@/constants/socials";
import Link from "next/link";
import {cn} from "@/lib/utils";

const Navbar = ({className}: {className?: string}) => {
    return (
        <nav className={cn('py-10 flex justify-between items-center animate-move-down', className)}>
            <Link href="/">
                <h1 className={'text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2 hover:rotate-[1.75] transition-transform duration-100 ease-in-out'}>
                    Renaud Sennon{' '}👨🏽‍💻
                </h1>
            </Link>
            <div className={'flex items-center gap-5'}>
                {socials.map((social, index) => {
                    const Icon = social.Icon
                    return (
                        <Link
                            key={index}
                            href={social.link}
                            aria-label={social.label}
                            target={'_blank'}
                        >
                            <Icon
                                className={'w-5 h-5 hover:scale-[1.25] transition-transform duration-150 ease-in-out'}/>
                        </Link>
                    )
                })}
            </div>
        </nav>
    );
};

export default Navbar;