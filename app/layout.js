import "./globals.css";
import { Providers } from "./providers";

export const metadata = {
    title: "Bilal Ahmed | Software Engineer Portfolio",
    description:
        "Portfolio of Bilal Ahmed — Software Engineer specializing in Python, RAG Systems, Open-Source AI, Backend (Node.js, APIs), and ReactJS. Based in Gilgit-Baltistan, Pakistan.",
    keywords: [
        "Bilal Ahmed",
        "Software Engineer",
        "Portfolio",
        "Python",
        "Node.js",
        "React",
        "RAG",
        "AI",
        "Full Stack Developer",
    ],
    openGraph: {
        title: "Bilal Ahmed | Software Engineer Portfolio",
        description:
            "Software Engineer specializing in AI-powered and backend applications.",
        type: "website",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
