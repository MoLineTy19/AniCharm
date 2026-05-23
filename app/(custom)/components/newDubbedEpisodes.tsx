import {Icon} from "@iconify/react";
import {CardDetails} from "@/types/components";
import HomeCard from "@/app/(custom)/components/card";

export default function NewDubbedEpisodes() {
    const data: CardDetails[] = [
        {id: 1, title: 'Ван пис', genre: 'Фентези', rating: 9.8, description: 'Ep 1160 - AniLibria', imageUrl: '/card-preview.jpeg'},
        {id: 2, title: 'Ван пис', genre: 'Фентези', rating: 9.8, description: 'Ep 1160 - Sub', imageUrl: '/card-preview.jpeg'},
        {id: 3, title: 'Ван пис', genre: 'Фентези', rating: 9.8, description: 'Ep 1160 - AniLibria', imageUrl: '/card-preview.jpeg'},
        {id: 4, title: 'Ван пис', genre: 'Фентези', rating: 9.8, description: 'Ep 1160 - AniLibria', imageUrl: '/card-preview.jpeg'},
        {id: 5, title: 'Ван пис', genre: 'Фентези', rating: 9.8, description: 'Ep 1160 - AniLibria', imageUrl: '/card-preview.jpeg'},
        {id: 6, title: 'Ван пис', genre: 'Фентези', rating: 9.8, description: 'Ep 1160 - AniLibria', imageUrl: '/card-preview.jpeg'},
        {id: 7, title: 'Ван пис', genre: 'Фентези', rating: 9.8, description: 'Ep 1160 - AniLibria', imageUrl: '/card-preview.jpeg'}
    ]

    return (
        <section className="flex flex-col gap-4 mt-4">
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-headings font-bold flex items-center gap-2">
                    <Icon icon={'lucide:mic'}/>
                    Недавно озвученные
                </h2>
                <div className="text-sm text-primary flex items-center gap-1 hover:underline cursor-pointer">
                    Посмотреть всё
                    <Icon icon={'lucide:chevron-right'}/>
                </div>
            </div>
            <div className="grid grid-cols-7 gap-4">
                {
                    data.map((card: CardDetails) => (
                        <HomeCard title={card.title} genre={card.genre} rating={card.rating} description={card.description} imageUrl={card.imageUrl} id={card.id} key={card.id}/>
                    ))
                }
            </div>
        </section>
    )
}