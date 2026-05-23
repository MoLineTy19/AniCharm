import {Icon} from "@iconify/react";

export default function ContinueWatchSection() {
    return (
        <section className="flex flex-col gap-4">
            <div className='flex items-center justify-between'>
                <h2 className="text-xl font-headings font-bold flex items-center gap-2">
                    <Icon icon={'lucide:clock'} className="block text-primary size-5"/>
                    Продолжить просмотр
                </h2>
            </div>
            <div className="grid grid-cols-4 gap-6">
                <div className="flex gap-4 bg-secondary/80 backdrop-blur p-3 rounded-lg border border-border items-center hover:border-primary/50 transition-colors cursor-pointer">
                    <div className="w-24 h-16 bg-muted rounded-md overflow-hidden relative shrink-0">
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                            <Icon icon={'lucide:play'}/>
                        </div>
                    </div>
                    <div className="flex flex-col flex-1 gap-1">
                        <h4 className="font-headings font-medium text-sm truncate">
                            Ван-пис
                        </h4>
                        <p className="text-xs text-muted-foreground">
                            Эпизод 1160: Восход
                        </p>
                        <div className="w-full bg-background h-1.5 rounded-full mt-1 overflow-hidden">
                            <div className="bg-primary h-full w-[75%]">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}