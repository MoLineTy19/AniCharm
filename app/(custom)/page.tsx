import HeroSection from "./components/heroSection";
import {TrendingSection} from "./components/trendingSection";
import ContinueWatchSection from "./components/continueWatchSection";
import CountryPopularitySection from "./components/countryPopularitySection";
import NewDubbedEpisodes from "./components/newDubbedEpisodes";
import SimilarWatch from "./components/similarWatch";


export default function RootPage() {
    return (
        <>
            <HeroSection/>
            <div className="flex flex-col gap-12 px-8 py-8 -mt-12 relative z-20">
                <ContinueWatchSection/>
                <TrendingSection/>
                <CountryPopularitySection/>
                <NewDubbedEpisodes/>
                <SimilarWatch/>
            </div>
        </>
    )
}