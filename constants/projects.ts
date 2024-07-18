import {
    SiClerk,
    SiMongodb,
    SiNextdotjs,
    SiPayloadcms, SiPrisma,
    SiShadcnui,
    SiStripe,
    SiTailwindcss,
    SiTrpc,
    SiTypescript,
    SiZod
} from "react-icons/si";

export const projects = [
    {
        title: 'Minerva AI (coming soon)',
        tech: [SiNextdotjs, SiTypescript, SiTailwindcss, SiStripe, SiClerk, SiPrisma, SiShadcnui],
        link: '/coming-soon',
        cover: '/caution.png',
        background: 'bg-rose-500',
    },
    {
        title: 'Digital Hippo',
        tech: [SiNextdotjs, SiTypescript, SiTailwindcss, SiTrpc, SiStripe, SiPayloadcms, SiShadcnui],
        link: 'https://github.com/TriniKiskadee/digitalhippo/tree/master',
        cover: '/projects/digital_hippo_thumbnail.jpg',
        background: `bg-emerald-500`,
    },
]