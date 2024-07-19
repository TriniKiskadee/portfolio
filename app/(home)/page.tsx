import Image from "next/image";
import Navbar from "@/app/(home)/components/navbar";
import HeroSection from "@/app/(home)/components/hero-section";
import Skills from "@/app/(home)/components/skills";
import Projects from "@/app/(home)/components/projects";
import Footer from "@/app/(home)/components/footer";

export default function Home() {
    return (
        <div className={'min-h-screen bg-black text-white overflow-hidden'}>
            <div className={'dark:bg-black bg-black bg-grid-white/[0.05] relative mb-5'}>
                <div className={'max-w-7xl mx-auto p-5'}>
                    <Navbar/>
                    <HeroSection/>
                </div>
                <div className={'h-20 xl:h-32 w-full bg-gradient-to-t from-black absolute -bottom-5 left-0 xl:bottom-0'} />
            </div>
            <div className={'max-w-7xl mx-auto p-5 mt-20'}>
                <Skills />
                <Projects />
                <Footer />
            </div>
        </div>
    );
}
