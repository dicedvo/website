import type { Community } from "../data/communities";
import { cn } from "../utilities";

export default function CommunityCard({ data, className }: { data: Community, className?: string }) {
    return (
        <div className={cn(className, "flex flex-col border shadow-lg p-8 items-center text-center rounded-md")}>
            <div className="mx-auto bg-white p-2 w-32 h-32 -mt-20 shadow-md rounded-full border mb-4 flex items-center justify-center">
                <img src={data.logo} alt={data.name} className="h-auto w-24" />
            </div>

            <h3 className="text-2xl font-black mb-4">{data.name}</h3>
            <p className="text-sm mb-10">{data.description}</p>
            {data.url && <a href={data.url} className="w-full button py-4 text-xl mt-auto">Visit Website</a>}
        </div>
    );
}
