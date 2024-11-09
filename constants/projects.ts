import {
    SiClerk, SiDrizzle, SiHono,
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
        title: 'PingPanda',
        tech: [SiNextdotjs, SiTypescript, SiTailwindcss, SiStripe, SiClerk, SiPrisma, SiShadcnui, SiHono],
        link: 'https://pingpanda-green.vercel.app/',
        cover: '/projects/pingpanda_thumbnail.png',
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