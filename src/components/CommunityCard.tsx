import type { Community } from "../data/communities";
import { cn } from "../utilities";

export default function CommunityCard({ data, className }: { data: Community, className?: string }) {
    return (
        <div className={cn(className, "flex flex-row md:flex-col border shadow-md md:shadow-lg p-4 md:p-8 md:items-center rounded-md")}>
            <div className="md:mx-auto bg-white p-2 w-24 md:w-32 h-24 md:h-32 md:-mt-20 shadow-md rounded-full border mb-4 flex items-center justify-center">
                <img src={data.logo} alt={data.name} className="h-auto w-24" />
            </div>

            <div className="flex-1 flex flex-col pl-4 md:pl-0 h-full md:text-center">
                <h3 className="text-xl md:text-2xl font-extrabold md:font-black mb-4">{data.name}</h3>
                <p className="text-sm mb-4 md:mb-10">{data.description}</p>
                {data.url && <a href={data.url} className="self-end md:self-stretch md:w-full button md:py-4 md:text-xl md:mt-auto">
                    {data.buttonText ?? 'Visit Website'}
                </a>}
            </div>
        </div>
    );
}
