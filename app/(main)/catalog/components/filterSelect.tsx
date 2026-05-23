import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";

export interface FilterOption {
    label: string;
    value: string;
}

export interface FilterSelectProps {
    filterTitle: string;
    placeholder: string;
    options: Array<FilterOption>;
}

export default function FilterSelect(data: FilterSelectProps) {
    return (
        <div className="flex flex-col gap-2.5">
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                {data.filterTitle}
            </span>
            <Select>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder={data.placeholder} />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        {
                            data.options.map((item, index) => (
                                <SelectItem value={item.value} key={index}>{item.label}</SelectItem>
                            ))
                        }
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    )
}