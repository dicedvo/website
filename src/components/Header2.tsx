import useScrollRelPosition from "../hooks/scroll";
import { cn } from "../utilities";
import Header from "./Header";

export default function Header2() {
    const scrollRelPosition = useScrollRelPosition();

    return (
        <Header
            className={cn(
                scrollRelPosition < 0.1 && "backdrop-blur-sm bg-opacity-25",
            )}
            variant={scrollRelPosition >= 0.1 ? "light" : "dark"} />
    )
}