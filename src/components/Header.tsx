import { cn } from "../utilities";
import Logo from "./Logo";

export default function Header({ variant = 'light', className }: {
    variant?: 'light' | 'dark',
    className?: string
}) {
    return (
        <header className={cn(
            className,
            "fixed inset-x-0 top-0 py-5 border-b z-50 transition-colors",
            {
                'backdrop-blur-sm text-white border-white border-opacity-70': variant === 'dark',
                'bg-white text-black shadow-lg': variant === 'light'
            }
        )}>
            <div className="content-wrapper flex items-center justify-between mx-auto">
                <Logo variant={variant === 'light' ? 'dark' : 'light'} />

                <ul className="flex space-x-8 font-bold">
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Engagements</a></li>
                    <li><a href="#">Communities</a></li>
                </ul>

                <a href="#" className="button">Contact Us</a>
            </div>
        </header>
    );
}