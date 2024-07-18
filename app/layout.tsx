import type {Metadata} from "next";
import {Space_Grotesk} from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/components/theme-provider";

const space_grotesk = Space_Grotesk({subsets: ["latin"]});

export const metadata: Metadata = {
    metadataBase: new URL("https://renaudsennon-portfolio.vercel.app/"),

    title: 'Renaud Sennon',
    authors: {
        name: "Renaud Sennon",
    },

    description:
        "Based in Trinidad, I'm a Fullstack developer passionate about building modern web application that users love.",
    openGraph: {
        title: "Renaud Sennon",
        description:
            "Based in Trinidad, I'm a Fullstack developer passionate about building modern web application that users love.",
        url: "https://renaudsennon-portfolio.vercel.app/",
        siteName: "Renaud Sennon",
        images: "/public/thumbnail.png",
        type: "website",
    },
    keywords: ["portfolio", "Renaud Sennon"],
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html
            lang="en"
            suppressHydrationWarning
        >
        <body className={space_grotesk.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
            {children}
        </ThemeProvider>
        </body>
        </html>
    );
}
