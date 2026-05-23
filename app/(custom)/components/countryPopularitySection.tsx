import CardPopularity from "@/app/(custom)/components/cardPopularity";

export default function CountryPopularitySection() {
    return (
        <section className="flex flex-col gap-4 mt-4">
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-headings font-bold">
                    Топ 10 в твоей Стране
                </h2>
            </div>
            <div className="flex gap-6 overflow-x-auto pb-4 hide-scrollbar">
                <CardPopularity/>
                <CardPopularity/>
                <CardPopularity/>
                <CardPopularity/>
                <CardPopularity/>
                <CardPopularity/>
            </div>
        </section>
    )
}