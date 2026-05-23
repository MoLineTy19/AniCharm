import Image from "next/image";
import {Icon} from "@iconify/react";

export default function HeroSection() {
    return (
        <div className="relative w-full h-[80vh] flex items-end pb-24 px-8">
            <Image src={'/hero-banner.jpg'} alt={'hero-banner'} fill className="object-cover" loading="eager"/>
            <div className="max-w-2xl flex flex-col gap-4 relative z-10">
                <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-(--primary)">
                        <span className="bg-primary text-primary-foreground px-2 py-0.5 rounded-sm">
                            Новая серия
                        </span>
                    <span>
                            Сезон 2
                        </span>
                </div>
                <h1 className="text-5xl font-headings font-bold leading-tight">
                    Ван пис
                </h1>
                <p className="text-muted-foreground text-lg line-clamp-3">
                    Монки Д. Луффи, 17-летний парень, бросает вызов непокорным водам Гранд Лайн. Он, имея свои причины стать пиратом, собирает команду и отправляется на поиски мифического сокровища, мечтая о захватывающих приключениях.
                </p>
                <div className="flex gap-4 mt-4">
                    <button className="bg-primary text-primary-foreground px-8 py-3 rounded-md font-medium flex items-center gap-2 text-lg">
                        <Icon icon="lucide:play" className="block"/>
                        Смотреть сейчас
                    </button>
                    <button className="bg-secondary text-secondary-foreground px-6 py-3 rounded-md font-medium flex items-center gap-2 text-lg">
                        <Icon icon="lucide:plus" className="block"/>
                        Смотреть позже
                    </button>
                </div>
            </div>
        </div>
    )
}