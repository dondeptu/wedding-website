import { theme } from "../../core/App/theme";
import useWindowWidth from "../useWindowWidth";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";


export const Navigation = () => {
    const windowWidth = useWindowWidth();
    const tabletMax = theme.breakpoints.tabletMax;

    return (
        windowWidth > tabletMax
            ? <DesktopNav />
            : <MobileNav />
    );
};