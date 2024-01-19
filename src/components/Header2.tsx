import { useMemo } from "react";
import useScrollRelPosition from "../hooks/scroll";
import { cn } from "../utilities";
import Header from "./Header";

export default function Header2({ autoChangeHeader = true }: { autoChangeHeader?: boolean }) {
    const scrollRelPosition = useScrollRelPosition();
    const isEnabled = useMemo(() => autoChangeHeader && scrollRelPosition < 0.1, [autoChangeHeader, scrollRelPosition]);

    return (
        <Header
            className={cn(isEnabled && "backdrop-blur-sm bg-opacity-25")}
            variant={isEnabled ? "dark" : "light"} />
    )
}
