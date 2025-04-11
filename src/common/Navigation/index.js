import { theme } from "../../core/App/theme";
import useWindowWidth from "../useWindowWidth";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";


export const Navigation = ({ isMenuOpen, setIsMenuOpen }) => {
    const windowWidth = useWindowWidth();
    const tabletMax = theme.breakpoints.tabletMax;

    return (
        windowWidth > tabletMax
            ? <DesktopNav />
            : <MobileNav
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
            />
    );
};