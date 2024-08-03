import {
    SiClerk, SiDrizzle,
    SiNextdotjs,
    SiPayloadcms, SiPrisma,
    SiShadcnui,
    SiStripe, SiSupabase,
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
    {
        title: 'Cypress',
        tech: [SiNextdotjs, SiTypescript, SiTailwindcss, SiStripe, SiSupabase, SiDrizzle ,SiShadcnui],
        link: 'https://github.com/TriniKiskadee/cypress',
        cover: '/projects/cypress_thumbnail.png',
        background: `bg-amber-500`,
    },
]