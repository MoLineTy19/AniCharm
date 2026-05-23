import TopNav from "@/ui/layout/topnav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground desktop-screen">
        <TopNav variant="transparent"/>
        {children}
    </div>
  );
}
