import TopNav from "@/ui/layout/topnav";

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex flex-col h-screen bg-background text-foreground desktop-screen overflow-hidden">
            <TopNav variant="solid"/>
            {children}
        </div>
    );
}
