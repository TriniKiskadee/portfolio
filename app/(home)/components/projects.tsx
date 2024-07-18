import React from 'react';
import Title from "@/app/(home)/components/title";
import {projects} from "@/constants/projects";
import Link from "next/link";
import {cn} from "@/lib/utils";
import {DirectionAwareHover} from "@/components/ui/direction-aware-hover";

const Projects = () => {
    return (
        <div className={'py-10 p-5 sm:p-0'}>
            <Title
                text={'Projects 🎨'}
                className={'flex flex-col items-center justify-center rotate-6'}
            />
            <div className={'grid grid-cols-1 sm:grid-cols-2 pt-20 gap-10'}>
                {projects.map((project, idx) => {
                    {console.log(project.background)}
                    return (
                        <Link
                            key={idx}
                            href={project.link}
                        >
                            <div className={cn('p-5 rounded-md',
                                project.background,
                            )}>
                                <DirectionAwareHover
                                    imageUrl={project.cover}
                                    className={'w-full space-y-5 cursor-pointer'}
                                >
                                    <div className={'spacy-y-5 bg-black/50 rounded-lg m-4'}>
                                        <h1 className={'text-2xl font-bold'}>
                                            {project.title}
                                        </h1>
                                        <div className={'flex items-center gap-5'}>
                                            {project.tech.map((Icon, idx) => {
                                                return (
                                                    <Icon
                                                        key={idx}
                                                        className={'w-8 h-8'}
                                                    />
                                                )
                                            })}
                                        </div>
                                    </div>
                                </DirectionAwareHover>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    );
};

export default Projects;