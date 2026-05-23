import Image from "next/image";
import {
    Combobox,
    ComboboxContent,
    ComboboxEmpty,
    ComboboxInput,
    ComboboxItem,
    ComboboxList
} from "@/components/ui/combobox";

export default function Search() {
    const frameworks = [
        { value: "nextjs", label: "Next.js", image: "/card-preview.jpeg" },
        { value: "sveltekit", label: "SvelteKit", image: "/card-preview.jpeg" },
        { value: "nuxtjs", label: "Nuxt.js", image: "/card-preview.jpeg" },
        { value: "remix", label: "Remix", image: "/card-preview.jpeg" },
        { value: "astro", label: "Astro", image: "/card-preview.jpeg" },
    ] as const

    return (
        <Combobox items={frameworks}>
            <ComboboxInput placeholder="Select a framework" />
            <ComboboxContent>
                <ComboboxEmpty>No items found.</ComboboxEmpty>
                <ComboboxList>
                    {(item) => (
                        <ComboboxItem key={item.value} value={item.value}>
                            <div className="flex items-center gap-2">
                                <Image src={item.image} alt={item.label} width={20} height={20} />
                                <span>{item.label}</span>
                            </div>
                        </ComboboxItem>
                    )}
                </ComboboxList>
            </ComboboxContent>
        </Combobox>
    )
}