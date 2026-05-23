import {Icon} from "@iconify/react";
import Link from "next/link";
import Image from "next/image";

interface TopNavProps {
    variant?: "transparent" | "solid";   // прозрачный (для героя) или обычный
}

export default function TopNav({ variant = "solid" }: TopNavProps) {
    const isTransparent = variant === "transparent";

    return (
        <nav
            className={isTransparent
                ? "w-full px-8 py-4 flex items-center justify-between z-50 absolute top-0 left-0 bg-linear-to-b from-background/80 to-transparent"
                : "bg-w-full px-8 py-4 flex items-center justify-between z-50 bg-background border-b border-border"}>
            <div className="flex items-center gap-8">
                <div className="flex items-center gap-2 text-primary font-headings font-bold text-xl">
                    <Icon icon="lucide:play-circle" />
                    <span>
                        AniCharm
                    </span>
                </div>
                <div className="hidden md:flex items-center gap-6 text-sm font-medium text-(--muted-foreground)">
                    <Link href={'/'} className="text-foreground">
                        Главная
                    </Link>
                    <Link href={'/catalog'} className="text-(--color-foreground))">
                        Каталог
                    </Link>
                    <Link href={'/'} className="text-(--color-foreground))">
                        Прямо сейчас
                    </Link>
                    <Link href={'/'} className="text-(--color-foreground))">
                        Манга
                    </Link>
                    <Link href={'/'} className="text-(--color-foreground))">
                        Новости
                    </Link>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <div className="relative">
                    <Icon icon="lucide:search" className="block absolute left-3 top-1/2 -translate-y-1/2 color-muted-foreground size-[18px]"/>
                    <input className="bg-(--input) border border-(--input) rounded-full pl-10 pr-4 py-1.5 text-sm color-muted-foreground w-48 lg:w-64" placeholder="Поиск аниме..." />
                </div>
                <button className="relative text-(--muted-foreground)">
                    <Icon icon="lucide:bell" className="block size-5"/>
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-(--primary) rounded-full"></span>
                </button>
                <Image src={'/pfp.jpg'} alt={'pfp'} className="rounded-full border border-border" width={35} height={35} />
            </div>
        </nav>
    )
}