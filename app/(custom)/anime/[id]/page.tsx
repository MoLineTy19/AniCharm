import Image from "next/image";
import {Icon} from "@iconify/react";
import {Button} from "@/components/ui/button";
import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";

export default function AnimePage() {
    return (
        <>
            <div className="relative w-full h-[65vh] flex items-end">
                <div className="absolute inset-0 w-full h-full">
                    <Image src={'/hero-banner.jpg'} alt={'background'} fill className="w-full h-full object-cover"/>
                </div>
                <div className="relative z-10 w-full px-8 pb-12 flex gap-8">
                    <div className="w-56 shrink-0 rounded-lg overflow-hidden border border-border/50 shadow-2xl">
                        <Image src={'/card-preview.jpeg'} alt={'anime-preview'} className="w-full h-full object-cover" width={'150'} height={'150'} loading={'lazy'}/>
                    </div>
                    <div className="flex flex-col justify-end gap-4 max-w-3xl">
                        <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-primary">
                        <span className="bg-primary/20 text-primary px-2 py-0.5 rounded-sm">
                            ТВ Сериал
                        </span>
                            <span className="flex items-center gap-1">
                            <Icon icon={'lucide:star'}/>
                            9.8
                        </span>
                            <span className="text-muted-foreground">
                            1998
                        </span>
                            <span className='text-muted-foreground border border-border px-1.5 py-0.5 rounded-sm'>
                            PG-12
                        </span>
                        </div>
                        <h1 className='text-5xl font-headings font-bold leading-tight text-secondary'>
                            One Piece
                        </h1>
                        <p className="text-muted-foreground text-base leading-relaxed line-clamp-3">
                            Монки Д. Луффи, 17-летний парень, бросает вызов непокорным водам Гранд Лайн. Он, имея свои причины стать пиратом, собирает команду и отправляется на поиски мифического сокровища, мечтая о захватывающих приключениях
                        </p>
                        <div className='flex gap-4 mt-2'>
                            <Button className='p-6 text-base text-primary-foreground'>
                                <Icon icon={'lucide:play'}/>
                                Смотреть эпизод 1
                            </Button>
                            <Button className="bg-white/10 backdrop-blur-md p-6 text-base text-primary-foreground ">
                                <Icon icon={'lucide:bookmark'}/>
                                Смотреть позже
                            </Button>
                            <Button className="bg-white/10 backdrop-blur-md py-6 px-4 text-base text-primary-foreground">
                                <Icon icon={'lucide:share-2'}/>
                            </Button>

                        </div>
                    </div>
                </div>
            </div>
            <div className="flex px-8 py-8 gap-12 mx-auto w-full">
                <div className="flex-7 flex flex-col gap-6">
                    <div className="flex items-center justify-between border-b border-border pb-4">
                        <h2 className="text-2xl font-headings font-bold">
                            Серии
                        </h2>
                        <div className="flex items-center gap-3">
                            <Select>
                                <SelectTrigger className="w-45">
                                    <SelectValue placeholder="Озвучка" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="light">AniLibria</SelectItem>
                                        <SelectItem value="dark">AniDub</SelectItem>
                                        <SelectItem value="system">AniVost</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <Select>
                                <SelectTrigger className="w-45">
                                    <SelectValue placeholder="Сезон 1" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="Сезон 2">AniLibria</SelectItem>
                                        <SelectItem value="Сезон 3">AniDub</SelectItem>
                                        <SelectItem value="Сезон 4">AniVost</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div className="flex gap-6 p-4 rounded-lg border bg-primary/10 border-primary/30 items-center">
                            <div className="text-2xl font-headings font-bold text-muted-foreground w-8 text-center shrink-0">
                                1
                            </div>
                            <div className='relative w-40 aspect-video rounded-md overflow-hidden shrink-0 bg-muted'>
                                <Image src={'/hero-banner.jpg'} alt={'background'} fill className="w-full h-full object-cover"/>
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                    <Icon icon={'lucide:play-circle'} className="block text-white opacity-80 size-8"/>
                                </div>
                                <div className="absolute bottom-1 right-1 bg-black/80 px-1.5 py-0.5 rounded text-[10px] text-white">
                                    24m
                                </div>
                            </div>
                            <div className="flex flex-col gap-1.5 flex-1">
                                <h4 className='font-headings font-semibold text-foreground text-lg'>
                                    Я - Луффи! Я стану Королём Пиратов!
                                </h4>
                                <p className="text-sm text-muted-foreground line-clamp-2">
                                    Монки Д. Луффи — паренёк, решивший стать Королём Пиратов. После серии необъяснимых инцидентов он оказывается спящим внутри бочки, которую вытаскивают моряки с пассажирского судна
                                </p>
                            </div>
                        </div>
                        <Button className="w-full text-muted-foreground bg-background border border-border">
                            Загрузить еще эпизодов
                        </Button>
                    </div>
                </div>
                <div className="flex-3 flex flex-col gap-8">
                    <div className="flex flex-col gap-4 text-sm">
                        <div className='flex flex-col gap-1'>
                            <span className="text-muted-foreground">
                                Жанры
                            </span>
                            <div className="flex flex-wrap gap-2">
                                <Button className="px-2 py-1 bg-foreground/20 rounded-sm text-xs font-medium text-background">Приключения</Button>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mt-2 border-t border-border pt-4">
                            <div className='flex flex-col gap-1'>
                                <span className='text-muted-foreground'>
                                    Студия
                                </span>
                                <span className="font-medium">
                                    Toei Animation
                                </span>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <span className='text-muted-foreground'>
                                    Студия
                                </span>
                                <span className="font-medium">
                                    Toei Animation
                                </span>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <span className='text-muted-foreground'>
                                    Студия
                                </span>
                                <span className="font-medium">
                                    Toei Animation
                                </span>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <span className='text-muted-foreground'>
                                    Студия
                                </span>
                                <span className="font-medium">
                                    Toei Animation
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 border-t border-border pt-6">
                        <h3 className="font-headings font-bold text-lg">
                            Основные Сейю
                        </h3>
                        <div className='flex flex-col gap-3'>
                            <div className="flex items-center gap-3">
                                <Image src={'/pfp.jpg'} alt={'pfp'} width={30} height={30} className="rounded-full"/>
                                <div className='flex flex-col'>
                                    <span className="text-sm font-medium">
                                        Monkey D. Luffy
                                    </span>
                                    <span className='text-xs text-muted-foreground'>
                                        Mayumi Tanaka
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 border-t border-border pt-6">
                        <h3 className="font-headings font-bold text-lg">
                            Может понравится
                        </h3>
                        <div className="grid grid-cols-4 gap-3">
                            <div className="flex flex-col gap-2">
                                <div className="bg-muted rounded-md overflow-hidden relative w-full">
                                    <Image
                                        src="/card-preview.jpeg"
                                        alt="card"
                                        width={170}
                                        height={225}
                                    />
                                </div>
                                <span className="text-xs font-headings font-medium truncate">One Piece</span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="bg-muted rounded-md overflow-hidden relative w-full">
                                    <Image
                                        src="/card-preview.jpeg"
                                        alt="card"
                                        width={170}
                                        height={225}
                                    />
                                </div>
                                <span className="text-xs font-headings font-medium truncate">One Piece</span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="bg-muted rounded-md overflow-hidden relative w-full">
                                    <Image
                                        src="/card-preview.jpeg"
                                        alt="card"
                                        width={170}
                                        height={225}
                                    />
                                </div>
                                <span className="text-xs font-headings font-medium truncate">One Piece</span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="bg-muted rounded-md overflow-hidden relative w-full">
                                    <Image
                                        src="/card-preview.jpeg"
                                        alt="card"
                                        width={170}
                                        height={225}
                                    />
                                </div>
                                <span className="text-xs font-headings font-medium truncate">One Piece</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}