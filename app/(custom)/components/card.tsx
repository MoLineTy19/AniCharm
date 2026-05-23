import Image from "next/image";
import {Icon} from "@iconify/react";
import {CardDetails} from "@/types/components";
import Link from "next/link";


export default function HomeCard(data: CardDetails) {
    return (
        <Link href={'/anime/1'}>
            <div className="flex flex-col gap-2 group cursor-pointer w-80">
                <div className="relative aspect-3/4 rounded-md overflow-hidden bg-muted">
                    <Image src={data.imageUrl} alt={'card-preview'} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" loading={'lazy'} style={{aspectRatio: '3:4'}} width={226} height={296} />
                    <div className="absolute top-2 right-2 bg-background/80 backdrop-blur text-xs font-semibold px-2 py-1 rounded-sm flex items-center gap-1">
                        <Icon icon={'lucide:star'}/>
                        {data.rating}
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-2 bg-linear-to-t from-background/90 to-transparent">
                    <span className="text-xs bg-primary text-primary-foreground px-1.5 py-0.5 rounded-sm font-medium">
                        {data.description}
                    </span>
                    </div>
                </div>
                <div className="flex flex-col gap-0.5">
                    <h4 className="font-headings font-medium text-sm text-foreground truncate">
                        {data.title}
                    </h4>
                    <div className="flex gap-2 text-xs text-muted-foreground truncate">
                    <span>
                        {data.genre}
                    </span>
                        <span>
                        Fantasy
                    </span>
                    </div>
                </div>
            </div>
        </Link>
    )
}