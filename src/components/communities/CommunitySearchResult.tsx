import CommunityCard from "./CommunityCard";
import DiceIcon from "../../assets/dice-icon.png";
import Fuse from "fuse.js";
import type { Community } from "../../data/communities";
import { useEffect, useMemo, useState, type FormEvent } from "react";

export default function CommunitySearchResult({ communities: fullCommunities }: { communities: Community[] }) {
    const [searchParams, setSearchParams] = useState(new URLSearchParams(window.location.search));
    const searchQuery = useMemo(() => searchParams.get('q'), [searchParams]);
    const rawCommunities = useMemo(() => {
        return new Fuse(fullCommunities, {
            keys: ['name', 'description'],
            includeMatches: true,
            minMatchCharLength: 2,
            threshold: 0.5,
        });
    }, [fullCommunities]);

    const communities = useMemo(() => {
        if (!searchQuery) {
            return fullCommunities;
        }
        return rawCommunities.search(searchQuery ?? '').map(r => r.item);
    }, [rawCommunities, fullCommunities, searchQuery]);

    const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        const formData = new FormData(evt.target as HTMLFormElement);
        const searchQuery = formData.get('q') as string;
        setSearchParams((sp) => {
            if (searchQuery) {
                sp.set('q', searchQuery);
            } else {
                sp.delete('q');
            }
            return new URLSearchParams(sp);
        });
    }

    useEffect(() => {
        if (searchParams.size === 0) {
            history.pushState({}, '', location.pathname);
            return;
        }
        history.pushState({}, '', `${location.pathname}?${searchParams}`);
    }, [searchParams]);

    return (
        <div className="flex flex-col">
            <div className="w-full bg-gray-100 px-8 md:px-2 py-8 mb-8 md:mb-0">
                <div className="max-w-2xl mx-auto w-full">
                    <div className="border rounded-md w-full bg-white shadow">
                        <form className="w-full flex" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="q"
                                className="flex-1 pl-4 rounded-l-md outline-none"
                                placeholder="Search for a community"
                                defaultValue={searchQuery ?? undefined} />

                            <button className="px-4 py-3" type="submit">
                                <svg className="text-3xl" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256">
                                    <path fill="currentColor" d="M232.49 215.51L185 168a92.12 92.12 0 1 0-17 17l47.53 47.54a12 12 0 0 0 17-17ZM44 112a68 68 0 1 1 68 68a68.07 68.07 0 0 1-68-68"></path>
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="content-wrapper w-full flex flex-row md:flex-col md:items-center rounded-md pb-20">
                <div className="flex flex-wrap items-stretch">
                    {communities.map(c => (
                        <div key={`${c.name}`} className="w-full md:w-1/2 lg:w-1/3 md:pt-16 pb-2 px-2">
                            <CommunityCard data={c} className="h-full" />
                        </div>
                    ))}
                    <div className="w-full md:w-1/2 lg:w-1/3 md:pt-16 pb-2 px-2">
                        <CommunityCard className="h-full" data={{
                            name: "Your community may be the next.",
                            description: "Is your student organization based in Davao City and is interested in joining DICE? You may contact us by through our contact form.",
                            logo: DiceIcon.src,
                            buttonText: "Contact Us",
                            url: "/#contact-us",
                        }} />
                    </div>
                </div>
            </div>

        </div>

    );
}