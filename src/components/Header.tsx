import { cn } from "../utilities";
import Logo from "./Logo";
import { useState } from "react";

function HeaderItems({ className }: { className?: string }) {
    return (
        <ul className={cn("flex space-x-8 font-bold px-4", className)}>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Engagements</a></li>
            <li><a href="#">Communities</a></li>
        </ul>
    );
}

export default function Header({ variant = 'light', className }: {
    variant?: 'light' | 'dark',
    className?: string
}) {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <header className={cn(
            className,
            "fixed inset-x-0 top-0 py-3 md:py-5 border-b z-50 transition-colors",
            {
                'backdrop-blur-sm text-white border-white border-opacity-70': variant === 'dark',
                'bg-white text-black shadow-lg': variant === 'light'
            }
        )}>
            <div className="content-wrapper flex items-center justify-between mx-auto">
                <Logo variant={variant === 'light' ? 'dark' : 'light'} />
                <HeaderItems className="hidden md:flex ml-auto" />
                <a href="#" className="button ml-auto">Contact Us</a>

                <button className="p-2 md:hidden" onClick={() => setShowMenu(s => !s)}>
                    {/* Hamburger Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} viewBox="0 0 24 24" fill="currentColor">
                        <path fillRule="evenodd" d="M3 5h18v2H3V5zm0 6h18v2H3v-2zm0 6h18v2H3v-2z" />
                    </svg>
                </button>
            </div>

            {showMenu && <div className="md:hidden pt-4">
                <HeaderItems className="flex-col space-x-0 space-y-4" />
            </div>}
        </header>
    );
}