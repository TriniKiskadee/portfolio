'use client'

import React from 'react';
import Title from "@/app/(home)/components/title";
import {HoverEffect} from "@/components/ui/card-hover-effect";
import {skills} from "@/constants/skills";

const Skills = () => {
    return (
        <div className={'max-w-5xl mx-auto px-8 bg-black'}>
            <Title
                text="Skills 🔧"
                className={'flex flex-col items-center justify-center -rotate-6'}
            />
            <HoverEffect
                items={skills}
            />
        </div>
    );
};

export default Skills;