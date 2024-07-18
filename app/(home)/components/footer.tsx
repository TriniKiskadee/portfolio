import React from 'react';
import Navbar from "@/app/(home)/components/navbar";

const Footer = () => {
    return (
        <div className={'border-t mt-10'}>
            <Navbar className={'flex-col gap-5'}/>
            <p className={'mb-5 text-muted-foreground flex justify-center mx-auto'}>
                &copy; 2024 All Rights Reserved
            </p>
        </div>
    );
};

export default Footer;