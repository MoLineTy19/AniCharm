export default function CardPopularity() {
    return (
        <div className="flex shrink-0 items-center">
                        <span
                            className="text-[120px] font-headings font-bold leading-none tracking-tighter text-transparent stroke-text"
                            style={{
                                WebkitTextStroke: '2px var(--color-border)',
                                marginLeft: 0,
                                marginRight: '-20px',
                                zIndex: 0
                            }}
                        >
                          1
                        </span>
            <div className="w-32 aspect-3/4 bg-muted rounded-md relative z-10 border border-border shadow-xl">
                <div className="absolute inset-0 bg-primary/10 rounded-md">
                </div>
                <div className="absolute bottom-2 left-2 right-2 text-xs font-bold text-white drop-shadow-md truncate">
                    Anime Title
                </div>
            </div>
        </div>
    )
}