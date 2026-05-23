import {CardDetails} from "@/types/components";
import HomeCard from "@/app/(custom)/components/card";

export default function SimilarWatch() {
    const data: CardDetails[] = [
        {id: 1, title: 'Ван пис', genre: 'Фентези', rating: 9.8, description: 'Ep 1160', imageUrl: '/card-preview.jpeg'},
        {id: 2, title: 'Ван пис', genre: 'Фентези', rating: 9.8, description: 'Ep 1160', imageUrl: '/card-preview.jpeg'},
        {id: 3, title: 'Ван пис', genre: 'Фентези', rating: 9.8, description: 'Ep 1160', imageUrl: '/card-preview.jpeg'},
        {id: 4, title: 'Ван пис', genre: 'Фентези', rating: 9.8, description: 'Ep 1160', imageUrl: '/card-preview.jpeg'},
        {id: 5, title: 'Ван пис', genre: 'Фентези', rating: 9.8, description: 'Ep 1160', imageUrl: '/card-preview.jpeg'},
        {id: 6, title: 'Ван пис', genre: 'Фентези', rating: 9.8, description: 'Ep 1160', imageUrl: '/card-preview.jpeg'},
        {id: 7, title: 'Ван пис', genre: 'Фентези', rating: 9.8, description: 'Ep 1160', imageUrl: '/card-preview.jpeg'}
    ]

    return (
        <section className="flex flex-col gap-4 mt-4">
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-headings font-bold">
                    Потому что ты смотрел Призрак в доспехах
                </h2>
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