'use client'

import {Icon} from "@iconify/react";
import FilterSelect from "@/app/(main)/catalog/components/filterSelect";
import {Separator} from "@/components/ui/separator";
import {Toggle} from "@/components/ui/toggle";
import {Button} from "@/components/ui/button";
import HomeCard from "@/app/(custom)/components/card";
import {CardDetails} from "@/types/components";
export default function Page() {
    const genres = [
        'Экшен', 'Приключения', 'Комедия', 'Драма'
    ]

    const tags = [
        'Киберпанк', 'Пост-апакалипсис', 'Школьная жизнь', 'Путешествие во времени'
    ]
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
        <div className="flex flex-1 overflow-hidden">
            <aside className="w-[320px] shrink-0 border-r border-border bg-secondary/5 flex flex-col h-full relative">
                <div className="p-6 border-b border-border flex items-center justify-between sticky top-0 bg-secondary/5 backdrop-blur z-10">
                    <h2 className="text-xl font-headings font-bold">
                        Фильтры
                    </h2>
                    <button className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors">
                        <Icon icon={'lucide:rotate-ccw'}/>
                        Сбросить
                    </button>
                </div>
                <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-8 pb-32">
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-2.5">
                            <FilterSelect filterTitle={'Сортировать по'} placeholder={'Высокий рейтинг'} options={[{label: 'Популярность', value: 'popularity'}]}/>
                        </div>
                        <div>
                            <FilterSelect filterTitle={'Статус'} placeholder={'Уже вышло'} options={[{label: 'Онгоинг', value: 'ongoing'}]}/>
                        </div>
                        <Separator orientation={'horizontal'}/>
                        <div>
                            <FilterSelect filterTitle={'Формат'} placeholder={'Любой формат'} options={[{label: 'Онгоинг', value: 'ongoing'}]}/>
                        </div>
                        <div>
                            <FilterSelect filterTitle={'Год'} placeholder={'2026-2024'} options={[{label: 'Онгоинг', value: 'ongoing'}]}/>
                        </div>
                        <div>
                            <FilterSelect filterTitle={'Студия'} placeholder={'Выберите студию'} options={[{label: 'AniLibria', value: 'ongoing'}]}/>
                        </div>
                        <Separator orientation={'horizontal'}/>
                        <div>
                            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                Жанры
                            </span>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {
                                    genres.map((item, index) => (
                                        <Toggle className='data-[state=on]:bg-primary data-[state=on]:text-white border text-current/60 hover:text-current/60' key={index}>{item}</Toggle >
                                    ))
                                }
                            </div>
                        </div>
                        <div>
                            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                Теги и тематики
                            </span>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {
                                    tags.map((item, index) => (
                                        <Toggle className='data-[state=on]:bg-primary/20 data-[state=on]:text-primary border text-current/60 hover:text-current/60' key={index}>{item}</Toggle >
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-background via-background to-transparent border-t border-border/50">
                    <Button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-primary rounded-md text-sm font-bold text-primary-foreground shadow-lg hover:bg-primary/90 transition-all">
                        <Icon icon={'lucide:search'}></Icon>
                        Поиск
                    </Button>
                </div>

            </aside>
            <main className="flex-1 flex flex-col h-full overflow-y-auto">
                <div className="p-8 pb-4 flex items-center justify-between sticky top-0 bg-background/95 backdrop-blur z-10 border-b border-border/50">
                    <div>
                        <h1 className="text-2xl font-headings font-bold">
                            Каталог
                        </h1>
                        <p className='text-sm text-muted-foreground mt-1'>
                            Показано
                            <strong>
                                {24}
                            </strong>
                            результата по заданным критериям
                        </p>
                    </div>
                </div>
                <div className="p-8">
                    <div className="grid grid-cols-4 xl:grid-cols-4 2xl:grid-cols-6 gap-x-6 gap-y-10">
                        {
                            data.map((card: CardDetails) => (
                                <HomeCard title={card.title} genre={card.genre} rating={card.rating} description={card.description} imageUrl={card.imageUrl} id={card.id} key={card.id}/>
                            ))
                        }
                    </div>
                    <div className="flex justify-center mt-12 mb-8">
                        <Button className="px-8 py-3 p-5 border border-(color-border) hover:bg-white bg-white text-(--color-secondary-foreground) transition-colors">Загрузить еще</Button>
                    </div>
                </div>
            </main>
        </div>
    )
}