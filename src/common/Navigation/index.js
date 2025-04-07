import { theme } from "../../core/App/theme";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";
import useWindowWidth from "./useWindowWidth";

export const Navigation = () => {
    const windowWidth = useWindowWidth();
    const mobileMax = theme.breakpoints.mobileMax;

    return (
        windowWidth >= mobileMax ? <DesktopNav /> : <MobileNav />
    );
};