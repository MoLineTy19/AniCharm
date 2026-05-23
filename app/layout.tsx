import "./globals.css";
import React from "react";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <html className={`${cn("light", cn("font-sans", geist.variable), "font-sans", geist.variable)} light`}>
            <body>
                {children}
            </body>
        </html>
    )
}